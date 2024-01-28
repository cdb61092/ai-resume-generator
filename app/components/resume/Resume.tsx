import { Document, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { PersonalInformation } from './PersonalInfo'
import { ProfessionalExperience } from './ProfessionalExperience'
import { Education } from '~/components/resume/Education'
import { TechnicalSkills } from '~/components/resume/TechnicalSkills'
import { Projects } from '~/components/resume/Projects'

export function PDFDocument({ user, bullets }) {
    const { jobExperience, education, projects, languages, libraries, frameworks, tools } = user

    return (
        <Document>
            <Page style={styles.page}>
                <PersonalInformation user={user} />
                <ProfessionalExperience jobExperience={jobExperience} bullets={bullets} />
                <Education education={education} />
                <TechnicalSkills
                    languages={languages}
                    frameworks={frameworks}
                    libraries={libraries}
                    tools={tools}
                />
                <Projects projects={projects} />
            </Page>
        </Document>
    )
}
