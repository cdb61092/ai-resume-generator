import { Document, Page, renderToStream, Text, View } from '@react-pdf/renderer'
import { json, LoaderFunctionArgs } from '@remix-run/node'
import { StyleSheet } from '@react-pdf/renderer'
import { PDFDocument } from '~/components/resume/Resume'
import { styles } from '~/components/resume/styles'
import { PersonalInformation } from '~/components/resume/PersonalInfo'
import { ProfessionalExperience } from '~/components/resume/ProfessionalExperience'
import { Education } from '~/components/resume/Education'
import { TechnicalSkills } from '~/components/resume/TechnicalSkills'
import { Projects } from '~/components/resume/Projects'

export async function loader({ request }: LoaderFunctionArgs) {
    let stream = await renderToStream(<CoverLetterTest />)

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
    let headers = new Headers({ 'Content-Type': 'application/pdf' })
    return new Response(body, { status: 200, headers })
}

function CoverLetterTest() {
    const styles = StyleSheet.create({
        block: {
            display: 'flex',
        },
    })
    return (
        <Document>
            <Page>
                <View>
                    <Text>First page</Text>
                </View>
            </Page>
        </Document>
    )
}
