import { useForm, useFieldset, useFieldList, conform, list } from '@conform-to/react'
import { parse } from '@conform-to/zod'
import { Form, useLoaderData } from '@remix-run/react'
import React, { useRef } from 'react'
import { z } from 'zod'
import { Button, Input } from '@nextui-org/react'
import { authenticator, requireUserId } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'
import { json, redirect } from '@remix-run/node'
import { capitalize } from '~/utils'

const projectSchema = z.object({
    id: z.number().optional(),
    title: z.string(),
    bullets: z.array(z.string()),
})

const formSchema = z.object({
    projects: z.array(projectSchema).nonempty(),
})

export async function loader({ request }) {
    let userId = await requireUserId(request)

    const projects = await prisma.project.findMany({
        where: {
            userId,
        },
    })
    return json(projects)
}

export async function action({ request }) {
    let authUser = await authenticator.isAuthenticated(request)

    invariant(authUser, 'User is not authenticated')

    const formData = await request.formData()
    const submission = parse(formData, {
        schema: formSchema,
    })

    invariant(submission.value, 'Bad form values')

    const { projects } = submission.value

    const allProjectIds = await prisma.project
        .findMany({
            where: {
                userId: authUser.id,
            },
            select: {
                id: true,
            },
        })
        .then((results) => results.map((result) => result.id))

    const upsertPromises = projects.map((project) =>
        prisma.project.upsert({
            where: {
                id: project.id ?? 0,
            },
            update: {
                title: project.title,
                bullets: project.bullets,
            },
            create: {
                userId: authUser!.id,
                title: project.title,
                bullets: project.bullets,
            },
        })
    )

    const upsertedRecords = await Promise.all(upsertPromises)
    const upsertedIds = upsertedRecords.map((record) => record.id)

    const deleteIds = allProjectIds.filter((id) => !upsertedIds.includes(id))

    // Delete unneeded records
    const deletePromises = deleteIds.map((id) => prisma.project.delete({ where: { id } }))
    await Promise.all(deletePromises)

    return json({ projects: upsertedRecords })
}

export default function ProjectForm() {
    const projectData = useLoaderData<typeof loader>()
    const [form, { projects }] = useForm({
        onValidate({ formData }) {
            return parse(formData, { schema: formSchema })
        },
        shouldValidate: 'onBlur',
        defaultValue: {
            projects: projectData,
        },
    })
    const projectList = useFieldList(form.ref, projects)

    return (
        <Form method="post" {...form.props}>
            {projectList.map((project, index) => (
                <ProjectFieldSet {...project} index={index} listName={project.name} />
            ))}
            <button {...list.insert(projects.name)} className="w-full mb-4">
                <Button color="primary" fullWidth>
                    Add school
                </Button>
            </button>
            <Button fullWidth color="success" type="submit">
                Save
            </Button>
        </Form>
    )
}

function ProjectFieldSet({ listName, index, ...config }) {
    const ref = useRef<HTMLFieldSetElement>(null)
    const { projectTitle, bullets, id } = useFieldset(ref, config)

    const bulletList = useFieldList(ref, bullets)

    const [title, setTitle] = React.useState(projectTitle.defaultValue)
    return (
        <fieldset ref={ref} key={config.key} className="flex flex-col gap-4 mb-4">
            <div className="pl-3 flex justify-between items-baseline">
                <legend>{title ? capitalize(title) : 'New Project'}</legend>
                <button {...list.remove(listName, { index })}>
                    <Button color="danger">Delete</Button>
                </button>
            </div>
            <input type="hidden" {...conform.input(id)} />
            <Input
                type="text"
                {...conform.input(projectTitle)}
                onValueChange={(value) => setTitle(value)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                label="Project"
                placeholder="Project"
            />
            {bulletList.map((bullet, index) => (
                <BulletFieldSet {...bullet} index={index} listName={bullets.name} />
            ))}
            <Input
                type="text"
                {...conform.input(bullets)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                label="Bullets"
                placeholder="Bullets"
            />
            <button {...list.insert(bullets.name)} className="w-full mb-4">
                <Button color="primary" fullWidth>
                    Add school
                </Button>
            </button>
        </fieldset>
    )
}

function BulletFieldSet({ listName, index, ...config }) {
    const ref = useRef<HTMLFieldSetElement>(null)
    const { bullet, id } = useFieldset(ref, config)

    return (
        <fieldset ref={ref} key={config.key} className="flex flex-col gap-4 mb-4">
            <div className="pl-3 flex justify-between items-baseline">
                <legend>Bullet</legend>
                <button {...list.remove(listName, { index })}>
                    <Button color="danger">Delete</Button>
                </button>
            </div>
            <input type="hidden" {...conform.input(id)} />
            <Input
                type="text"
                {...conform.input(bullet)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                label="Bullet"
                placeholder="Bullet"
            />
        </fieldset>
    )
}
