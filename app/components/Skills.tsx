import { Button } from '@nextui-org/react'
import React from 'react'

export const Skills = ({ skills, skillsFilter, setSkillsFilter }) => {
    return (
        <div>
            <h3 className="text-left text-2xl my-3">Skills</h3>
            <div className="flex flex-wrap gap-2 bg-black rounded-2xl">
                {skills.map((skill: string) => {
                    return (
                        <Button
                            key={skill}
                            onClick={() =>
                                setSkillsFilter(
                                    skillsFilter.includes(skill)
                                        ? skillsFilter.filter((s: string) => s !== skill)
                                        : [...skillsFilter, skill]
                                )
                            }
                            color={skillsFilter.includes(skill) ? 'success' : 'default'}>
                            {skill}
                        </Button>
                    )
                })}
            </div>
        </div>
    )
}
