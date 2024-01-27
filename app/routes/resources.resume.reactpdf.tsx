import { renderToStream } from '@react-pdf/renderer'
// this is your PDF document component created with React PDF
import { PDFDocument } from '~/components/resume/Resume'
import type { LoaderFunction } from '@remix-run/node'
import { authenticator } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { prisma } from '~/utils/prisma.server'

export let loader: LoaderFunction = async ({ request, params }) => {
    let auth = await authenticator.isAuthenticated(request)
    invariant(auth, 'You must be logged in to use this feature')

    const user = await prisma.user.findUnique({
        where: {
            id: auth.id,
        },
        include: {
            education: true,
            jobExperience: true,
            projects: true,
        },
    })

    let stream = await renderToStream(<PDFDocument user={user} />)

    // Transform it to a Buffer to send in the Response
    let body: Buffer = await new Promise((resolve, reject) => {
        let buffers: Uint8Array[] = []
        stream.on('data', (data) => {
            buffers.push(data)
        })
        stream.on('end', () => {
            resolve(Buffer.concat(buffers))
        })
        stream.on('error', reject)
    })

    // finally create the Response with the correct Content-Type header for
    // a PDF
    let headers = new Headers({ 'Content-Type': 'application/pdf' })
    return new Response(body, { status: 200, headers })
}
