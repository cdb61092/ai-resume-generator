import { Text, View } from '@react-pdf/renderer'
import { styles } from '~/components/resume/styles'
import { Section } from './Section'

export function ProfessionalExperience({ jobExperience, bullets }) {
    return (
        <Section title="PROFESSIONAL EXPERIENCE">
            {jobExperience.map(({ company, location, title, startDate, endDate }) => (
                <>
                    <View style={styles.subheader}>
                        <View style={styles.splitRow}>
                            <Text>{company}</Text>
                            <Text>{location}</Text>
                        </View>
                        <View style={styles.splitRow}>
                            <Text>{title}</Text>
                            <Text>
                                {startDate} - {endDate}
                            </Text>
                        </View>
                    </View>

                    <View style={styles.bulletedList}>
                        {bullets.map((bullet, i) => (
                            <View key={i} style={styles.listItem}>
                                <Text style={styles.bulletPoint}>•</Text>
                                <Text style={styles.itemContent}>{bullet}</Text>
                            </View>
                        ))}
                    </View>
                </>
            ))}
        </Section>
    )
}
