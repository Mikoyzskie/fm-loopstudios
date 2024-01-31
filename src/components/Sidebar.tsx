"use client"

import clsx from "clsx"
import { useCContext } from "@/lib/Provider"
import Image from "next/image"
import { jose } from "@/app/font"

export default function Sidebar() {

    const { sidemenu, setSidemenu } = useCContext()

    return (
        <div className={clsx("fixed bg-black md:hidden h-screen inset-x-0 z-30 transition-all duration-200 px-[48px] pt-[78px]",
            sidemenu ? "top-0" : "-top-[1000px]"
        )}>
            <div className=" flex justify-between items-center mb-[200px]">
                <Image
                    src={"/logo.svg"}
                    width={192}
                    height={32}
                    alt='logo'
                />
                <svg className="hover:cursor-pointer" onClick={() => setSidemenu(false)} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fillRule="evenodd" /></svg>
            </div>
            <ul className={`${jose.className} text-white flex flex-col gap-10`}>
                <li className="uppercase text-4xl header_link w-fit">about</li>
                <li className="uppercase text-4xl header_link w-fit">careers</li>
                <li className="uppercase text-4xl header_link w-fit">events</li>
                <li className="uppercase text-4xl header_link w-fit">products</li>
                <li className="uppercase text-4xl header_link w-fit">support</li>
            </ul>
        </div>
    )
}
