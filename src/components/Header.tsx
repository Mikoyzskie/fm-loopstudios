"use client"

import React from 'react'
import Image from "next/image"
import { alata } from "@/app/font"
import { useCContext } from "@/lib//Provider"


export default function Header() {

    const { setSidemenu } = useCContext()

    return (

        <header className='max-w-[1110px] m-auto pt-[57px] flex justify-between z-30 items-center'>
            <Image
                src={"/logo.svg"}
                width={192}
                height={32}
                alt='logo'
            />
            <svg onClick={() => { setSidemenu(true) }} className='md:hidden block hover:cursor-pointer' width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z" /></g></svg>
            <ul className={`${alata.className} text-white hidden gap-[33px] md:flex`}>
                <li className='header_link hover:cursor-pointer'>About</li>
                <li className='header_link hover:cursor-pointer'>Careers</li>
                <li className='header_link hover:cursor-pointer'>Events</li>
                <li className='header_link hover:cursor-pointer'>Products</li>
                <li className='header_link hover:cursor-pointer'>Support</li>
            </ul>
        </header>

    )
}
