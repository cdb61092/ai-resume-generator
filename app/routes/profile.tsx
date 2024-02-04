import React from 'react'
import { Card, CardHeader, CardBody, Divider, Button, Tabs, Tab } from '@nextui-org/react'
import { FaUserAstronaut } from 'react-icons/fa/index.js'
import { Link as RemixLink, Outlet, useLoaderData, useLocation } from '@remix-run/react'
import { IconContext } from 'react-icons'
import { ActionFunctionArgs } from '@remix-run/node'
import { prisma } from '~/utils/prisma.server'
import { authenticator } from '~/utils/auth.server'
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure } from '@nextui-org/react'
import { CreateJobForm } from '~/components/forms/CreateJobForm'
import { UpdateProfileForm } from '~/components/forms/UpdateProfileForm'
import invariant from 'tiny-invariant'

export async function loader({ request }: ActionFunctionArgs) {
    let authUser = await authenticator.isAuthenticated(request)

    invariant(authUser, 'User is not authenticated')

    let user = await prisma.user.findUnique({
        where: {
            id: authUser.id,
        },
        include: {
            jobExperience: true,
        },
    })

    return { user }
}

export default function Profile() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { user } = useLoaderData<typeof loader>()
    const navigation = useLocation()

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
                            <Tab key="/profile" title={<RemixLink to=".">Profile</RemixLink>}>
                                <UpdateProfileForm user={user} />
                            </Tab>
                            <Tab
                                key="/profile/education"
                                title={<RemixLink to="education">Education</RemixLink>}>
                                <Outlet />
                            </Tab>
                            <Tab
                                key="/profile/jobs"
                                title={<RemixLink to="jobs">Experience</RemixLink>}>
                                <Outlet />
                            </Tab>
                            <Tab
                                key="/profile/projects"
                                title={<RemixLink to="projects">Projects</RemixLink>}>
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
