"use client";

import Link from "next/link";
import arrowRight from "@/public/assets/shared/icon-arrow-right.svg";
import Headphones from "@/public/assets/Category/Headphones.png";
import Speakers from "@/public/assets/Category/Speakers.png";
import Earphones from "@/public/assets/Category/Earphones.png";
import Image from "next/image";

const categories = [
    {
        id: 1,
        name: "headphones",
        image: Headphones,
    },
    {
        id: 2,
        name: "speakers",
        image: Speakers,
    },
    {
        id: 3,
        name: "earphones",
        image: Earphones,
    },
];

function Category() {
    return (
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center md:gap-2.5 lg:gap-7.5">
            {categories.map((category) => (
                <Link
                    key={category.id}
                    href={`/${category.name}`}
                    className="w-81.75 h-54.25 flex flex-col relative justify-end md:w-55.75 md:h-54.25 lg:w-87.5 lg:h-71"
                >
                    <div className="flex flex-col ">
                        <Image
                            src={category.image}
                            alt={category.name}
                            className="absolute top-0 left-1/2 -translate-x-1/2 border lg:scale-121 lg:top-7"
                        ></Image>
                        <div className="h-41.25 rounded-lg bg-ash flex flex-col justify-end gap-5 items-center pb-7 lg:h-51 lg:pb-10">
                            <h2 className="uppercase font-bold text-[0.9375rem] tracking-wider lg:text-lg">
                                {category.name}
                            </h2>
                            <button className="flex items-center gap-4 uppercase font-bold text-[0.8125rem] text-black/50">
                                Shop
                                <Image
                                    src={arrowRight}
                                    className="cat__arr"
                                    alt="right arrow"
                                ></Image>
                            </button>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default Category;
