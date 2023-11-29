import Button from "@/components/common/Button";
import TextFour from "@/components/common/TextFour";
import TextOne from "@/components/common/TextOne";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useSelector } from "react-redux";

const Hero = () => {
    const translateX = useSelector((state) => state.translate.translateX);
    const translateY = useSelector((state) => state.translate.translateY);
    return (
        <section className="relative h-screen text-center w-full flex flex-col justify-center items-center gap-y-10">
            <TextFour>
                <span className="mb-4">Serving Innovation.</span>
                <br />
                <span>
                    Build eCommerce <span className="uppercase bold">App</span>{" "}
                    & <span className="uppercase bold">Website</span>
                </span>
            </TextFour>
            <div className="text-[#888888] text-lg">
                <TextOne className="mb-2 max-w-[600px] px-3 md:!text-xl">
                    Build eCommerce app and website that can be used by
                    individual sellers, small businesses, and large corporations
                    alike.
                </TextOne>
            </div>
            <Button>
                <p>start a project</p>
                <span>
                    <ArrowRightCircleIcon className="w-5" />
                </span>
            </Button>
            <div className="w-[25vw] aspect-square absolute left-0 top-0 ">
                <div
                    className="lg:w-[20vw] w-[100px] aspect-square relative bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url('/hero-1.png')` }}
                ></div>
                <Image
                    src="/circle-dot.png"
                    alt="logo"
                    fill
                    className="object-contain -z-10"
                    style={{ left: translateX - 50, top: translateY - 200 }}
                />
            </div>
            <div className="w-[25vw] aspect-square absolute right-0 top-0 ">
                <div className="relative w-full h-full">
                    <div
                        className="lg:w-[20vw] w-[100px] aspect-square relative bg-contain bg-no-repeat float-right overflow-hidden"
                        style={{ backgroundImage: `url('/hero-2.png')` }}
                    >
                        <Image
                            src="/wave-white.png"
                            alt="logo"
                            fill
                            className="object-contain !w-[300px] !h-[300px] "
                            style={{
                                left: -translateX + 100,
                                top: -translateY + 100,
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="w-[25vw] lg:h-[350px] h-[100px] absolute left-0 bottom-0">
                <div className="relative w-full h-full">
                    <div
                        className="lg:w-full w-[100px] lg:h-[350px] h-[100px] relative bg-bottom bg-contain bg-no-repeat overflow-hidden"
                        style={{ backgroundImage: `url('/hero-3.png')` }}
                    >
                        <Image
                            src="/blob-dot.png"
                            alt="logo"
                            fill
                            className="object-contain !w-[350px] !h-[350px] rotate-180"
                            style={{
                                left: translateX - 150,
                                top: -translateY - 100,
                            }}
                        />
                    </div>
                </div>
            </div>
            <div className="w-[25vw] lg:h-[350px] h-[100px] absolute right-0 bottom-0">
                <div className="relative w-full h-full">
                    <div
                        className="lg:w-full w-[100px] lg:h-[350px] h-[100px] relative bg-bottom bg-contain bg-no-repeat overflow-hidden"
                        style={{ backgroundImage: `url('/hero-4.png')` }}
                    >
                        <Image
                            src="/snake-pattern.png"
                            alt="logo"
                            fill
                            className="object-contain !w-[380px] !h-[380px] "
                            style={{
                                left: translateX + 100,
                                top: -translateY,
                            }}
                        />
                    </div>

                    <Image
                        src="/plus-dot.png"
                        alt="logo"
                        fill
                        className="object-contain 2xl:!w-[200px] !w-[150px] 2xl:!h-[200px] !h-[150px]  "
                        style={{
                            left: -translateX - 50,
                            top: translateY + 150,
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
