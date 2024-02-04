import { ActionFunctionArgs, json, redirect } from '@remix-run/node'
import { parse } from '@conform-to/zod'
import { z } from 'zod'
import { authenticator } from '~/utils/auth.server'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'

const schoolSchema = z.object({
    id: z.number().optional(),
    school: z.string(),
    degree: z.string().optional(),
    graduationDate: z.string().optional(),
})

const educationSchema = z.object({
    schools: z.array(schoolSchema).nonempty(),
})

export async function action({ request }: ActionFunctionArgs) {
    let authUser = await authenticator.isAuthenticated(request)

    if (!authUser) {
        throw new Error('User is not authenticated')
    }

    let user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            jobExperience: true,
            education: true,
        },
    })

    invariant(user, 'User is not authenticated')

    const formData = await request.formData()
    const submission = parse(formData, {
        schema: educationSchema,
    })

    invariant(submission.value, 'Bad form values')

    const { schools } = submission.value

    schools.map(async (school) => {
        if (school.id) {
            await prisma.education.update({
                where: {
                    id: school.id,
                    userId: user?.id,
                },
                data: {
                    school: school.school,
                    degree: school.degree,
                    graduationDate: school.graduationDate,
                },
            })
        } else {
            if (!user?.id) {
                throw new Error('User is not authenticated')
            }
            await prisma.education.create({
                data: {
                    school: school.school,
                    degree: school.degree,
                    graduationDate: school.graduationDate,
                    userId: user?.id,
                },
            })
        }
    })

    return redirect(`/profile?value=${JSON.stringify(submission.value)}`)
}
