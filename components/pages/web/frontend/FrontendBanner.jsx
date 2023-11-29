import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { useState } from "react";
import { Autoplay, Pagination } from "swiper";
import TextOne from "../../../common/TextOne";
import TextTwo from "../../../common/TextTwo";
const FrontendBanner = () => {
    const expanded = "max-h-screen duration-1000 bg-white";
    const minimized = "max-h-[100px] duration-300 text-white";
    const [visibledContent, setVisibledContent] = useState("");
    let sliderTitles = ["requirements", "development", "feedback", "delivery"];
    const handleHover = (content) => {
        console.log(content);
        setVisibledContent(content);
    };
    const handleSlideChange = (swiper) => {
        setVisibledContent(sliderTitles[swiper.realIndex]);
        console.log(swiper.realIndex);
    };
    return (
        <section className="w-full lg:h-[80vh] h-[600px] relative overflow-hidden">
            <div
                className={`absolute w-full h-full bg-cover bg-center  duration-1000 ${
                    visibledContent == "requirements" || visibledContent == ""
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-0"
                }`}
                style={{ backgroundImage: "url('/frontend/requirements.jpg')" }}
            ></div>
            <div
                className={`absolute w-full h-full bg-cover bg-center  duration-1000 ${
                    visibledContent == "development"
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-0"
                }`}
                style={{ backgroundImage: "url('/frontend/development.jpg')" }}
            ></div>
            <div
                className={`absolute w-full h-full bg-cover bg-center  duration-1000 ${
                    visibledContent == "feedback"
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-0"
                }`}
                style={{ backgroundImage: "url('/frontend/feedback.jpg')" }}
            ></div>
            <div
                className={`absolute w-full h-full bg-cover bg-center  duration-1000 ${
                    visibledContent == "delivery"
                        ? "scale-110 opacity-100"
                        : "scale-100 opacity-0"
                }`}
                style={{ backgroundImage: "url('/frontend/delivery.jpg')" }}
            ></div>
            {/* <div
                className="absolute h-full w-full bg-center bg-cover "
                style={{ backgroundImage: "url('/frontend/development.jpg')" }}
            ></div> */}
            <Swiper
                onSlideChange={handleSlideChange}
                slidesPerView={1}
                breakpoints={{
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="mySwiper h-full"
            >
                <SwiperSlide className="border-r border-r-[#ffffff5b]">
                    <div
                        className="flex h-full w-full group"
                        onMouseEnter={() => {
                            handleHover("requirements");
                        }}
                    >
                        <div
                            className={` w-full place-self-end p-10 space-y-6 overflow-hidden transition-all ease-in-out ${
                                visibledContent == "requirements"
                                    ? expanded
                                    : minimized
                            }`}
                        >
                            <TextTwo>Requirements</TextTwo>
                            <TextOne>
                                We work with clients to understand their
                                specific needs and goals for their website. We
                                take the design source file like XD, FIGMA,
                                SKETCH or any custom design.
                            </TextOne>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="border-r border-r-[#ffffff5b]">
                    <div
                        className="flex h-full w-full group"
                        onMouseEnter={() => {
                            handleHover("development");
                        }}
                    >
                        <div
                            className={` w-full place-self-end p-10 space-y-6 overflow-hidden transition-all ease-in-out ${
                                visibledContent == "development"
                                    ? expanded
                                    : minimized
                            }`}
                        >
                            <TextTwo>Development</TextTwo>
                            <TextOne>
                                From the UX-UI or mockup our team bring it to
                                life using HTML, CSS, and JavaScript. They
                                ensure that the website is responsive,
                                user-friendly, and visually appealing.
                            </TextOne>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="border-r border-r-[#ffffff5b]">
                    <div
                        className="flex h-full w-full group"
                        onMouseEnter={() => {
                            handleHover("feedback");
                        }}
                    >
                        <div
                            className={` w-full place-self-end p-10 space-y-6 overflow-hidden transition-all ease-in-out ${
                                visibledContent == "feedback"
                                    ? expanded
                                    : minimized
                            }`}
                        >
                            <TextTwo>Feedback</TextTwo>
                            <TextOne>
                                Team always keep updated about the progress and
                                take feedback for any necessary revisions to
                                ensure that the final product meets the
                                expectations.
                            </TextOne>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="lg:border-0 border-r border-r-[#ffffff5b]">
                    <div
                        className="flex h-full w-full group"
                        onMouseEnter={() => {
                            handleHover("delivery");
                        }}
                    >
                        <div
                            className={` w-full place-self-end p-10 space-y-6 overflow-hidden transition-all ease-in-out ${
                                visibledContent == "delivery"
                                    ? expanded
                                    : minimized
                            }`}
                        >
                            <TextTwo>Delivery</TextTwo>
                            <TextOne>
                                After completing the feedback Team will process
                                the delivery. One thing that should be mentioned
                                that Codecony provide ongoing support.
                            </TextOne>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default FrontendBanner;
