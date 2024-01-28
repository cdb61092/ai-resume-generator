import { LoaderFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { authenticator } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { useLoaderData } from '@remix-run/react'
import { Page, Document, Text, renderToStream } from '@react-pdf/renderer'
import { PDFDocument } from '~/components/resume/Resume'

export async function loader({ request }: LoaderFunctionArgs) {
    let authUser = await authenticator.isAuthenticated(request)

    if (!authUser) {
        throw new Error('User is not authenticated')
    }

    let user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            jobExperience: true,
            projects: true,
            education: true,
        },
    })

    invariant(user, 'User is not authenticated')

    const base64 = await prisma.resume.findFirst().then((resume) => resume?.pdfData)

    invariant(base64, 'Error reading base64 data')

    const resume = Buffer.from(base64, 'base64')

    // Headers for pdf file type
    let headers = new Headers({ 'Content-Type': 'application/pdf' })
    return new Response(resume, { status: 200, headers })
}

// export default function Test() {
//     // const base64 = useLoaderData<typeof loader>()
//     //
//     // console.log(base64)
//
//     return (
//         <Document>
//             <Page>
//                 <Text>Test</Text>
//             </Page>
//         </Document>
//     )
// }
