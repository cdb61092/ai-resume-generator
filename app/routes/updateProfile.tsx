import { authenticator } from '~/utils/auth.server'
import { ActionFunctionArgs, redirect } from '@remix-run/node'
import { UpdateUserSchema } from '~/components/forms/schemas'
import { parse } from '@conform-to/zod'
import { prisma } from '~/utils/prisma.server'
import invariant from 'tiny-invariant'

export async function action({ request }: ActionFunctionArgs) {
    let user = await authenticator.isAuthenticated(request)

    invariant(user, 'User is not authenticated')

    const formData = await request.formData()

    const submission = parse(formData, { schema: UpdateUserSchema })

    invariant(submission.value, 'Bad form values')

    const {
        firstName,
        lastName,
        location,
        phoneNumber,
        linkedIn,
        github,
        languages,
        databases,
        frameworks,
        libraries,
        tools,
        profession,
    } = submission.value

    await prisma.user.update({
        where: {
            id: user.id,
        },
        data: {
            firstName,
            lastName,
            profession,
            location,
            phoneNumber,
            linkedIn,
            github,
            languages: languages || [],
            databases: databases || [],
            frameworks: frameworks || [],
            libraries: libraries || [],
            tools: tools || [],
        },
    })

    return redirect('/profile')
}
