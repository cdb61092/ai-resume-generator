import React from 'react'
import { Logo } from './Logo'
import { DarkModeToggle } from './DarkModeToggle'
import { NavLinks } from './NavLinks'
import { UserInfo } from './UserInfo'

const links = ['Jobs', 'Profile', 'Applications']

export function Header({ user }) {
    return (
        <div className="bg-white dark:bg-gray-800 flex justify-center">
            <div className="w-[1200px] flex justify-between items-center py-5">
                <Logo />
                <NavLinks links={links} />
                <DarkModeToggle />
                <UserInfo user={user} />
            </div>
        </div>
    )
}
