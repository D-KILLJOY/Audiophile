"use client";

import Image from "next/image";
import Hamburger from "@/public/assets/shared/icon-hamburger.svg";
import Cart from "@/public/assets/shared/icon-cart.svg";
import Logo from "@/public/assets/shared/logo.svg";
import Link from "next/link";
import { useState } from "react";
import Category from "./category";
import Hero from "./hero";

function Header() {
    const [navOpen, setNavOpen] = useState(false);

    function openNav() {
        setNavOpen(navOpen ? false : true);
    }

    return (
        <header className="bg-[url('@/public/assets/home/mobile/image-header.jpg')]  bg-cover bg-center bg-no-repeat md:bg-[url('@/public/assets/home/tablet/image-header.jpg')] lg:bg-[url('@/public/assets/home/desktop/image-hero.jpg')]">
            <nav className=" h-22.5 w-full relative z-50 lg:h-24.25">
                <div className="px-6 flex justify-between items-center h-full w-full border-b border-white/20 md:px-0 md:justify-start md:max-w-172.25 md:mx-auto lg:justify-between lg:max-w-277.5">
                    <Image
                        src={Hamburger}
                        alt="hamburger menu"
                        className="h-3.75 w-4 md:mr-10 lg:hidden"
                        onClick={openNav}
                    ></Image>

                    <Image src={Logo} alt="Audiophile Logo"></Image>
                    <ul className="hidden lg:flex items-center gap-4 uppercase text-white font-bold text-[0.8125rem] tracking-[2px] leading-6.25 md:col-span-2 md:flex-row md:gap-8.5 ">
                        <li>
                            <Link href={"/"} className="hover:text-orange">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-orange">
                                Headphones
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-orange">
                                Speakers
                            </Link>
                        </li>
                        <li>
                            <Link href={"/"} className="hover:text-orange">
                                Earphones
                            </Link>
                        </li>
                    </ul>
                    <Image
                        src={Cart}
                        alt="cart logo"
                        className="w-5.75 h-5 md:ml-auto lg:ml-0"
                    ></Image>
                </div>
                {navOpen && (
                    <>
                        <div className="fixed left-0 h-screen w-full bg-[#979797]/40 z-10 top-22.5"></div>
                        <nav className="bg-white w-full absolute left-0 top-22.5 z-50 py-6 rounded-b-lg  md:py-16 lg:hidden">
                            <Category />
                        </nav>
                    </>
                )}
            </nav>
            <Hero />
        </header>
    );
}

export default Header;
