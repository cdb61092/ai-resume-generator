import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { Form, Link, useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { Button, Textarea } from '@nextui-org/react'
import React from 'react'
import { JobDescription } from '~/components/JobDescription'

export async function loader({ params }: LoaderFunctionArgs) {
    invariant(params.jobId, 'Job not found')
    console.log('job id in jobs.$jobId:', params.jobId)
    const job = await prisma.job.findUnique({
        where: {
            id: parseInt(params.jobId),
        },
    })

    console.log('job in jobs.$jobId:', job)

    invariant(job, 'Job not found')

    return json(job)
}

export default function JobListing() {
    const { title, description, descriptionHTML, company, location, salary, keywords, source } =
        useLoaderData<typeof loader>()

    const noEmptyDivs = descriptionHTML?.replace(/<br>/g, '')
    return (
        <div className="pt-3 text-2xl">
            <Link to="apply">Apply</Link>
            <h2>
                {company} - {title}
            </h2>
            <p>Salary: {salary}</p>
            <p>{location}</p>
            <JobDescription description={description} descriptionHTML={noEmptyDivs} />
            <p>Keywords: {keywords}</p>
            <p>Source: {source}</p>
            <Form navigate={false} method="post" action={'/resources/resume/create'}>
                <Button type="submit">Create Resume</Button>
            </Form>
        </div>
    )
}

export async function action({ request }: ActionFunctionArgs) {
    return json({ success: true })
}
