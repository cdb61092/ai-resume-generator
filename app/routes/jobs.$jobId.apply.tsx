import { ActionFunctionArgs, json, LoaderFunctionArgs, redirect } from '@remix-run/node'
import { requireUserId } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'

export async function loader({ request, params }: LoaderFunctionArgs) {
    let userId = await requireUserId(request)
    const jobId = params.jobId
    console.log('jobId in jobs.$jobId.apply:', jobId)

    invariant(jobId, 'Job not found')

    const job = await prisma.job.findUnique({
        where: {
            id: parseInt(jobId),
        },
        include: {
            application: true,
        },
    })

    invariant(job, 'Job not found')
    console.log('job in jobs.$jobId.apply:', job)

    if (job.application) {
        console.log('application exists')
        return redirect(`/applications/${job.application.id}`)
    }

    console.log('job not found, creating application')

    const newApplication = await prisma.application.create({
        data: {
            jobId: parseInt(jobId),
            userId: userId,
        },
    })

    return redirect(`/applications/${newApplication.id}`)
}
