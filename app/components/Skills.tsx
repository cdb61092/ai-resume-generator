import { Accordion, AccordionItem, Button, Checkbox } from '@nextui-org/react'
import React from 'react'

interface SkillsProps {
    skills: Record<string, string[]>
    skillsFilter: any
    setSkillsFilter: (filter: any) => void
}

export const Skills = ({ skills, skillsFilter, setSkillsFilter }: SkillsProps) => {
    return (
        <Accordion selectionMode="multiple" title="Skills">
            {Object.entries(skills).map(([category, skillsInCategory]) => (
                <AccordionItem title={category} className="overflow-x-hidden">
                    <div key={category} className="flex-col flex">
                        {skillsInCategory.map((skill) => (
                            <Checkbox
                                className="dark:text-white light:text-black"
                                value={skill}
                                isSelected={skillsFilter.includes(skill)}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setSkillsFilter((prev: any) => [...prev, skill])
                                    } else {
                                        setSkillsFilter((prev: any) =>
                                            prev.filter((s: any) => s !== skill)
                                        )
                                    }
                                }}>
                                {skill}
                            </Checkbox>
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    )
}
