import { json, LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'

export async function loader({ params }: LoaderFunctionArgs) {
    const job = await prisma.job.findUnique({
        where: {
            jobId: params.jobId,
        },
    })

    invariant(job, 'Job not found')

    return json(job)
}

export default function JobListing() {
    const { title, description, company, location, salary, keywords, source } =
        useLoaderData<typeof loader>()
    return (
        <div>
            <h1>Title: {title}</h1>
            <p>Description: {description}</p>
            <p>Company: {company}</p>
            <p>Location: {location}</p>
            <p>Salary: {salary}</p>
            <p>Keywords: {keywords}</p>
            <p>Source: {source}</p>
        </div>
    )
}
