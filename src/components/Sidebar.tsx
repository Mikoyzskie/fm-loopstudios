"use client"

import clsx from "clsx"
import { useCContext } from "@/lib/Provider"
import Image from "next/image"
import { jose } from "@/app/font"

export default function Sidebar() {

    const { sidemenu, setSidemenu } = useCContext()

    return (
        <div className={clsx("absolute bg-black inset-0 z-30 transition-all duration-200 px-[48px] pt-[78px] h-full",
            sidemenu ? "block" : "hidden"
        )}>
            <div className=" flex justify-between items-center">
                <Image
                    src={"/logo.svg"}
                    width={192}
                    height={32}
                    alt='logo'
                />
                <svg className="hover:cursor-pointer" onClick={() => setSidemenu(false)} width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fillRule="evenodd" /></svg>
            </div>
            <ul className={`${jose.className} text-white`}>
                <li className="uppercase">about</li>
                <li className="uppercase">careers</li>
                <li className="uppercase">events</li>
                <li className="uppercase">products</li>
                <li className="uppercase">support</li>
            </ul>
        </div>
    )
}
