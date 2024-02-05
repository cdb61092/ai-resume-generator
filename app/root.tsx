import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigate,
} from '@remix-run/react'
import { json, LinksFunction } from '@remix-run/node'
import globals from '~/global.css'
import tailwind from '~/tailwind.css'
import { prisma } from './utils/prisma.server'
import { Header } from '~/components/header'
import { NextUIProvider } from '@nextui-org/react'
import { authenticator } from '~/utils/auth.server'

export const links: LinksFunction = () => [
    { rel: 'stylesheet', href: globals },
    { rel: 'stylesheet', href: tailwind },
]

export const loader = async ({ request }) => {
    let jobs = await prisma.job.findMany()
    let skills = Array.from(new Set(jobs.flatMap((job) => job.keywords))).sort()

    let user = await authenticator.isAuthenticated(request)

    return json({ jobs, skills, user }, { status: 200 })
}

export default function App() {
    const { user } = useLoaderData<typeof loader>()
    const navigate = useNavigate()

    return (
        <html>
            <head>
                <title>Scrapy</title>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body className="min-h-screen dark:text-white text-black bg-white dark:bg-gray-600">
                <NextUIProvider navigate={navigate}>
                    <Header user={user} />
                    <div className="max-w-[1200px] mx-auto">
                        <Outlet />
                    </div>
                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </NextUIProvider>
            </body>
        </html>
    )
}
