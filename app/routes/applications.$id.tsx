import { json, LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'
import { Form, Link, useLoaderData } from '@remix-run/react'
import { JobDescription } from '~/components/JobDescription'

export async function loader({ params }: LoaderFunctionArgs) {
    console.log('params in applications.$id')
    console.log(params)
    invariant(params.id, 'Application not found')

    let application = await prisma.application.findUnique({
        where: {
            id: parseInt(params.id),
        },
        include: {
            job: true,
            resume: true,
            coverLetter: true,
        },
    })

    invariant(application, 'Application not found')

    return json(application)
}

export default function Application() {
    let application = useLoaderData<typeof loader>()
    const {
        job: { company, title, location, salary, description, descriptionHTML, keywords, source },
    } = application
    const noEmptyDivs = descriptionHTML?.replace(/<br>/g, '')

    return (
        <>
            <h2>
                {company} - {title}
            </h2>
            <p>Salary: {salary}</p>
            <p>{location}</p>
            <JobDescription description={description} descriptionHTML={noEmptyDivs} />
            <p>Keywords: {keywords}</p>
            <p>Source: {source}</p>
            <div>
                <h3>Resume</h3>
                {application.resume ? (
                    <Link to={`/resume/${application.resume.id}`} target="_blank">
                        View Resume
                    </Link>
                ) : (
                    <Form method="post" action={'/resources/resume/create'} navigate={false}>
                        <input type="hidden" name="jobDescription" value={description} />
                        <input type="hidden" name="applicationId" value={application.id} />
                        <button type="submit">Create Resume</button>
                    </Form>
                )}
            </div>
            <div>
                <h3>Cover letter</h3>
                {application.coverLetter ? (
                    <Link to={`/coverLetter/${application.coverLetter.id}`} target="_blank">
                        View Cover Letter
                    </Link>
                ) : (
                    <Form method="post" action={'/resources/coverletter/create'} navigate={false}>
                        <input type="hidden" name="jobDescription" value={description} />
                        <input type="hidden" name="applicationId" value={application.id} />
                        <button type="submit">Create Cover Letter</button>
                    </Form>
                )}
            </div>
        </>
    )
}
