import Capabilities from "@/components/common/Capabilities";
import Footer from "@/components/common/Footer";
import ReachUs from "@/components/common/ReachUs";
import SmoothScroll from "@/components/common/SmoothScroll";
import TextTwo from "@/components/common/TextTwo";
import Faq from "@/components/common/faq/Faq";
import BePartner from "@/components/pages/web/frontend/BePartner";
import FrontendBanner from "@/components/pages/web/frontend/FrontendBanner";
import FrontendDetails from "@/components/pages/web/frontend/FrontendDetails";
import UiUxDetails from "@/components/pages/web/frontend/UiUxDetails";
const FrontendService = () => {
    return (
        <SmoothScroll>
            <FrontendBanner />
            <UiUxDetails />
            <FrontendDetails />
            <ReachUs />
            <section className="section-padding">
                <div className="fluid-container horizontal-section-padding space-y-20">
                    <div className="max-w-[550px] space-y-6">
                        <p className="mini-title">CAPABILITIES</p>
                        <TextTwo className="font-semibold leading-relaxed">
                            The most widely sought for agency in branding
                            nowadays
                        </TextTwo>
                    </div>
                    <Capabilities />
                </div>
            </section>
            <Faq titleOne="We Know, You'r Really" titleTwo="CURIOUS">
                Here you go for some Frequently Asked Questions from most of the
                clients. We think so you may have some questions like this.
            </Faq>
            <BePartner />

            <Footer />
        </SmoothScroll>
    );
};

export default FrontendService;
