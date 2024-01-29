import { useForm, useFieldset, useFieldList, conform, list } from '@conform-to/react'
import { parse } from '@conform-to/zod'
import { Form, useLoaderData } from '@remix-run/react'
import React, { useRef } from 'react'
import { Button, Input } from '@nextui-org/react'
import { authenticator, requireUserId } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'
import { json, redirect } from '@remix-run/node'
import { capitalize } from '~/utils'
import { withZod } from '@remix-validated-form/with-zod'
import { nanoid } from 'nanoid'
import { FieldArray, ValidatedForm, validationError, ValidatorData } from 'remix-validated-form'
import { z } from 'zod'

export const validator = withZod(
    z.object({
        projects: z.array(
            z.object({ id: z.number().optional(), title: z.string(), bullets: z.array(z.string()) })
        ),
    })
)

export async function loader({ request }) {
    let userId = await requireUserId(request)

    const projects = await prisma.project.findMany({
        where: {
            userId,
        },
    })
    return json({
        defaultValues: {
            projects: projects,
        },
    })
}

export async function action({ request }) {
    console.log('action')
    let authUser = await authenticator.isAuthenticated(request)

    invariant(authUser, 'User is not authenticated')

    const result = await validator.validate(await request.formData())

    if (result.error) {
        return validationError(result.error)
    }

    const { projects } = result.data

    await prisma.project.deleteMany({
        where: {
            userId: authUser.id,
        },
    })

    await prisma.project.createMany({
        data: projects.map((project) => ({
            ...project,
            userId: authUser!.id,
        })),
    })

    return json({})
}

export default function ProjectForm() {
    const { defaultValues } = useLoaderData<typeof loader>();
  
    return (
      <ValidatedForm
        defaultValues={defaultValues}
        validator={validator}
        method="post"
        id="project-form"
        onSubmit={async (data) => console.log(`data: ${data}`)}
        className="space-y-6"
      >
        <FieldArray name="projects">
          {(projects, { push, remove }) => (
            <>
              {projects.map(({ defaultValue, key }, index) => (
                <Project
                  defaultValue={defaultValue}
                  key={key}
                  projectIndex={index}
                  remove={remove}
                />
              ))}
              <Button
                onClick={() => push({ id: nanoid() })}
                color="primary"
                className="mb-3"
                type="button"
                fullWidth
              >
                Add project
              </Button>
            </>
          )}
        </FieldArray>
        <button
          type="submit"
          className="w-full py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
        >
          Save
        </button>
      </ValidatedForm>
    );
  }
  
  function Project({ defaultValue, projectIndex, remove }) {
    const [title, setTitle] = React.useState(defaultValue.title || 'Project Title');
  
    return (
      <fieldset className="p-4 border rounded-lg space-y-4">
        <div className="flex justify-between items-center mb-2">
          <legend className="text-lg font-semibold">{title ? capitalize(title) : 'New Project'}</legend>
          <Button onClick={() => remove(projectIndex)}>
            Remove
          </Button>
        </div>
        <Input
          fullWidth
          color="primary"
          size="lg"
          placeholder="Project Title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          name={`projects.${projectIndex}.title`}
        />
        <Bullets projectIndex={projectIndex} />
      </fieldset>
    );
  }
  
  function Bullets({ projectIndex }) {
    return (
      <FieldArray name={`projects.${projectIndex}.bullets`}>
        {(bullets, { push, remove }) => (
          <>
            <div className="flex items-center justify-between mb-2">
              <label className="font-semibold">Bullets</label>
              <Button size="sm" onClick={() => push('')}>
                Add Bullet
              </Button>
            </div>
            {bullets.map(({ defaultValue, key }, index) => (
              <div key={key} className="flex items-center space-x-2">
                <Input
                  fullWidth
                  color="primary"
                  size="lg"
                  placeholder="Bullet Point"
                  defaultValue={typeof defaultValue === 'string' ? defaultValue : ''}
                  name={`projects.${projectIndex}.bullets.${index}`}
                />
                <Button size="sm" onClick={() => remove(index)}>
                  Remove
                </Button>
              </div>
            ))}
          </>
        )}
      </FieldArray>
    );
  }
