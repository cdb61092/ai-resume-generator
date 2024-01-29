import React from 'react'
import { Card, CardHeader, CardBody, Divider, Button, Tabs, Tab } from '@nextui-org/react'
import { FaUserAstronaut } from 'react-icons/fa/index.js'
import { Link, Outlet, useLoaderData, useLocation } from '@remix-run/react'
import { IconContext } from 'react-icons'
import { ActionFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { authenticator } from '~/utils/auth.server'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    useDisclosure,
} from '@nextui-org/react'
import { CreateJobForm } from '~/components/forms/CreateJobForm'
import { UpdateProfileForm } from '~/components/forms/UpdateProfileForm'
import invariant from 'tiny-invariant'

export async function loader({ request }: ActionFunctionArgs) {
    let authUser = await authenticator.isAuthenticated(request)

    console.log(authUser)

    if (!authUser) {
        throw new Error('User is not authenticated')
    }

    let user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            jobExperience: true,
        },
    })

    invariant(user, 'User is not authenticated')

    return { user }
}

export default function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useLoaderData<typeof loader>()
    const navigation = useLocation()

    console.log('pathname: ' + navigation.pathname)

    return (
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' }, size: '40px' }}>
            <div>
                <Modal
                    size="2xl"
                    isOpen={isOpen}
                    onClose={onClose}
                    placement="top-center"
                    backdrop="blur">
                    <ModalContent>
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Add Job Experience
                            </ModalHeader>
                            <ModalBody>
                                <CreateJobForm />
                            </ModalBody>
                        </>
                    </ModalContent>
                </Modal>
                <Card className="max-w-[800px] mx-auto mt-[100px]">
                    <CardHeader className="flex justify-between gap-3">
                        <div className="flex gap-3 items-center">
                            <FaUserAstronaut />
                            <h1>Profile</h1>
                        </div>
                        <Button className="w-[125px]" onPress={onOpen}>
                            Add Job
                        </Button>
                    </CardHeader>
                    <Divider className="bg-gray-400" />
                    <CardBody>
                        <Tabs fullWidth selectedKey={navigation.pathname}>
                            <Tab key="/profile" title="Profile" as={Link} to=".">
                                <UpdateProfileForm user={user} />
                            </Tab>
                            <Tab
                                key="/profile/education"
                                title="Education"
                                as={Link}
                                to="education">
                                <Outlet />
                            </Tab>
                            <Tab key="/profile/jobs" as={Link} to="jobs" title="Experience">
                                <Outlet />
                            </Tab>
                            <Tab key="/profile/projects" as={Link} to="projects" title="Projects">
                                <Outlet />
                            </Tab>
                        </Tabs>
                    </CardBody>
                    <Divider />
                </Card>
            </div>
        </IconContext.Provider>
    )
}
