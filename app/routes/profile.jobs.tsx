import { parse } from '@conform-to/zod'
import { useForm, conform } from '@conform-to/react'
import { Button, Input, Tab, Tabs, Textarea } from '@nextui-org/react'
import React from 'react'
import { UpdateJobSchema } from '~/components/forms/schemas'
import invariant from 'tiny-invariant'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import { Form, useLoaderData } from '@remix-run/react'
import { ActionFunctionArgs } from '@remix-run/node'
import { CreateJobForm } from '~/components/forms/CreateJobForm'

// Loads the users job experience data
export async function loader({ request }) {
    let user = await authenticator.isAuthenticated(request)
    invariant(user, 'User is not authenticated')

    const jobs = await prisma.userJob.findMany({
        where: {
            userId: user.id,
        },
    })

    return { jobs }
}

// Updates the user's job experience
export async function action({ request }: ActionFunctionArgs) {
    let user = await authenticator.isAuthenticated(request)

    invariant(user, 'User is not authenticated')

    const formData = await request.formData()
    const submission = parse(formData, { schema: UpdateJobSchema })

    invariant(submission.value, 'Bad form values')

    // 'delete' or 'submit (update)'
    const { intent } = submission.payload

    // Delete the job record
    if ('delete' === intent) {
        const { id } = submission.value

        await prisma.userJob.delete({
            where: {
                id: id,
            },
        })

        return null
    }

    const { company, title, location, startDate, endDate, responsibilities, id } = submission.value

    // Update the job record
    await prisma.userJob.update({
        where: {
            id: id,
        },
        data: {
            company,
            title,
            location,
            startDate,
            endDate,
            responsibilities,
        },
    })

    return null
}

export default function Experience() {
    const { jobs } = useLoaderData<typeof loader>()
    const [form, { company, title, location, startDate, endDate, responsibilities, id }] = useForm()

    return (
        <Tabs fullWidth>
            {jobs.length === 0 && (
                <Tab title="New Company">
                    <CreateJobForm />
                </Tab>
            )}
            {jobs.map((job) => (
                <Tab key={job.id} title={job.title}>
                    <Form
                        {...form.props}
                        method="post"
                        navigate={false}
                        className="flex flex-col gap-4">
                        <input type="hidden" {...conform.input(id)} value={job.id} />
                        <Input
                            type="text"
                            label="Company"
                            {...conform.input(company)}
                            className="border-none rounded-lg"
                            defaultValue={job.company}
                        />
                        <Input
                            type="text"
                            label="Title"
                            {...conform.input(title)}
                            className="border-none rounded-xl"
                            defaultValue={job.title}
                        />
                        <Input
                            type="text"
                            label="Location"
                            {...conform.input(location)}
                            className="border-none rounded-xl"
                            defaultValue={job.location}
                        />
                        <Input
                            type="text"
                            label="Start Date"
                            {...conform.input(startDate)}
                            className="border-none rounded-xl"
                            defaultValue={job.startDate}
                        />
                        <Input
                            type="text"
                            label="End Date"
                            {...conform.input(endDate)}
                            className="border-none rounded-xl"
                            defaultValue={job.endDate}
                        />
                        <Textarea
                            label="Responsibilities"
                            {...conform.input(responsibilities)}
                            className="border-none rounded-xl"
                            defaultValue={job.responsibilities}
                        />
                        <Button
                            color="success"
                            type="submit"
                            className="border-none text-[#1f2937] rounded-xl p-2">
                            Save
                        </Button>
                        <Button
                            color="danger"
                            type="submit"
                            name="intent"
                            value="delete"
                            className="border-none text-[#1f2937] rounded-xl p-2">
                            Delete
                        </Button>
                    </Form>
                </Tab>
            ))}
        </Tabs>
    )
}
