import { requireUserId } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { prisma } from '~/utils/prisma.server'
import { ActionFunctionArgs, json, LoaderFunctionArgs } from '@remix-run/node'
import { getSession } from '~/utils/session.server'
import { createDocxResume } from '~/utils/resume/resume.docx.server'
import { createPDFResume } from '~/utils/resume/resume.pdf.server'
import { jsonMode } from '~/utils/openai.server'
import ReactPDF, {
    Page,
    renderToStream,
    View,
    Document,
    Text,
    renderToFile,
} from '@react-pdf/renderer'
import { PDFDocument } from '~/components/resume/Resume'
import PDFViewer = ReactPDF.PDFViewer

export async function action({ request }: ActionFunctionArgs) {
    console.log('in action')
    const userId = await requireUserId(request)

    invariant(userId, 'You must be logged in to use this feature')

    const user = await prisma.user.findUnique({
        where: { id: userId },
        include: {
            education: true,
            jobExperience: true,
            projects: true,
        },
    })

    invariant(user, 'User not found')

    const formData = await request.formData()
    const jobDescription = formData.get('jobDescription')
    const experience = user.jobExperience.reduce((acc, job) => {
        return acc.concat(job.responsibilities)
    }, '')

    console.log(experience)

    const bullets = await jsonMode(jobDescription, experience)

    let stream = await renderToStream(<PDFDocument user={user} bullets={bullets} />)

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

    await prisma.resume.create({
        data: {
            userId: user.id,
            pdfData: body.toString('base64'),
        },
    })

    // finally create the Response with the correct Content-Type header for
    // a PDF
    let headers = new Headers()
    headers.append('Content-Type', 'application/pdf')
    // headers.append('Content-Disposition', 'attachment; filename="resume.pdf"')

    return json({ user }, { status: 200, headers })
}
