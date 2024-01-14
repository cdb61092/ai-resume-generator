import {
    Form,
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
    useNavigate,
} from '@remix-run/react'
import type { ActionFunctionArgs } from '@remix-run/node'
import { json, LinksFunction } from '@remix-run/node'
import globals from '~/global.css'
import tailwind from '~/tailwind.css'
import { prisma } from './utils/prisma.server'
import OpenAI from 'openai'
import { Header } from '~/components/Navbar'
import { NextUIProvider } from '@nextui-org/react'
import { authenticator } from '~/utils/auth.server'
import { jsonMode } from '~/utils/openai.server'

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

export async function action({ request }: ActionFunctionArgs) {
    const res = await jsonMode(request)

    const content = res.choices[0].message.content ?? ''

    return json({ message: 'Hello world!' }, { status: 200 })
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
            <body className="min-h-screen bg-gray-100">
                <NextUIProvider navigate={navigate}>
                    <div className="flex min-h-screen">
                        <Header user={user} />
                        <main className="bg-gray-400 flex-grow">
                            <Outlet />
                        </main>
                    </div>

                    <ScrollRestoration />
                    <Scripts />
                    <LiveReload />
                </NextUIProvider>
            </body>
        </html>
    )
}
