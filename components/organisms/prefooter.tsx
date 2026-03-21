import Image from "next/image";

import mobileImg from "@/public/assets/shared/mobile/image-best-gear.jpg";
import tabImg from "@/public/assets/shared/tablet/image-best-gear.jpg";
import deskImg from "@/public/assets/shared/desktop/image-best-gear.jpg";

function Prefooter() {
    return (
        <section className="flex justify-center mb-32 md:gap-15.75 md:mb-30 lg:mb-33.75">
            <section className="grid gap-9 max-w-81.75 md:max-w-172.25 md:15.75 lg:max-w-277.5 lg:grid-cols-2 lg:gap-31.25 lg:items-center">
                <div className="rounded-lg overflow-hidden lg:order-2">
                    <Image
                        src={mobileImg}
                        alt="Black and white image of a young man using a headphone"
                        className="md:hidden"
                    ></Image>
                    <Image
                        src={tabImg}
                        alt="Black and white image of a young man using a headphone"
                        className="hidden md:block lg:hidden"
                    ></Image>
                    <Image
                        src={deskImg}
                        alt="Black and white image of a young man using a headphone"
                        className="hidden md:hidden lg:block"
                    ></Image>
                </div>
                <article className="text-center flex flex-col gap-9 md:gap-8 lg:order-0  md:max-w-143.25 md:mx-auto lg:max-w-111.25 lg:text-left">
                    <h2 className="uppercase font-bold text-[1.75rem] tracking-[1px] md:text-[2.5rem] md:tracking-[1.43px] md:leading-11">
                        Bringing you the{" "}
                        <span className="text-orange">best</span> audio gear
                    </h2>
                    <p className="font-medium leading-6.25 opacity-50 text-[0.9375rem] ">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </article>{" "}
            </section>
        </section>
    );
}

export default Prefooter;
