import ExtendedImage from "@/components/common/ExtendedImage";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const GridImageSlider = () => {
    return (
        <section className="section-margin">
            <Swiper
                slidesPerView={"auto"}
                spaceBetween={100}
                loop={true}
                autoplay={{
                    delay: 2500,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-1.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-2.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-3.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-4.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-1.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-2.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-3.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
                <SwiperSlide className="aboutSlides">
                    <ExtendedImage
                        src="/about-slide-4.jpg"
                        alt="Image"
                        fill
                        className="object-cover max-h-[80%]"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default GridImageSlider;
