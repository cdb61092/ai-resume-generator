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

    console.log('submission')
    console.log(submission)

    invariant(submission.value, 'Bad form values')

    const { id } = submission.value

    await prisma.userJob.delete({
        where: {
            id: id,
        },
    })

    return redirect('/profile')
}
