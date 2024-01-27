import { Document, Page, Text, View } from '@react-pdf/renderer'
import { styles } from './styles'
import { PersonalInformation } from './PersonalInfo'
import { ProfessionalExperience } from './ProfessionalExperience'
import { Education } from '~/components/resume/Education'
import { TechnicalSkills } from '~/components/resume/TechnicalSkills'
import { Projects } from '~/components/resume/Projects'

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

export function PDFDocument({ user }) {
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
