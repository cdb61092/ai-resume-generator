import { ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server'
import { parse } from '@conform-to/zod'
import { UpdateJobSchema } from '~/components/forms/schemas'
import invariant from 'tiny-invariant'
import { prisma } from '~/utils/prisma.server'
import { redirect } from '@remix-run/node'

export async function action({ request }: ActionFunctionArgs) {
    let user = await authenticator.isAuthenticated(request)

    invariant(user, 'User is not authenticated')

    const formData = await request.formData()
    const submission = parse(formData, { schema: UpdateJobSchema })

    invariant(submission.value, 'Bad form values')

    const { intent } = submission.payload

    if ('delete' === intent) {
        const { id } = submission.value

        await prisma.userJob.delete({
            where: {
                id: id,
            },
        })

        return redirect('/profile')
    }

    const { company, title, location, startDate, endDate, responsibilities, id } = submission.value

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

    return redirect('/profile')
}
