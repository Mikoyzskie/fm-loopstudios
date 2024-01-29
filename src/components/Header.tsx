import React from 'react'
import Image from "next/image"
import { alata } from "@/app/font"

export default function Header() {
    return (
        <div className='max-w-[1110px] m-auto pt-[57px] flex justify-between'>
            <Image
                src={"/logo.svg"}
                width={192}
                height={32}
                alt='logo'
            />
            <ul className={`${alata.className} text-white flex gap-[33px]`}>
                <li>About</li>
                <li>Careers</li>
                <li>Events</li>
                <li>Products</li>
                <li>Support</li>
            </ul>
        </div>
    )
}
