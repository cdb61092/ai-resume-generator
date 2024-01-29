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
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

import React from 'react'

export function Header({ user }) {
    const navigate = useNavigate()
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    const toggleDarkMode = (event) => {
        event.preventDefault();
        event.stopPropagation();

        setDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('theme', newMode ? 'dark' : 'light');
            document.documentElement.classList.toggle('dark', newMode);
            return newMode;
        });
    };

    return (
        <div className="flex justify-between items-center p-5 bg-white dark:bg-gray-800">
            <div className="flex items-center">
                <Logo />
                <p className="ml-3 font-bold">SCRAPY</p>
            </div>

            <div className="flex-grow">
                <div className="flex justify-center space-x-4">
                    <Link to="jobs" prefetch="render" className="hover:text-gray-700">Jobs</Link>
                    <Link to="profile" prefetch="render" className="hover:text-gray-700">Profile</Link>
                </div>
            </div>
            <div className='darkmode-btn pr-3 pt-2'>
                <button
                    id="theme-toggle"
                    className="relative inline-flex items-center justify-center w-14 h-7 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden"
                    onClick={toggleDarkMode}
                >
                    <div
                        className={`absolute left-0.5 top-0.5 w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow transform duration-300 ease-in-out ${darkMode ? 'translate-x-7' : ''
                            }`}
                    ></div>
                    <FontAwesomeIcon
                        icon={faSun}
                        className={`absolute transform -translate-y-1/2 ${darkMode ? 'opacity-50' : 'opacity-100'
                            } text-yellow-500 dark:text-yellow-300`}
                        style={{ top: '50%', left: '7%', fontSize: '1.25rem' }}
                    />
                    <FontAwesomeIcon
                        icon={faMoon}
                        className={`absolute transform -translate-y-1/2 ${!darkMode ? 'opacity-50' : 'opacity-100'
                            } text-gray-500 dark:text-gray-300`}
                        style={{ top: '50%', right: '12%', fontSize: '1.25rem' }}
                    />
                </button>
            </div>
            <div>
                {!user && <Link to="/login" className="hover:text-gray-700">Login</Link>}
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
                                    action="/resources.user.logout"
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
