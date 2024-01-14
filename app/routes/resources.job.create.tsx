import { ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server'
import { parse } from '@conform-to/zod'
import { UserJobSchema } from '~/components/forms/schemas'
import invariant from 'tiny-invariant'
import { prisma } from '~/utils/prisma.server'
import { redirect } from '@remix-run/node'

export async function action({ request }: ActionFunctionArgs) {
    let user = await authenticator.isAuthenticated(request)

    if (!user) {
        throw new Error('User is not authenticated')
    }

    const formData = await request.formData()
    const submission = parse(formData, { schema: UserJobSchema })

    console.log('submission')
    console.log(submission)

    invariant(submission.value, 'Bad form values')

    const { company, title, location, startDate, endDate, responsibilities } = submission.value

    await prisma.userJob.create({
        data: {
            userId: user.id,
            company,
            title,
            location,
            startDate,
            endDate,
            responsibilities,
        },
    })

    return redirect('/profile/jobs')
}
