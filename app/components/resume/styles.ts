import { StyleSheet } from '@react-pdf/renderer'

export const styles = StyleSheet.create({
    page: {
        padding: 30,
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    horizontalRule: {
        marginTop: 2,
        marginBottom: 10,
        width: '100%', // Adjust width as needed
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        borderBottomStyle: 'solid',
    },
    splitRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    listItem: {
        flexDirection: 'row',
        marginBottom: 5,
        fontSize: 10,
    },
    bulletPoint: {
        width: 10, // Adjust the width for the bullet point
        textAlign: 'right',
        marginRight: 7,
    },
    bulletedList: {
        paddingLeft: 15,
    },
    itemContent: {
        flex: 1,
        textAlign: 'left', // Adjust text alignment as needed
    },
    contactDetails: {
        fontSize: 10,
        fontWeight: 'normal',
        marginTop: 5,
    },
    section: {
        marginBottom: 10,
    },
    sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 3,
    },
    education: {
        fontSize: 10,
        marginBottom: 3,
    },
    technicalSkills: {
        fontSize: 10,
        marginBottom: 3,
    },
})
