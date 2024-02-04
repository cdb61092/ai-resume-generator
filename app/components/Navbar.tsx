import { User, Dropdown, DropdownMenu, DropdownItem, DropdownTrigger } from '@nextui-org/react'
import { Link, Form, useNavigate } from '@remix-run/react'
import { Logo } from './Logo'
import { DarkModeToggle } from '~/components/DarkModeToggle'
import React from 'react'

export function Header({ user }) {
    const navigate = useNavigate()

    return (
        <div className="flex justify-between items-center p-5 bg-white dark:bg-gray-800">
            <div className="flex items-center">
                <Logo />
                <p className="ml-3 font-bold">SCRAPY</p>
            </div>

            <div className="flex-grow">
                <div className="flex justify-center space-x-4">
                    <Link to="jobs" prefetch="render" className="hover:text-gray-700">
                        Jobs
                    </Link>
                    <Link to="profile" prefetch="render" className="hover:text-gray-700">
                        Profile
                    </Link>
                </div>
            </div>
            <DarkModeToggle />
            <div>
                {!user && (
                    <Link to="/login" className="hover:text-gray-700">
                        Login
                    </Link>
                )}
                {user && (
                    <Dropdown>
                        <DropdownTrigger className="cursor-pointer">
                            <User
                                name={'Chase Buchholz'}
                                description="Software Engineer"
                                avatarProps={{
                                    src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
                                }}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="profile" onClick={() => navigate('/profile')}>
                                Profile
                            </DropdownItem>
                            <DropdownItem
                                key="logout"
                                onClick={() =>
                                    (
                                        document.getElementById('logout-form') as HTMLFormElement
                                    ).submit()
                                }>
                                <Form
                                    action="/resources/user/logout"
                                    id="logout-form"
                                    method="post">
                                    Sign Out
                                </Form>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                )}
            </div>
        </div>
    )
}
