import Footer from "@/components/common/Footer";
import ReachUs from "@/components/common/ReachUs";
import SmoothScroll from "@/components/common/SmoothScroll";
import TextOne from "@/components/common/TextOne";
import TextTwo from "@/components/common/TextTwo";
import Faq from "@/components/common/faq/Faq";
import DetailGridOne from "@/components/pages/apps/DetailGridOne";
import DetailGridThree from "@/components/pages/apps/DetailGridThree";
import DetailGridTwo from "@/components/pages/apps/DetailGridTwo";
import HappyClients from "@/components/pages/apps/HappyClients";
import Information from "@/components/pages/apps/Information";
import VideoBanner from "@/components/pages/apps/VideoBanner";
import { shopifyAppGridDetails } from "@/utils/constant";

const ShopifyApp = () => {
    return (
        <SmoothScroll>
            <VideoBanner />
            <Information
                gridDetails={shopifyAppGridDetails}
                title="Shopify Mobile App"
                subTitle="Development that Brings Your Store to Your Fingertips"
                description=" Developing a custom Shopify mobile app can be complex,
                        but it can significantly boost your e-commerce business.
                        With the help of a Shopify mobile app development team,
                        you can create a powerful and user-friendly mobile app
                        that will help you to stand out from the competition and
                        increase your bottom line."
            >
                <TextTwo className="font-semibold leading-relaxed">
                    Full potential of Shopify store with a Custom Shopify App
                </TextTwo>
            </Information>
            <DetailGridOne
                imgUrl="/app development/app-banner.png"
                title="What about who use PC occasionally"
                description="According to data from Statista, the number of mobile
                        users worldwide is expected to reach over 4.9 billion in
                        2021, compared to around 2.5 billion desktop users. Many
                        customers don't have enough time or scope to browse
                        your shop from the desktop. So in this case, if you have
                        the mobile app, you don't have to worry about your"
            />

            <DetailGridTwo
                title="Have more than 5+ Pre-Ready Templates and On Demand
                        Service"
            >
                <TextOne className="leading-relaxed">
                    Templates offer a wide range of design options to choose
                    from, including modern, minimalistic, and professional
                    styles. Each template is fully customizable, so you can
                    easily use your own branding, images & Shopify Backend.
                </TextOne>
                <TextOne className="leading-relaxed">
                    In addition to our pre-ready templates, we also offer an
                    on-demand service for those who need a more customized
                    solution. You will feel like Shopify Agency touch on your
                    app.
                </TextOne>
            </DetailGridTwo>
            <ReachUs />
            <DetailGridThree miniTitle="Transparent" title="Develop ~ Deploy">
                <TextOne>
                    Codecony helps with the technical aspects of deployment and
                    also offers ongoing support and maintenance services to
                    ensure that your app stays up-to-date and performs well for
                    your users
                </TextOne>
            </DetailGridThree>
            <Faq titleOne="We are ready to" titleTwo="ANSWER">
                Here you go for some Frequently Asked Questions from most of the
                clients. We think so you may have some questions like this.
            </Faq>
            <HappyClients />
            <Footer />
        </SmoothScroll>
    );
};

export default ShopifyApp;
