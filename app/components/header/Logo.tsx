import { Image } from '@nextui-org/react'
import logo from '../../../public/logo.png'
import React from 'react'
export function Logo() {
    return (
        <div className="flex items-center">
            <Image src={logo} width={50} radius="full" />
            <p className="ml-3 font-bold">SCRAPY</p>
        </div>
    )
}
