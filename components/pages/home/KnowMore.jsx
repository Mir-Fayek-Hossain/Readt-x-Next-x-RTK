import Button from "@/components/common/Button";
import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextTwo from "@/components/common/TextTwo";
import Image from "next/image";
import { useSelector } from "react-redux";

const KnowMore = () => {
    const translateX = useSelector((state) => state.translate.translateX);
    const translateY = useSelector((state) => state.translate.translateY);
    return (
        <section className="fluid-container grid lg:grid-cols-2 section-margin lg:gap-16  horizontal-section-padding">
            <div className="relative lg:w-full md:w-[90%] w-full mx-auto aspect-square">
                <svg
                    viewBox="0 0 200 129"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="absolute right-2 top-0 text-[#A5D5CA] lg:w-[400px] w-[200px] lg:h-[200px] h-[100px]"
                    style={{
                        right: -translateX ,
                        top: translateY + 50,
                    }}
                >
                    <path
                        className="billey-shape-fill"
                        d="M47.8816064,17.2221753 C73.1958377,-4.99449778 99.3898677,-5.7164749 126.463697,15.056244 C167.07444,46.2153223 183.964009,23.2613678 198.14354,56.2089396 C212.323072,89.1565114 143.644819,158.006459 47.8816064,113.64999 C-15.9605355,84.079011 -15.9605355,51.936406 47.8816064,17.2221753 Z"
                    ></path>
                </svg>
                <ExtendedImage
                    src="/codecony-office.png"
                    alt="Image"
                    fill
                    className="object-contain"
                />
                <Image
                    src="/circle-dot.png"
                    alt="Image"
                    fill
                    className="object-contain lg:max-w-[80%] max-w-[40%]   -z-10"
                    style={{
                        left: -translateX - 100,
                        top: -translateY + 100,
                    }}
                />
            </div>
            <div className="grid gap-y-10 py-16">
                <p className="mini-title">About codecony</p>
                <TextTwo className="leading-relaxed">
                    Transform your digital presence with the best eCommerce app
                    & website
                </TextTwo>
                <TextOne>
                    Maximize your online potential with our custom eCommerce app
                    & website development services. Our team of experts creates
                    user-friendly, secure, and optimized solutions to drive
                    sales and improve customer experiences. Partner with us to
                    grow your business today.
                </TextOne>
                <Button>
                    <p>Know more</p>
                    <span className="font-serif 2xl:text-2xl text-lg font-extrabold lowercase">
                        i
                    </span>
                </Button>
            </div>
        </section>
    );
};

export default KnowMore;
