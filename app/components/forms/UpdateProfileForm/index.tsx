import { useForm, conform } from '@conform-to/react'
import { Button, Input } from '@nextui-org/react'
import React from 'react'
import { ChipSelect } from '~/components/forms/UpdateProfileForm/ChipSelect'

export function UpdateProfileForm({ user }) {
    const [form, { firstName, lastName, github, location, phoneNumber, linkedIn, profession }] =
        useForm()

    return (
        <form {...form.props} method="post" action="/resources.profile.update.tsx">
            <div className="flex flex-col gap-y-3">
                <div className="flex gap-5">
                    <Input
                        type="text"
                        label="First Name"
                        defaultValue={user.firstName}
                        {...conform.input(firstName)}
                        className="border-none rounded-xl"
                    />
                    <Input
                        type="text"
                        label="Last Name"
                        defaultValue={user.lastName}
                        {...conform.input(lastName)}
                        className="border-none rounded-xl"
                    />
                </div>
                <Input
                    type="text"
                    label="Profession"
                    defaultValue={user.profession}
                    {...conform.input(profession)}
                    className="border-none rounded-xl"
                />
                <Input
                    type="text"
                    label="Location"
                    defaultValue={user.location}
                    {...conform.input(location)}
                />
                <Input
                    type="text"
                    label="Phone Number"
                    defaultValue={user.phoneNumber}
                    {...conform.input(phoneNumber)}
                />
                <Input
                    type="text"
                    label="LinkedIn"
                    defaultValue={user.linkedIn}
                    {...conform.input(linkedIn)}
                />
                <Input
                    type="text"
                    label="GitHub"
                    defaultValue={user.github}
                    {...conform.input(github)}
                />
                <ChipSelect currentItems={user.languages} collectionName="languages" />
                <ChipSelect currentItems={user.frameworks} collectionName="frameworks" />
                <ChipSelect currentItems={user.libraries} collectionName="libraries" />
                <ChipSelect currentItems={user.tools} collectionName="tools" />
            </div>
            <Button type="submit" color="success" className="mt-3" fullWidth>
                Save
            </Button>
        </form>
    )
}
