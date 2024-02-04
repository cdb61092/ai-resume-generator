import type { ActionFunctionArgs } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { authenticator } from '~/utils/auth.server'
import { AuthSchema } from '~/components/forms/schemas'
import { conform, useForm } from '@conform-to/react'
import { Tabs, Tab, Input, Link, Button, Card, CardBody } from '@nextui-org/react'
import { parse } from '@conform-to/zod'
import React from 'react'

export async function action({ request }: ActionFunctionArgs) {
    return await authenticator.authenticate('form', request, {
        failureRedirect: '/login',
        successRedirect: '/',
    })
}

export default function Login() {
    const data = useActionData<typeof action>()
    const [selected, setSelected] = React.useState('Login')

    const [form, { email, password }] = useForm({
        onValidate({ formData }) {
            return parse(formData, { schema: AuthSchema })
        },
    })

    const handleSelectionChange = (key) => {
        setSelected(key.toString())
    }

    return (
        <div className="flex w-full justify-center">
            <Card className="max-w-full w-[340px] mt-[100px]">
                <CardBody className="overflow-hidden">
                    <Tabs
                        fullWidth
                        size="md"
                        aria-label="Tabs form"
                        selectedKey={selected}
                        onSelectionChange={handleSelectionChange}>
                        <Tab key="Login" title="Login">
                            <form {...form.props} method="post" action="/login">
                                <Input
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="mb-3"
                                    {...conform.input(email)}
                                />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    {...conform.input(password)}
                                    className="mb-3"
                                />
                                <p className="text-center text-small">
                                    Need to create an account?{' '}
                                    <Link
                                        size="sm"
                                        onPress={() => setSelected('Register')}
                                        className="cursor-pointer mb-2">
                                        Sign up
                                    </Link>
                                </p>
                                <Button fullWidth color="primary" type="submit">
                                    Login
                                </Button>
                            </form>
                        </Tab>
                        <Tab key="Register" title="Register">
                            <form {...form.props} method="post" action="/resources/user/register">
                                <Input
                                    isRequired
                                    label="Email"
                                    placeholder="Enter your email"
                                    type="email"
                                    className="mb-3"
                                    {...conform.input(email)}
                                />
                                <Input
                                    isRequired
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    className="mb-3"
                                    {...conform.input(password)}
                                />
                                <p className="text-center text-small">
                                    Already have an account?{' '}
                                    <Link
                                        size="sm"
                                        onPress={() => setSelected('Login')}
                                        className="cursor-pointer mb-2">
                                        Login
                                    </Link>
                                </p>
                                <Button fullWidth color="primary" type="submit">
                                    Register
                                </Button>
                            </form>
                        </Tab>
                    </Tabs>
                </CardBody>
            </Card>
        </div>
    )
}
