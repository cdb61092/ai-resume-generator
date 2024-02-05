import { Header } from '~/components/header'
import { prisma } from '~/utils/prisma.server'
import { authenticator } from '~/utils/auth.server'
import { json } from '@remix-run/node'
import { Outlet, useLoaderData } from '@remix-run/react'

export const loader = async ({ request }) => {
    let jobs = await prisma.job.findMany()
    // let skills = Array.from(new Set(jobs.flatMap((job) => job.keywords))).sort()

    let user = await authenticator.isAuthenticated(request)

    return json({ user }, { status: 200 })
}

export default function Index() {
    const { user } = useLoaderData<typeof loader>()
    return (
        <main className="bg-gray-400 flex-grow max-w-[1200px]">
            <h1>indexx</h1>
            <Outlet />
        </main>
    )
}
