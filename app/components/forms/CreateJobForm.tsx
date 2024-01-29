import { UserJobSchema } from '~/components/forms/schemas'
import { parse } from '@conform-to/zod'
import { useForm, conform } from '@conform-to/react'
import { Button, Input, Textarea } from '@nextui-org/react'
import React from 'react'
import { Form } from '@remix-run/react'

export function CreateJobForm() {
    const [form, { company, title, location, startDate, endDate, responsibilities }] = useForm({
        onValidate({ formData }) {
            return parse(formData, { schema: UserJobSchema })
        },
        shouldValidate: 'onBlur',
    })

    return (
        <Form
            navigate={false}
            {...form.props}
            method="post"
            action="/resources/job/create"
            className="flex flex-col gap-4">
            <Input
                type="text"
                label="Company"
                {...conform.input(company)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Input
                type="text"
                label="Title"
                {...conform.input(title)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Input
                type="text"
                label="Location"
                {...conform.input(location)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Input
                type="text"
                label="Start Date"
                {...conform.input(startDate)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Input
                type="text"
                label="End Date"
                {...conform.input(endDate)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
            />
            <Textarea
                label="Responsibilities"
                {...conform.input(responsibilities)}
                className="border-none bg-[#f5f5f5] rounded-xl p-2"
                minRows={5}
            />
            <Button type="submit" color="success" fullWidth>
                Save
            </Button>
        </Form>
    )
}
