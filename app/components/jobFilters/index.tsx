import { Skills } from '~/components/Skills'
import { Accordion, AccordionItem } from '@nextui-org/react'

interface SkillsProps {
    skills: Record<string, string[]>
    skillsFilter: any
    setSkillsFilter: (filter: any) => void
}

export function JobFilters({ skills, skillsFilter, setSkillsFilter }: SkillsProps) {
    return (
        <div className="bg-white text-black rounded-2xl dark:bg-black dark:text-white p-2 min-w-[250px] border-1">
            <Accordion selectionMode="multiple" title="Job Filters">
                <AccordionItem title="Skills">
                    <Skills
                        skills={skills}
                        skillsFilter={skillsFilter}
                        setSkillsFilter={setSkillsFilter}
                    />
                </AccordionItem>
            </Accordion>
        </div>
    )
}
