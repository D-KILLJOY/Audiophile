import { Button } from "../atoms/button";

function Hero() {
    return (
        <section className="h-127.5 md:h-159.75 lg:h-158 w-full md:max-w-172.25 md:mx-auto lg:max-w-277.5 flex ">
            <section className="h-full w-full flex justify-center items-center text-center lg:justify-start lg:text-left">
                <article className="text-white flex flex-col gap-5.75 items-center w-full md:max-w-94.75 lg:items-start">
                    <h2 className="opacity-50 uppercase font-normal tracking-[10px] text-sm text-center ">
                        new product
                    </h2>
                    <h1 className="font-bold text-4xl tracking-[1.29px] leading-10 uppercase  md:text-[3.5rem] md:leading-14.5">
                        xx99 mark ii headephones
                    </h1>
                    <p className="font-medium opacity-75 text-[15px] leading-6.25 px-5 md:px-2">
                        Experience natural, lifelike audio and exceptional build
                        quality made for the passionate music enthusiast.
                    </p>
                    <Button variant="primary">see product</Button>
                </article>
            </section>
        </section>
    );
}

export default Hero;
