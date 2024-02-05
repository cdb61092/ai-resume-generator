import { useLoaderData } from '@remix-run/react'
import { Skills } from '~/components/Skills'
import { ActionFunctionArgs, json } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { Table, TableBody, TableColumn, TableRow, TableCell, TableHeader } from '@nextui-org/react'
import React from 'react'
import { TableCellContent } from '~/components/TableCellContent'
import { createDocxResume } from '~/utils/resume/resume.docx.server'
import { categorizeSkills } from '~/utils/categorizeSkills.server'
import { JobFilters } from '~/components/jobFilters'

export async function action({ request }: ActionFunctionArgs) {
    return await createDocxResume(request)
}

export async function loader() {
    const jobs = await prisma.job.findMany()
    const skills = Array.from(new Set(jobs.flatMap((job) => job.keywords))).sort()

    const categorizedSkills = categorizeSkills(skills)

    return json({ jobs, skills: categorizedSkills })
}

export default function Jobs() {
    const { jobs, skills } = useLoaderData<typeof loader>()
    const [skillsFilter, setSkillsFilter] = React.useState(['all'])

    const filteredItems = React.useMemo(() => {
        let filteredJobs = [...jobs]

        if (skillsFilter.length === 1 && skillsFilter.includes('all')) {
            return filteredJobs
        } else {
            filteredJobs = filteredJobs.filter((job) => {
                return job.keywords.some((keyword) => {
                    return skillsFilter.includes(keyword)
                })
            })
        }

        return filteredJobs
    }, [jobs, skillsFilter])

    return (
        <div className="mx-auto flex gap-3 pt-3 ">
            <JobFilters
                skills={skills}
                skillsFilter={skillsFilter}
                setSkillsFilter={setSkillsFilter}
            />
            <Table topContent={`${filteredItems.length} jobs`}>
                <TableHeader>
                    <TableColumn key="title" className="w-[100px]">
                        Title
                    </TableColumn>
                    <TableColumn key="salary">Salary</TableColumn>
                    <TableColumn key="keywords">Skills</TableColumn>
                    <TableColumn key="company">Company</TableColumn>
                    <TableColumn key="location">Location</TableColumn>
                    <TableColumn key="source">Source</TableColumn>
                </TableHeader>
                <TableBody items={filteredItems}>
                    {(item) => {
                        return (
                            <TableRow>
                                {(columnKey) => (
                                    <TableCell>
                                        <TableCellContent job={item} columnKey={columnKey} />
                                    </TableCell>
                                )}
                            </TableRow>
                        )
                    }}
                </TableBody>
            </Table>
        </div>
    )
}
