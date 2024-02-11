import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { requireUserId } from '~/utils/auth.server'

export async function loader({ request }: LoaderFunctionArgs) {
    const userId = await requireUserId(request)
    const applications = await prisma.application.findMany({
        where: {
            userId,
        },
        include: {
            job: true,
            resume: true,
            coverLetter: true,
        },
    })

    return json(applications)
}

export default function Applications() {
    const applications = useLoaderData<typeof loader>()

    return (
        <div className="flex">
            <div className="min-w-[300px]">
                <h2 className="text-xl font-bold mb-5">Applications</h2>
                <ul>
                    {applications.map(({ id, job: { company, title } }) => {
                        return (
                            <li key={id} className="hover:underline">
                                <Link to={`${id}`}>
                                    <div>{company}</div>
                                    <div className="pl-3">{title}</div>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex-grow min-h-screen pl-10">
                <Outlet />
            </div>
        </div>
    )
}
