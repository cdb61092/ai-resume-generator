import { Link } from '@remix-run/react'
import React from 'react'

export function NavLinks({ links }) {
    return (
        <div className="flex-grow">
            <div className="flex justify-center space-x-4">
                {links.map((link) => (
                    <Link to={link.toLowerCase()} className="hover:text-gray-700" key={link}>
                        {link}
                    </Link>
                ))}
            </div>
        </div>
    )
}
