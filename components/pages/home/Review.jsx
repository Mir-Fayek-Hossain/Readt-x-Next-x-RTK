// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import TextTwo from "@/components/common/TextTwo";
import Image from "next/image";
import { useSelector } from "react-redux";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const Review = () => {
    const translateX = useSelector((state) => state.translate.translateX);
    const translateY = useSelector((state) => state.translate.translateY);
    return (
        <>
            <div className="bg-[#F0F8F6] w-full section-padding relative overflow-hidden">
                <svg
                    viewBox="0 0 200 168"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#D7EDE7"
                    className="w-[40vw] absolute  -right-10"
                    style={{
                        right: translateX,
                        top: `calc(-40vh - ${translateY}px)`,
                    }}
                >
                    <path d="M105.756427,3.12502572 C109.379321,2.40442286 113.038046,3.91999131 115.029142,6.8739652 C116.290136,8.74454568 118.290437,11.1160634 122.27986,13.94807 C128.311661,18.2299941 140.298013,12.0407748 139.514,20.60369 C138.759244,28.8461297 136.066975,33.5228919 158.862837,37.054655 C167.79302,38.4379884 171.855092,43.5578156 175.170626,51.1113889 C178.55618,58.8242664 173.2078,68.1880587 182.168554,81.2360731 C187.769394,89.3923267 179.057159,96.2265418 182.710952,103.028398 C188.200354,113.249073 197.830066,109.059558 199.833653,116.103482 C201.341522,121.405327 192.081298,122.009252 192.865311,136.925046 C194.213748,162.553741 157.349381,174.840704 145.980706,164.122826 C135.023926,153.793563 124.061229,165.739204 117.324967,158.831249 C109.232709,150.533115 115.386139,136.901399 99.5763706,138.82114 C94.3532367,139.455246 82.211069,146.662519 75.4485093,141.79845 C66.2615921,135.191057 51.6089409,148.310323 43.6886066,135.003439 C32.7860663,116.68656 26.5810266,125.211827 21.215554,114.920212 C17.1173218,107.059854 17.3336237,101.108035 18.9690376,92.238957 C20.6619788,83.0574934 30.5247573,75.1557533 25.7680861,72.0605213 C18.8746932,67.5747995 17.7514351,85.5624906 11.1187222,79.1971654 C7.26309004,75.4964528 10.3846761,72.2148472 14.5657474,66.1475952 C17.625204,61.7079224 18.4434042,56.1559201 12.4116031,50.6894815 C3.27629608,42.4103271 -4.41360094,24.8812581 2.93277698,14.7635709 C8.64505588,6.89698965 17.8898288,11.7847057 21.5912884,8.19507045 C30.0405433,-7.57995233e-05 36.1252693,5.09983848 43.1093906,2.0802138 C52.5780263,-2.01347006 59.9796304,0.686612675 70.5366792,3.74544113 C85.6768315,8.13253108 99.1598743,4.437419 105.756427,3.12502572"></path>
                </svg>
                <Image
                    src="/plus-dot.png"
                    alt="plus dot"
                    fill
                    className="absolute !w-[200px] !h-[200px] object-contain"
                    
                    style={{
                        left: `calc(100px _ ${translateY}px)`,
                        top: `calc(-100px - ${translateX}px)`,
                    }}
                />
                <svg
                    width="256px"
                    height="256px"
                    viewBox="0 0 200 196"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#D28362"
                    className="absolute "
                    style={{
                        left: `calc(-100px - ${translateX}px)`,
                        top: `calc(200px - ${translateY}px)`,
                    }}
                >
                    <path d="M57.147076,9.29628097 C99.9615154,-7.59152273 137.120071,-1.47029345 168.622742,27.6599688 C200.125414,56.790231 207.906645,93.3045296 191.966437,137.202864 C171.851623,176.014186 150.255646,195.419847 127.178507,195.419847 C92.5627989,195.419847 36.8378718,174.300472 7.83733734,105.19554 C-11.4963523,59.1255846 4.94022726,27.1591651 57.147076,9.29628097 Z"></path>
                </svg>

                <Image
                    src="/blob-dot.png"
                    alt="plus dot"
                    fill
                    className="absolute !w-[400px] !h-[400px]  object-contain"
                    style={{
                        left: `calc(-100px + ${translateX}px)`,
                        top: `calc(200px + ${translateY}px)`,
                    }}
                />
                <Image
                    src="/wave.png"
                    alt="pluss dot"
                    fill
                    className="!w-[200px] !h-[200px] object-contain"
                    
                    style={{
                        left: `calc(80% + ${translateX}px)`,
                        top: `calc(80% + ${translateY}px)`,
                    }}
                />
                <Swiper
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{ delay: 2000 }}
                    loop={true}
                    className="mySwiper fluid-container"
                >
                    <SwiperSlide>
                        <div className="md:w-[80%] w-full mx-auto flex flex-col justify-center items-center horizontal-section-padding gap-y-10">
                            <Image
                                className="rounded-full"
                                src="/person1.jpeg"
                                alt="client"
                                width={130}
                                height={130}
                            />
                            <TextTwo className="italic text-center">
                                I can&apos;t say enough good things about
                                Codecony. They developed a custom mobile app for
                                my business and the end result was exactly what
                                I was hoping for
                            </TextTwo>
                            <TextTwo className="font-semibold">Emma</TextTwo>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="md:w-[80%] w-full mx-auto flex flex-col justify-center items-center horizontal-section-padding gap-y-10">
                            <Image
                                className="rounded-full"
                                src="/person2.jpeg"
                                alt="client"
                                width={100}
                                height={100}
                            />
                            <TextTwo className="italic text-center">
                                I just love their design for all stunning
                                details. You must know what can you do for a
                                project before taking it, but with CODECONY, the
                                sky is the limit.
                            </TextTwo>
                            <p className="font-semibold text-4xl">Lucas Rob</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Review;
