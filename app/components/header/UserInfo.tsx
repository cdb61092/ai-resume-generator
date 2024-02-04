import { Form, Link, useNavigate } from '@remix-run/react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react'
import React from 'react'

export function UserInfo({ user }) {
    const navigate = useNavigate()
    return (
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
                                src: user.avatar ?? 'https://i.pravatar.cc',
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
                                (document.getElementById('logout-form') as HTMLFormElement).submit()
                            }>
                            <Form action="/resources/user/logout" id="logout-form" method="post">
                                Sign Out
                            </Form>
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            )}
        </div>
    )
}
