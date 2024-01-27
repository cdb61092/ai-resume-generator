import { Text, View } from '@react-pdf/renderer'
import { styles } from '~/components/resume/styles'
import { Section } from './Section'

export function Projects({ projects }) {
    return (
        <Section title="PROJECTS">
            {projects.map(({ title, bullets }) => (
                <>
                    <View style={styles.subheader}>
                        <Text>{title}</Text>
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
