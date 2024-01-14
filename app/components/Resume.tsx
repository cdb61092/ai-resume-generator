import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer'
import { prisma } from '~/utils/prisma.server'

const bullets = [
    'Spearheaded the creation of custom WordPress themes and plugins, tailored specifically for diverse industries—self-storage, pest control, multifamily, and banking—ensuring high client satisfaction and user experience.',
    'Engineered and integrated advanced features in WordPress sites by incorporating third-party services and APIs, resulting in enhanced functionality and meeting detailed client requirements.',
    'Led the development of specialized dashboards using React, which interfaced with Laravel APIs, enabling clients to effectively manage their properties and facilities with ease.',
    'Designed and implemented an innovative updater API for WordPress themes and plugins, automating updates across numerous sites, which significantly increased efficiency and reduced maintenance workload.',
    'Authored a Python script for automated image optimization, achieving target size requirements, thus saving considerable developer time and contributing to increased company profits.',
    'Initiated and successfully drove a quality assurance campaign by incorporating a comprehensive testing framework for APIs, boosting test coverage from 0% to 73% within a few months.',
    'Extended API capabilities to integrate additional property and facility management systems, unlocking new customer segments and supporting business growth.',
    'Contributed to the professional development of the team by conducting technical interviews, mentoring new developers, and maintaining high code standards through rigorous pull request reviews.',
    'Maintained a commitment to continuous learning and staying abreast of industry best practices, which, combined with solid technical expertise in WordPress, front-end technologies, and PHP, significantly improves project outcomes.',
]

// Create styles
const styles = StyleSheet.create({
    page: {
        padding: 60,
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
    flexRow: {
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
        marginBottom: 5,
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

// Register custom font with bold variant
// Font.register({
//     family: 'Montserrat',
//     fonts: [
//         { src: 'app/fonts/Montserrat-Regular.ttf' }, // Replace with the correct path to the font file
//         { src: 'app/fonts/Montserrat-Bold.ttf', fontWeight: 'bold' }, // Replace with the correct path to the bold font file
//     ],
// })

function Section({ title, children }) {
    return (
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>{title}</Text>
            <View style={styles.horizontalRule} />
            {children}
        </View>
    )
}

export function PDFDocument({ user }) {
    const {
        firstName,
        lastName,
        email,
        profession,
        location,
        phoneNumber,
        linkedIn,
        github,
        languages,
        frameworks,
        tools,
        libraries,
        userJob,
    } = user

    const { company, title, location: jobLocation, startDate, endDate } = userJob[0]

    console.log(company)
    console.log(title)

    console.log(user)

    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.header}>
                    <Text>
                        {firstName} {lastName}
                    </Text>
                    <Text>{profession}</Text>
                    <Text style={styles.contactDetails}>
                        {location} • {email} • {phoneNumber}
                    </Text>
                </View>
                <Section title="PROFESSIONAL EXPERIENCE">
                    <View style={styles.subheader}>
                        <View style={styles.flexRow}>
                            <Text>{company}</Text>
                            <Text>{location}</Text>
                        </View>
                        <View style={styles.flexRow}>
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
                </Section>

                <Section title="EDUCATION">
                    <View style={styles.education}>
                        <View style={styles.flexRow}>
                            <Text>Parkville University</Text>
                            <Text>Parkville, MO</Text>
                        </View>
                        <View style={styles.flexRow}>
                            <Text>Bachelor of Science in Computer Science</Text>
                            <Text>Aug 2017 - May 2017</Text>
                        </View>
                    </View>
                </Section>

                <Section title="TECHNICAL SKILLS">
                    <View style={styles.technicalSkills}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                            // style={{
                            //     fontWeight: 'bold',
                            //     fontFamily: 'Montserrat',
                            //     marginRight: 5,
                            // }}
                            >
                                Languages:
                            </Text>
                            <Text>JavaScript, PHP, SQL, HTML/CSS</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                            // style={{
                            //     fontWeight: 'bold',
                            //     fontFamily: 'Montserrat',
                            //     marginRight: 5,
                            // }}
                            >
                                Frameworks:
                            </Text>
                            <Text>React, Node.js, Remix, Laravel, PHPUnit, WordPress</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                            // style={{
                            //     fontWeight: 'bold',
                            //     fontFamily: 'Montserrat',
                            //     marginRight: 5,
                            // }}
                            >
                                Libraries:
                            </Text>
                            <Text>Prisma, MongoDB, ChakraUI, NextUI, tRPC</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text
                            // style={{
                            //     fontWeight: 'bold',
                            //     fontFamily: 'Montserrat',
                            //     marginRight: 5,
                            // }}
                            >
                                Developer Tools:
                            </Text>
                            <Text>Git, S3, Cloudflare R2, PHPStorm</Text>
                        </View>
                    </View>
                </Section>
            </Page>
        </Document>
    )
}
