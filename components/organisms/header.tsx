import Image from "next/image";
import Hamburger from "@/public/assets/shared/icon-hamburger.svg";
import Cart from "@/public/assets/shared/icon-cart.svg";
import Logo from "@/public/assets/shared/logo.svg";
import Link from "next/link";

function Header() {
    return (
        <header className="bg-black h-22.5 flex items-center justify-center">
            <nav className="px-6 flex justify-between items-center w-full  h-22.5 border-b border-white/20 md:px-0 md:max-w-172.25 lg:max-w-277.5">
                <Image
                    src={Hamburger}
                    alt="hamburger menu"
                    className="h-3.75 w-4 lg:hidden"
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
                    className="w-5.75 h-5"
                ></Image>
            </nav>
        </header>
    );
}

export default Header;
