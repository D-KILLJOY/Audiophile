import Image from "next/image";

import mobileZx9 from "@/public/assets/home/mobile/image-speaker-zx9.png";
import mobileZx7 from "@/public/assets/home/mobile/image-speaker-zx7.jpg";
import mobileYx1 from "@/public/assets/home/mobile/image-earphones-yx1.jpg";
import tabZx9 from "@/public/assets/home/tablet/image-speaker-zx9.png";
import tabZx7 from "@/public/assets/home/tablet/image-speaker-zx7.png";
import tabYx1 from "@/public/assets/home/tablet/image-earphones-yx1.jpg";
import deskZx9 from "@/public/assets/home/desktop/image-speaker-zx9.png";
import deskZx7 from "@/public/assets/home/desktop/image-speaker-zx7.png";
import deskYx1 from "@/public/assets/home/desktop/image-earphones-yx1.jpg";
import { Button } from "../atoms/button";

function Homefeats() {
    return (
        <section className="flex justify-center mb-32 md:gap-15.75 md:mb-26 lg:mb-33.75">
            <section className="flex flex-col gap-6 w-full max-w-81.75 md:gap-8 md:max-w-172.25 lg:max-w-277.5 lg:gap-12">
                <section className="bg-orange rounded-lg h-150 flex flex-col items-center justify-center gap-7.5 bg-[url('@/public/assets/home/mobile/pattern-circles.svg')] bg-no-repeat md:bg-[url('@/public/assets/home/tablet/pattern-circles.svg')] md:h-180 md:gap-12 lg:bg-[url('@/public/assets/home/desktop/pattern-circles.svg')] lg:grid lg:grid-cols-2 lg:bg-top-left lg:h-140 lg:flex-row lg:overflow-hidden">
                    <div className="w-43 h-51.75 md:w-49.3 md:h-59.25 lg:h-full lg:w-full flex items-end justify-end">
                        <Image
                            src={mobileZx9}
                            alt="ZX9 speaker"
                            className="md:hidden"
                        ></Image>
                        <Image
                            src={tabZx9}
                            alt="ZX9 speaker"
                            className="hidden md:block lg:hidden"
                        ></Image>
                        <Image
                            src={deskZx9}
                            alt="ZX9 speaker"
                            className="hidden lg:w-102.5 lg:px-6.5 relative -bottom-4 lg:block"
                        ></Image>
                    </div>
                    <article className="flex flex-col items-center w-70 mx-auto gap-7.5 text-center text-white md:w-87.25 md:gap-8 lg:items-start lg:text-left">
                        <h2 className="uppercase font-bold text-4xl leading-10 tracking-[1.29px] px-4 md:text-[3.5rem] md:tracking-[2px] md:leading-14.5 lg:px-0">
                            ZX9 SPEAKER
                        </h2>
                        <p className="opacity-75 leading-6.25 text-[0.9375rem] font-medium">
                            Upgrade to premium speakers that are phenomenally
                            built to deliver truly remarkable sound.
                        </p>
                        <Button variant="black">see product</Button>
                    </article>
                </section>
                <section className="h-80 bg-[url('@/public/assets/home/mobile/image-speaker-zx7.jpg')] bg-no-repeat bg-cover rounded-lg flex items-center ps-6 md:bg-[url('@/public/assets/home/tablet/image-speaker-zx7.jpg')] md:ps-15 lg:bg-[url('@/public/assets/home/desktop/image-speaker-zx7.jpg')] lg:ps-23.75">
                    <article className="flex flex-col gap-8">
                        <h2 className="uppercase font-bold text-[1.75rem] tracking-[2px]">
                            zx7 speaker
                        </h2>
                        <Button variant="outline">see product</Button>
                    </article>
                </section>
                <section className="flex flex-col gap-6 md:flex-row md:h-80 md:gap-0 md:justify-between">
                    <div className="h-50 w-full max-w-81.75 rounded-lg overflow-hidden md:h-full md:max-w-84.75 lg:max-w-135">
                        <Image
                            src={mobileYx1}
                            alt="Yx1 earphone"
                            height={200}
                            className="md:hidden"
                        ></Image>
                        <Image
                            src={tabYx1}
                            alt="Yx1 earphone"
                            className="hidden md:block w-full h-full lg:hidden"
                        ></Image>
                        <Image
                            src={mobileYx1}
                            alt="Yx1 earphone"
                            height={200}
                            className="hidden w-full h-full lg:block"
                        ></Image>
                    </div>
                    <article className="rounded-lg flex flex-col bg-[#f1f1f1] justify-center gap-8 ps-6 h-50 md:h-full md:w-full md:max-w-84.75 lg:max-w-135">
                        <h2 className="uppercase font-bold text-[1.75rem] tracking-[2px]">
                            yx1 earphones
                        </h2>
                        <Button variant="outline">see product</Button>
                    </article>
                </section>
            </section>
        </section>
    );
}

export default Homefeats;
