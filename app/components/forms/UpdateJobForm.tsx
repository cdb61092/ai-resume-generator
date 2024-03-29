import { useForm, conform } from '@conform-to/react'
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'

export function UpdateJobForm({ job }) {
    const [
        form,
        { company, title, location, startDate, endDate, achievements, responsibilities, id },
    ] = useForm()

    return (
        <form
            {...form.props}
            method="post"
            action="/resources/job/update"
            className="flex flex-col gap-4">
            <input type="hidden" {...conform.input(id)} value={job.id} />
            <Input
                type="text"
                label="Company"
                {...conform.input(company)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                defaultValue={job.company}
            />
            <Input
                type="text"
                label="Title"
                {...conform.input(title)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                defaultValue={job.title}
            />
            <Input
                type="text"
                label="Location"
                {...conform.input(location)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                defaultValue={job.location}
            />
            <Input
                type="text"
                label="Start Date"
                {...conform.input(startDate)}
                defaultValue={job.startDate}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Input
                type="text"
                label="End Date"
                {...conform.input(endDate)}
                defaultValue={job.endDate}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Textarea
                label="Responsibilities"
                {...conform.input(responsibilities)}
                defaultValue={job.responsibilities}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                minRows={5}
            />
            <Textarea
                label="Achievements"
                {...conform.input(achievements)}
                defaultValue={job.achievements}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Button type="submit" color="success" name="intent" value="update" fullWidth>
                Save
            </Button>
            <Button type="submit" color="danger" name="intent" value="delete" fullWidth>
                Delete
            </Button>
        </form>
    )
}
