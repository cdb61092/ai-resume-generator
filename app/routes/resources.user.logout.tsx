import type { ActionFunctionArgs } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server'

export const action = async ({ request }: ActionFunctionArgs) => {
    return await authenticator.logout(request, {
        redirectTo: '/',
    })
}
