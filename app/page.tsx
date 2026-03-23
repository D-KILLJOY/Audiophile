import Category from "@/components/organisms/category";
import Footer from "@/components/organisms/footer";
import Header from "@/components/organisms/header";
import Hero from "@/components/organisms/hero";
import Homefeats from "@/components/organisms/homefeats";
import Prefooter from "@/components/organisms/prefooter";

export default function Home() {
    return (
        <>
            <Header />
            <section className="flex justify-center mt-10 mb-32 md:mt-24 md:gap-15.75 md:mb-30 lg:mt-30 lg:mb-40.25">
                <Category />
            </section>
            <Homefeats />
            <Prefooter />
            <Footer />
        </>
    );
}
