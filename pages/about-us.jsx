// Import Swiper styles

// import required modules
import BussinessClientSlider from "@/components/common/BussinessClient";
import Capabilities from "@/components/common/Capabilities";
import Footer from "@/components/common/Footer";
import SmoothScroll from "@/components/common/SmoothScroll";
import TextTwo from "@/components/common/TextTwo";
import AboutBanner from "@/components/pages/about/AboutBanner";
import AboutDetail from "@/components/pages/about/AboutDetail";
import GridImageSlider from "@/components/pages/about/GridImageSlider";
import Stacks from "@/components/pages/about/Stacks";
import Team from "@/components/pages/about/Team";
import WhyCodeCony from "@/components/pages/about/WhyCodeCony";

const Aboutus = () => {
    return (
        <>
            <SmoothScroll>
                <AboutBanner />
                <AboutDetail />
                <GridImageSlider />
                <section className="section-margin grid place-items-center text-center gap-y-10">
                    <p className="mini-title">CAPABILITIES</p>
                    <TextTwo className="font-semibold">
                        Choose CODECONY as your own <br /> Development Team
                    </TextTwo>
                    <Capabilities />
                </section>
                <WhyCodeCony />
                <Stacks />
                <BussinessClientSlider />
                <Team />
                <Footer />
            </SmoothScroll>
        </>
    );
};

export default Aboutus;
