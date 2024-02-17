import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
// import { styles } from '~/components/resume/styles'

export function CoverLetter({ user, coverLetterText, job }) {
    return (
        <Document>
            <Page style={styles.page}>
                <Text>
                    {user.firstName} {user.lastName}
                </Text>
                <Text>{user.phoneNumber}</Text>
                <Text>{user.email}</Text>
                <Text>
                    {new Date().toLocaleDateString('en-us', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}
                </Text>
                <Text style={{ marginTop: 30, marginBottom: 10 }}>
                    Dear Hiring Manager at {job.company},
                </Text>
                <Text style={{ textIndent: 20 }}>{coverLetterText}</Text>
                <Text style={{ marginTop: 30 }}>Sincerely,</Text>
                <Text style={{ marginTop: 10 }}>
                    {user.firstName} {user.lastName}
                </Text>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 60,
        fontSize: 12,
    },
})
