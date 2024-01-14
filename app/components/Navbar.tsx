import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    User,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    DropdownTrigger,
} from '@nextui-org/react'
import { Link, Form, useNavigate } from '@remix-run/react'
import { Logo } from './Logo'
import React from 'react'

export function Header({ user }) {
    const navigate = useNavigate()

    return (
        <div className="w-[200px] flex flex-col p-5">
            <div className="flex items-center">
                <Logo />
                <p className="ml-3 font-bold">SCRAPY</p>
            </div>
            <div className="flex flex-col pt-[50px]">
                <Link to="jobs" prefetch="render">
                    Jobs
                </Link>
                <Link to="profile" prefetch="render">
                    Profile
                </Link>
            </div>
            <div className="mt-auto">
                {!user && <Link to="/login">Login</Link>}
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
                                <Form action="/logout" id="logout-form" method="post">
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
