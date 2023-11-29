import ExtendedImage from "@/components/common/ExtendedImage";
import TextThree from "@/components/common/TextThree";

const AboutBanner = () => {
    return (
        <div className="w-full md:h-[90vh] aspect-square relative">
            <ExtendedImage
                src="/about-banner.jpg"
                alt="Image"
                fill
                className="object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <TextThree className="text-white font-semibold  grid gap-3 md:grid-cols-2 whitespace-nowrap">
                    <span>Get hold of the</span>
                    <span className="relative">
                        <span className="text-flip-animation">
                            Modern Design
                        </span>
                        <span className="text2-flip-animation">
                            Better Experience
                        </span>
                    </span>
                </TextThree>
            </div>
        </div>
    );
};

export default AboutBanner;
