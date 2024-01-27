import { Text, View } from '@react-pdf/renderer'
import { styles } from '~/components/resume/styles'

export function Section({ title, children }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.horizontalRule} />
            {children}
        </View>
    )
}
