import { authenticator } from '~/utils/auth.server'
import invariant from 'tiny-invariant'
import { jsonMode } from '~/utils/openai/resume.server'
import { jsPDF } from 'jspdf'

export async function createPDFResume(user) {
    const {
        firstName,
        lastName,
        phoneNumber,
        location,
        profession,
        email,
        github,
        linkedIn,
        frameworks,
        languages,
        libraries,
        tools,
        userJob,
        education,
        projects,
    } = user

    const doc = new jsPDF()

    const pageWidth = doc.internal.pageSize.getWidth()

    const leftMargin = 10
    const rightMargin = 10

    const centerWidth = pageWidth / 2

    doc.setFontSize(20)
    doc.text(`Chase Buchholz`, centerWidth, 10, { align: 'center' })
    doc.text(`Software Engineer`, centerWidth, 20, { align: 'center' })

    doc.setFontSize(12)
    doc.text(
        'Kansas City, MO 64012 • chasebuchholzdev@gmail.com • (816) 678-9990',
        centerWidth,
        30,
        { align: 'center' }
    )

    doc.setFontSize(16)
    doc.text('PROFESSIONAL EXPERIENCE', 10, 40)

    doc.line(10, 42, 200, 42)

    // Left-aligned text
    const company = 'Go Local Interactive'
    doc.text(company, leftMargin, 50)

    // Calculate the x position for the right-aligned text
    const rightTextWidth =
        (doc.getStringUnitWidth(location) * doc.getFontSize()) / doc.internal.scaleFactor
    const rightTextX = pageWidth - rightTextWidth - rightMargin // Subtract the text width and right margin from the page width
    doc.text(location, rightTextX, 50)

    // Left-aligned text
    const jobTitle = 'Go Local Interactive'
    doc.text(jobTitle, leftMargin, 50)

    // Right-aligned text
    const jobLocation = 'Overland Park, KS'
    // Calculate the x position for the right-aligned text
    const jobLocationWidth =
        (doc.getStringUnitWidth(location) * doc.getFontSize()) / doc.internal.scaleFactor
    const jobLocationX = pageWidth - jobLocationWidth - rightMargin // Subtract the text width and right margin from the page width
    doc.text(jobLocation, jobLocationX, 50)

    doc.save('a1.pdf')

    function splitRow(leftText, rightText, yPos) {
        doc.setFontSize(12) // Set the font size for the row
        // Place the left text at the left margin
        doc.text(leftText, leftMargin, yPos)

        // Calculate the x position for the right-aligned text
        const rightTextWidth =
            (doc.getStringUnitWidth(rightText) * doc.getFontSize()) / doc.internal.scaleFactor
        const rightTextX = pageWidth - rightTextWidth - rightMargin

        // Place the right text at the calculated position
        doc.text(rightText, rightTextX, yPos)
    }
}
