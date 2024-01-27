import { requireUserId } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { prisma } from '~/utils/prisma.server'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { getSession } from '~/utils/session.server'
import { createDocxResume } from '~/utils/resume/resume.docx.server'
import { createPDFResume } from '~/utils/resume/resume.pdf.server'

export async function loader({ request }: LoaderFunctionArgs) {
    console.log('in test loader')
    const userId = await requireUserId(request)
    console.log('userId', userId)

    invariant(userId, 'You must be logged in to use this feature')

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            education: true,
            jobExperience: true,
            projects: true,
        },
    })

    await createDocxResume(user)
    return json(user)
}
