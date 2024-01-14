import {
    AlignmentType,
    BorderStyle,
    Document,
    HeadingLevel,
    Packer,
    Paragraph,
    Table as DocxTable,
    TableCell as DocxTableCell,
    TableRow as DocxTableRow,
    WidthType,
} from 'docx'
import fs from 'fs'

function nameHeader(firstName: string, lastName: string) {
    return new Paragraph({
        text: `${firstName} ${lastName}`,
        heading: HeadingLevel.TITLE, // You can also use custom styles for more control
        alignment: AlignmentType.CENTER,
    })
}

function professionSubheader(profession: string) {
    return new Paragraph({
        text: profession,
        heading: HeadingLevel.HEADING_5, // You can also use custom styles for more control
        alignment: AlignmentType.CENTER,
    })
}

function contactInfo(location: string, email: string, phone: string) {
    return new Paragraph({
        text: `${location} • ${email} • ${phone}`,
        alignment: AlignmentType.CENTER,
    })
}

function splitRow(leftContent: string, rightContent: string) {
    return new DocxTableRow({
        children: [
            new DocxTableCell({
                children: [
                    new Paragraph({
                        text: leftContent,
                        alignment: AlignmentType.LEFT,
                    }),
                ],
                width: {
                    size: 50,
                    type: WidthType.PERCENTAGE,
                },
            }),
            new DocxTableCell({
                children: [
                    new Paragraph({
                        text: rightContent,
                        alignment: AlignmentType.RIGHT,
                    }),
                ],
                width: {
                    size: 50,
                    type: WidthType.PERCENTAGE,
                },
            }),
        ],
    })
}

function jobTitleAndDate(jobTitle: string, date: string) {
    return splitRow(jobTitle, date)
}

function sectionHeader(headerText: string) {
    return new Paragraph({
        text: headerText,
        heading: HeadingLevel.HEADING_3,
        border: {
            bottom: {
                color: '000000',
                space: 0,
                style: BorderStyle.SINGLE,
                size: 6,
            },
        },
    })
}

function professionalExperienceSection(jobs) {
    const header = sectionHeader('PROFESSIONAL EXPERIENCE')
    const companyAndLocation = splitRow('Go Local Interactive', 'Overland Park, KS')
    const jobTitleAndDate = splitRow('Software Engineer', 'Aug 2021 - Present')
    const table = new DocxTable({
        width: {
            size: 100,
            type: WidthType.PERCENTAGE,
        },
        borders: {
            top: { style: BorderStyle.NIL },
            bottom: { style: BorderStyle.NIL },
            left: { style: BorderStyle.NIL },
            right: { style: BorderStyle.NIL },
            insideVertical: { style: BorderStyle.NIL },
            insideHorizontal: { style: BorderStyle.NIL },
        },
        alignment: AlignmentType.CENTER,
        rows: [companyAndLocation, jobTitleAndDate],
    })

    return [header, table]
}

export async function createDocxResume(user) {
    // Contact details
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
    console.log(user)

    const doc = new Document({
        sections: [
            {
                children: [
                    nameHeader(firstName, lastName),
                    professionSubheader(profession),
                    contactInfo(location, email, phoneNumber),
                    ...professionalExperienceSection(userJob),
                ],
            },
        ],
    })

    // Used to export the file into a .docx file
    Packer.toBuffer(doc).then((buffer) => {
        fs.writeFileSync('app/generatedResumes/resume1.docx', buffer)
    })
}
