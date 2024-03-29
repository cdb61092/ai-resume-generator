import { useForm, useFieldset, useFieldList, conform, list } from '@conform-to/react'
import { parse } from '@conform-to/zod'
import { Form, useLoaderData } from '@remix-run/react'
import React, { useRef } from 'react'
import { z } from 'zod'
import { Button, Input } from '@nextui-org/react'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'
import { json, redirect } from '@remix-run/node'
import { capitalize } from '~/utils'

const schoolSchema = z.object({
    id: z.number().optional(),
    school: z.string(),
    degree: z.string().optional(),
    location: z.string().optional(),
    graduationDate: z.string().optional(),
})

const formSchema = z.object({
    schools: z.array(schoolSchema).nonempty(),
})

export async function loader({ request }) {
    let authUser = await authenticator.isAuthenticated(request)

    invariant(authUser, 'User is not authenticated')

    const education = await prisma.education.findMany({
        where: {
            userId: authUser.id,
        },
    })
    return json(education)
}

export async function action({ request }) {
    let authUser = await authenticator.isAuthenticated(request)

    invariant(authUser, 'User is not authenticated')

    const formData = await request.formData()
    const submission = parse(formData, {
        schema: formSchema,
    })

    invariant(submission.value, 'Bad form values')

    const { schools } = submission.value

    const allEducationIds = await prisma.education
        .findMany({
            where: {
                userId: authUser.id,
            },
            select: {
                id: true,
            },
        })
        .then((results) => results.map((result) => result.id))

    const upsertPromises = schools.map((school) =>
        prisma.education.upsert({
            where: {
                id: school.id ?? 0,
            },
            update: {
                school: school.school,
                degree: school.degree,
                location: school.location,
                graduationDate: school.graduationDate,
            },
            create: {
                userId: authUser!.id,
                school: school.school,
                degree: school.degree,
                location: school.location,
                graduationDate: school.graduationDate,
            },
        })
    )

    const upsertedRecords = await Promise.all(upsertPromises)
    const upsertedIds = upsertedRecords.map((record) => record.id)

    const deleteIds = allEducationIds.filter((id) => !upsertedIds.includes(id))

    // Delete unneeded records
    const deletePromises = deleteIds.map((id) => prisma.education.delete({ where: { id } }))
    await Promise.all(deletePromises)

    return json({ education: upsertedRecords })
}

export default function EducationForm() {
    const education = useLoaderData<typeof loader>()
    const [form, { schools }] = useForm({
        onValidate({ formData }) {
            return parse(formData, { schema: formSchema })
        },
        shouldValidate: 'onBlur',
        defaultValue: {
            schools: education,
        },
    })
    const schoolList = useFieldList(form.ref, schools)

    return (
        <Form method="post" {...form.props}>
            {schoolList.map((school, index) => (
                <SchoolFieldSet {...school} index={index} listName={schools.name} />
            ))}
            <button {...list.insert(schools.name)} className="w-full mb-4">
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

function SchoolFieldSet({ listName, index, ...config }) {
    const ref = useRef<HTMLFieldSetElement>(null)
    const { school, degree, graduationDate, location, id } = useFieldset(ref, config)

    const [title, setTitle] = React.useState(school.defaultValue)
    return (
        <fieldset ref={ref} key={config.key} className="flex flex-col gap-4 mb-4">
            <div className="pl-3 flex justify-between items-baseline">
                <legend>{title ? capitalize(title) : 'New School'}</legend>
                <button {...list.remove(listName, { index })}>
                    <Button color="danger">Delete</Button>
                </button>
            </div>
            <input type="hidden" {...conform.input(id)} />
            <Input
                type="text"
                {...conform.input(school)}
                onValueChange={(value) => setTitle(value)}
                className="border-none p-2"
                label="School"
                placeholder="School"
            />
            <Input
                type="text"
                {...conform.input(degree)}
                className="border-none p-2"
                label="Degree"
                placeholder="Degree"
            />
            <Input
                type="text"
                {...conform.input(location)}
                className="border-none p-2"
                label="Location"
                placeholder="Location"
            />
            <Input
                type="text"
                {...conform.input(graduationDate)}
                className="border-none p-2"
                label="Graduation Date"
                placeholder="Graduation Date"
            />
        </fieldset>
    )
}
