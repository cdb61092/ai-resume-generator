import { useForm, useFieldset, useFieldList, conform, list } from '@conform-to/react'
import { parse } from '@conform-to/zod'
import { Form } from '@remix-run/react'
import React, { useRef } from 'react'
import { z } from 'zod'
import { Input } from '@nextui-org/react'

const schoolSchema = z.object({
    id: z.number().optional(),
    school: z.string(),
    degree: z.string().optional(),
    attendedFrom: z.string(),
    attendedTo: z.string(),
})

const educationSchema = z.object({
    schools: z.array(schoolSchema).nonempty(),
})

export async function loader({ request }) {
    console.log('request')
}

export function EducationForm({ education }) {
    console.log(education)
    const [form, { schools }] = useForm({
        onValidate({ formData }) {
            return parse(formData, { schema: educationSchema })
        },
        shouldValidate: 'onBlur',
    })
    const schoolList = useFieldList(form.ref, schools)

    return (
        <Form method="post" {...form.props} action="/resources.education.update">
            {schoolList.map((school) => (
                <p key={school.key}>
                    <SchoolFieldSet {...school} />
                </p>
            ))}
            <button {...list.insert(schools.name)}>Add task</button>
            <hr />
            <button>Save</button>
        </Form>
    )
}

function SchoolFieldSet({ ...config }) {
    const ref = useRef<HTMLFieldSetElement>(null)
    const { school, degree, attendedFrom, attendedTo } = useFieldset(ref, config)

    return (
        <fieldset ref={ref}>
            <Input
                type="text"
                {...conform.input(school)}
                className="border-none p-2"
                placeholder="School"
            />
            <Input
                type="text"
                {...conform.input(degree)}
                className="border-none p-2"
                placeholder="Degree"
            />
            <Input
                type="text"
                {...conform.input(attendedFrom)}
                className="border-none p-2"
                placeholder="Start Date"
            />
            <Input
                type="text"
                {...conform.input(attendedTo)}
                className="border-none p-2"
                placeholder="End Date"
            />
        </fieldset>
    )
}
