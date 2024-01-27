import { Text, View } from '@react-pdf/renderer'
import { styles } from '~/components/resume/styles'
import { Section } from './Section'

export function TechnicalSkills({ languages, frameworks, libraries, tools }) {
    const formatSkills = (skills) => {
        return skills.join(', ')
    }

    return (
        <Section title="TECHNICAL SKILLS">
            <View style={styles.technicalSkills}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Languages: </Text>
                    <Text>{formatSkills(languages)}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Frameworks: </Text>
                    <Text>{formatSkills(frameworks)}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Libraries: </Text>
                    <Text>{formatSkills(libraries)}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text>Developer Tools: </Text>
                    <Text>{formatSkills(tools)}</Text>
                </View>
            </View>
        </Section>
    )
}
