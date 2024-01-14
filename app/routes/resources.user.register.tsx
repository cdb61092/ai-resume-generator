import type { ActionFunctionArgs } from '@remix-run/node'
import { register } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { redirect } from '@remix-run/node'
import { parse } from '@conform-to/zod'
import { AuthSchema } from '~/components/forms/schemas'

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData()

    const submission = parse(formData, { schema: AuthSchema })

    invariant(submission.value, 'Bad form values')

    const { email, password } = submission.value

    await register(email, password)

    return redirect('/login')
}
