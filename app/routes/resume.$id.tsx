import { LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { authenticator } from '~/utils/auth.server'
import invariant from 'tiny-invariant'

export async function loader({ request, params }: LoaderFunctionArgs) {
    let authUser = await authenticator.isAuthenticated(request)
    const resumeId = params.id

    invariant(resumeId, 'Resume not found')

    if (!authUser) {
        throw new Error('User is not authenticated')
    }

    let user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            jobExperience: true,
            projects: true,
            education: true,
        },
    })

    invariant(user, 'User is not authenticated')

    const base64 = await prisma.resume
        .findUnique({
            where: {
                id: parseInt(resumeId),
            },
        })
        .then((resume) => resume?.pdfData)

    invariant(base64, 'Error reading base64 data')

    const resume = Buffer.from(base64, 'base64')

    // Headers for pdf file type
    let headers = new Headers({ 'Content-Type': 'application/pdf' })
    return new Response(resume, { status: 200, headers })
}
