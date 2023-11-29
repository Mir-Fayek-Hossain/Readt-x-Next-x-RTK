import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ExtendedImage from "./ExtendedImage";
const BussinessClientSlider = () => {
    return (
        <>
            <div className="border-b horizontal-section-padding">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 40,
                        },
                    }}
                    modules={[Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    className="mySwiper max-w-5xl mx-auto my-8"
                >
                    {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((val, idx) => (
                        <SwiperSlide
                            key={idx}
                            className="relative w-full aspect-[5/3]"
                        >
                            <ExtendedImage
                                className="opacity-30 hover:opacity-100 object-contain duration-300 max-w-[100px] mx-auto"
                                src={`/dark-client-logo-${val}.png`}
                                alt="client"
                                fill
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default BussinessClientSlider;
