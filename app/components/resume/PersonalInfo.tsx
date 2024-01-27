import { Text, View } from '@react-pdf/renderer'
import { styles } from './styles'

export function PersonalInformation({ user }) {
    const { firstName, lastName, phoneNumber, location, profession, email } = user
    return (
        <View style={styles.header}>
            <Text>
                {firstName} {lastName}
            </Text>
            <Text>{profession}</Text>
            <Text style={styles.contactDetails}>
                {location} | {email} | {phoneNumber}
            </Text>
        </View>
    )
}
