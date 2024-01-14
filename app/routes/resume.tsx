// import { Resume } from '~/components/Resume.client'
import React from 'react'
import { PDFViewer, renderToStream } from '@react-pdf/renderer'
import { jsPDF } from 'jspdf'
// import Resume from '~/components/Resume'
import { createPDFResume } from '~/utils/resume/resume.pdf.server'
import { authenticator } from '~/utils/auth.server'
import invariant from 'tiny-invariant'

export default async function ResumePage() {
    await createPDFResume()

    return <div>hi</div>
}
