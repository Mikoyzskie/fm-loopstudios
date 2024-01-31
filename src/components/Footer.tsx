import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-black pt-[70px] md:pt-[43px] md:pb-[48px] pb-[70px] px-[30px]">
            <div className="max-w-[1110px] w-full m-auto flex md:flex-row flex-col justify-between gap-[60px]">
                <div className="flex flex-col md:items-start items-center justify-between gap-[48px] md:gap-[36px] ">
                    <Image
                        src={"/logo.svg"}
                        height={20}
                        width={144}
                        alt="logo"
                    />
                    <ul className={`flex flex-col md:flex-row text-white gap-[35px]`}>
                        <li className='header_link hover:cursor-pointer md:text-start text-center'>About</li>
                        <li className='header_link hover:cursor-pointer md:text-start text-center'>Careers</li>
                        <li className='header_link hover:cursor-pointer md:text-start text-center'>Events</li>
                        <li className='header_link hover:cursor-pointer md:text-start text-center'>Products</li>
                        <li className='header_link hover:cursor-pointer md:text-start text-center'>Support</li>
                    </ul>
                </div>
                <div className="flex flex-col items-center md:items-end justify-between gap-[27px]">
                    <ul className="flex gap-[13px]">
                        <li className="header_link hover:cursor-pointer">
                            <Image
                                src={"/icon-facebook.svg"}
                                height={24}
                                width={24}
                                alt="facebook"
                            />
                        </li>
                        <li className="header_link hover:cursor-pointer">
                            <Image
                                src={"/icon-twitter.svg"}
                                height={24}
                                width={24}
                                alt="twitter"
                            />
                        </li>
                        <li className="header_link hover:cursor-pointer">
                            <Image
                                src={"/icon-pinterest.svg"}
                                height={24}
                                width={24}
                                alt="pinterest"
                            />
                        </li>
                        <li className="header_link hover:cursor-pointer">
                            <Image
                                src={"/icon-instagram.svg"}
                                height={24}
                                width={24}
                                alt="instagram"
                            />
                        </li>
                    </ul>

                    <p className="text-[#696969]">&copy; 2021 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
