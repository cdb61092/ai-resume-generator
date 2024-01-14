import type {ActionFunctionArgs} from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
    console.log('in logout action');
    return await authenticator.logout(request, {
        redirectTo: "/",
    });
};
