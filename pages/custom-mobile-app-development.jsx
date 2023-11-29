import Footer from "@/components/common/Footer";
import ReachUs from "@/components/common/ReachUs";
import SmoothScroll from "@/components/common/SmoothScroll";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";
import TextTwo from "@/components/common/TextTwo";
import Faq from "@/components/common/faq/Faq";
import DetailGridOne from "@/components/pages/apps/DetailGridOne";
import DetailGridThree from "@/components/pages/apps/DetailGridThree";
import DetailGridTwo from "@/components/pages/apps/DetailGridTwo";
import HappyClients from "@/components/pages/apps/HappyClients";
import Information from "@/components/pages/apps/Information";
import VideoBanner from "@/components/pages/apps/VideoBanner";
import { customAppGridDetails } from "@/utils/constant";
import Link from "next/link";

const CustomApp = () => {
    return (
        <SmoothScroll>
            <VideoBanner />
            <Information
                order={true}
                gridDetails={customAppGridDetails}
                title="App Development"
                subTitle="Enhance Your business success with custom mobile"
                description=" Developing a custom Shopify mobile app can be complex,
                        but it can significantly boost your e-commerce business.
                        With the help of a Shopify mobile app development team,
                        you can create a powerful and user-friendly mobile app
                        that will help you to stand out from the competition and
                        increase your bottom line."
            >
                <TextTwo className="font-semibold leading-relaxed">
                    Build Your Own{" "}
                    <span className="bold">Mobile Commerce App</span>
                </TextTwo>
                <TextOne>
                    Take your online store to the next level with our custom
                    mobile commerce app development services. Our expert team
                    will help you create a native app that integrates shopping
                    carts, push notifications, and other features for a seamless
                    user experience.
                </TextOne>
            </Information>
            <DetailGridOne
                imgUrl="/app development/custom-app-banner.png"
                title="Development for All Devices"
                description="Our custom mobile app development services are
                            designed to work on all devices, including iOS and
                            Android. Our cross-platform approach ensures that
                            your app is accessible to a broader audience,
                            regardless of their device."
            />
            <DetailGridTwo title="Expert Mobile App Developers">
                <TextThree className="leading-[1.3] font-semibold"></TextThree>
                <TextOne className="leading-relaxed">
                    Our team of web developers is knowledgeable in all the
                    latest programming languages and development environments.
                    We can help you turn your ideas into reality, with custom
                    mobile app development services that meet your specific
                    needs.
                </TextOne>
            </DetailGridTwo>
            <ReachUs />
            <DetailGridThree title="Dedicated Project Manager">
                <TextOne>
                    Our custom mobile app development services come with the
                    support of a dedicated project manager. They will work with
                    you every step of the way, from planning to deployment, to
                    ensure that your mobile app is delivered on time and within
                    budget.
                </TextOne>
                <TextOne>
                    Our custom mobile app development services come with the
                    support of a dedicated project manager. They will work with
                    you every step of the way, from planning to deployment, to
                    ensure that your mobile app is delivered on time and within
                    budget. With a dedicated project manager, you can relax and
                    focus on other essential aspects of your business, knowing
                    that your mobile app development is in good hands. Our
                    project managers are experienced and knowledgeable and
                    committed to delivering the best possible custom mobile app
                    development services to our clients.
                </TextOne>
            </DetailGridThree>
            <Faq titleOne="We are ready to" titleTwo="ANSWER">
                Transform your business with our custom mobile app development
                services. Our expert team of web developers will help you build
                a native app that is accessible on all devices, with features
                such as push notifications and shopping carts for an unbeatable
                user experience. Or If you are looking to{" "}
                <Link
                    href="/shopify-mobile-app-development"
                    className="font-semibold"
                >
                    Develop A Shopify Mobile App
                </Link>
                , we are also the right choice for you.
            </Faq>

            <HappyClients />

            <Footer />
        </SmoothScroll>
    );
};

export default CustomApp;
