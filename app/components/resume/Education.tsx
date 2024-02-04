import { Text, View } from '@react-pdf/renderer'
import { styles } from '~/components/resume/styles'
import { Section } from './Section'

export function Education({ education }) {
    return (
        <Section title="EDUCATION">
            {education.map(({ school, location, degree, graduationDate }) => (
                <View style={styles.education}>
                    <View style={styles.splitRow}>
                        <Text style={{ fontWeight: 'extrabold' }}>{school}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{location}</Text>
                    </View>
                    <View style={styles.splitRow}>
                        <Text>{degree}</Text>
                        <Text>Graduated {graduationDate}</Text>
                    </View>
                </View>
            ))}
        </Section>
    )
}
