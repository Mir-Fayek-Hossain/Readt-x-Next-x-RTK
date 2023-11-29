import ExtendedImage from "@/components/common/ExtendedImage";
import Image from "next/image";
import { useSelector } from "react-redux";

const OfficeDetailGrid = () => {
    const translateX = useSelector((state) => state.translate.translateX);
    const translateY = useSelector((state) => state.translate.translateY);
    return (
        <section className="section-margin grid lg:grid-cols-3 md:grid-cols-2 lg:gap-10 gap-8 horizontal-section-padding">
            <div className="relative w-full aspect-square group overflow-hidden">
                <ExtendedImage
                    src="/info-1.jpg"
                    alt="Image"
                    fill
                    className="object-cover group-hover:scale-110 !duration-700 ease-in"
                />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="group-hover:text-black text-white duration-300 w-20 h-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
                >
                    <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clipRule="evenodd"
                    />
                </svg>
            </div>
            <div className="relative bg-[#FBF3F0] w-full lg:aspect-square md:aspect-video aspect-square p-10 overflow-hidden lg:order-none order-last lg:col-span-1 md:col-span-2">
                <h2 className="text-4xl  font-medium absolute lg:bottom-20 bottom-[40%] md:w-4/5 z-10">
                    From creating custom features and designs to scaling for
                    different devices.
                </h2>
                <svg
                    viewBox="0 0 200 168"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#F4D2C3"
                    className="absolute h-screen "
                    style={{
                        left: translateX,
                        top: `calc(-60vh + ${translateY}px)`,
                    }}
                >
                    <path
                        className="billey-shape-fill"
                        d="M105.756427,3.12502572 C109.379321,2.40442286 113.038046,3.91999131 115.029142,6.8739652 C116.290136,8.74454568 118.290437,11.1160634 122.27986,13.94807 C128.311661,18.2299941 140.298013,12.0407748 139.514,20.60369 C138.759244,28.8461297 136.066975,33.5228919 158.862837,37.054655 C167.79302,38.4379884 171.855092,43.5578156 175.170626,51.1113889 C178.55618,58.8242664 173.2078,68.1880587 182.168554,81.2360731 C187.769394,89.3923267 179.057159,96.2265418 182.710952,103.028398 C188.200354,113.249073 197.830066,109.059558 199.833653,116.103482 C201.341522,121.405327 192.081298,122.009252 192.865311,136.925046 C194.213748,162.553741 157.349381,174.840704 145.980706,164.122826 C135.023926,153.793563 124.061229,165.739204 117.324967,158.831249 C109.232709,150.533115 115.386139,136.901399 99.5763706,138.82114 C94.3532367,139.455246 82.211069,146.662519 75.4485093,141.79845 C66.2615921,135.191057 51.6089409,148.310323 43.6886066,135.003439 C32.7860663,116.68656 26.5810266,125.211827 21.215554,114.920212 C17.1173218,107.059854 17.3336237,101.108035 18.9690376,92.238957 C20.6619788,83.0574934 30.5247573,75.1557533 25.7680861,72.0605213 C18.8746932,67.5747995 17.7514351,85.5624906 11.1187222,79.1971654 C7.26309004,75.4964528 10.3846761,72.2148472 14.5657474,66.1475952 C17.625204,61.7079224 18.4434042,56.1559201 12.4116031,50.6894815 C3.27629608,42.4103271 -4.41360094,24.8812581 2.93277698,14.7635709 C8.64505588,6.89698965 17.8898288,11.7847057 21.5912884,8.19507045 C30.0405433,-7.57995233e-05 36.1252693,5.09983848 43.1093906,2.0802138 C52.5780263,-2.01347006 59.9796304,0.686612675 70.5366792,3.74544113 C85.6768315,8.13253108 99.1598743,4.437419 105.756427,3.12502572"
                    ></path>
                </svg>
                <Image
                    src="/plus-dot.png"
                    alt="logo"
                    fill
                    className="object-contain 2xl:!w-[200px] !w-[150px] 2xl:!h-[200px] !h-[150px]  "
                    style={{
                        left: `calc(50% - ${translateX}px)`,
                        top: `calc(60% - ${translateY}px)`,
                    }}
                />
            </div>
            <div className="relative w-full aspect-square">
                <ExtendedImage
                    src="/info-3.jpg"
                    alt="Image"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default OfficeDetailGrid;
