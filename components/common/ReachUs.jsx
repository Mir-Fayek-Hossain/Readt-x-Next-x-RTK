import Link from "next/link";
import Button from "./Button";
import TextOne from "./TextOne";
import TextTwo from "./TextTwo";

const ReachUs = () => {
    return (
        <div className="max-w-[650px] space-y-6 text-center mx-auto section-margin horizontal-section-padding">
            <div className=" w-40 aspect-square  mx-auto relative flex justify-center">
                <div className="absolute -z-10 -left-10 -top-5 w-40 h-40 rounded-full bg-[#FCF6F6]"></div>
                <div className="absolute -z-10 -right-10 bottom-10 w-14 h-14 rounded-full bg-[#FCF6F6]"></div>
                <svg
                    width="74px"
                    height="90px"
                    viewBox="0 0 74 90"
                    className="absolute bottom-0"
                >
                    <g
                        stroke="none"
                        strokeWidth="1"
                        fill="black"
                        fillRule="evenodd"
                    >
                        <g transform="translate(-920.000000, -3196.000000)">
                            <g transform="translate(629.000000, 3114.000000)">
                                <g transform="translate(291.000000, 82.000000)">
                                    <path
                                        d="M47.700897,5.52337646 L44.1660916,5.52337646 L44.1660916,1.7578125 C44.1660916,0.787582441 43.3746762,0 42.399724,0 C41.4247718,0 40.6333563,0.787582441 40.6333563,1.7578125 L40.6333563,5.52337646 L33.5665057,5.52337646 L33.5665057,1.7578125 C33.5665057,0.787582441 32.7750901,0 31.800138,0 C30.8251859,0 30.0337704,0.787582441 30.0337704,1.7578125 L30.0337704,5.52337646 L22.9662296,5.52337646 L22.9662296,1.7578125 C22.9662296,0.787582441 22.1748141,0 21.199862,0 C20.2249099,0 19.4334943,0.787582441 19.4334943,1.7578125 L19.4334943,5.52337646 L12.3666437,5.52337646 L12.3666437,1.7578125 C12.3666437,0.787582441 11.5752282,0 10.600276,0 C9.62463381,0 8.83390837,0.787582441 8.83390837,1.7578125 L8.83390837,5.52337646 L5.29910302,5.52337646 C2.37769657,5.52337646 0,7.8888702 0,10.796814 L0,84.7265625 C0,87.6338195 2.37769657,90 5.29910302,90 L47.700897,90 C50.6223036,90 53,87.6338195 53,84.7265625 L53,10.796814 C53,7.8888702 50.6223036,5.52337646 47.700897,5.52337646 Z M49.4672647,84.7265625 C49.4672647,85.6954194 48.6737793,86.484375 47.700897,86.484375 L5.29910302,86.484375 C4.32553079,86.484375 3.53273535,85.6954194 3.53273535,84.7265625 L3.53273535,10.796814 C3.53273535,9.82795711 4.32553079,9.03900146 5.29910302,9.03900146 L8.83390837,9.03900146 L8.83390837,12.3184204 C8.83390837,13.2893371 9.62463381,14.0762329 10.600276,14.0762329 C11.5752282,14.0762329 12.3666437,13.2893371 12.3666437,12.3184204 L12.3666437,9.03900146 L19.4334943,9.03900146 L19.4334943,12.3184204 C19.4334943,13.2893371 20.2249099,14.0762329 21.199862,14.0762329 C22.1748141,14.0762329 22.9662296,13.2893371 22.9662296,12.3184204 L22.9662296,9.03900146 L30.0337704,9.03900146 L30.0337704,12.3184204 C30.0337704,13.2893371 30.8251859,14.0762329 31.800138,14.0762329 C32.7750901,14.0762329 33.5665057,13.2893371 33.5665057,12.3184204 L33.5665057,9.03900146 L40.6333563,9.03900146 L40.6333563,12.3184204 C40.6333563,13.2893371 41.4247718,14.0762329 42.399724,14.0762329 C43.3746762,14.0762329 44.1660916,13.2893371 44.1660916,12.3184204 L44.1660916,9.03900146 L47.700897,9.03900146 C48.6737793,9.03900146 49.4672647,9.82795711 49.4672647,10.796814 L49.4672647,84.7265625 Z"
                                        fillRule="nonzero"
                                    ></path>
                                    <path d="M23.2859056,28 L14.7140944,28 C13.7673252,28 13,27.1046874 13,26 C13,24.8960936 13.7673252,24 14.7140944,24 L23.2859056,24 C24.2326748,24 25,24.8960936 25,26 C25,27.1046874 24.2326748,28 23.2859056,28 Z"></path>
                                    <path d="M45.1901092,42 L8.80989077,42 C7.810209,42 7,41.1039062 7,40 C7,38.8953124 7.810209,38 8.80989077,38 L45.1901092,38 C46.1890841,38 47,38.8953124 47,40 C47,41.1039062 46.1890841,42 45.1901092,42 Z"></path>
                                    <path d="M9.00078099,28 C7.89652477,28 7,27.1046874 7,26 C7,24.8960936 7.89418189,24 8.99843811,24 L9.00078099,24 C10.105037,24 11,24.8960936 11,26 C11,27.1046874 10.105037,28 9.00078099,28 Z"></path>
                                    <path
                                        d="M73.9965826,24.340134 C73.9808622,24.1138423 73.9207147,23.8903187 73.8270762,23.6847878 L68.5935653,12.036651 C68.3078651,11.4062177 67.6872529,11 67.0010253,11 C66.3147977,11 65.6921349,11.4062177 65.4071181,12.036651 L60.1736075,23.6847878 C60.062198,23.9235358 60,24.1871967 60,24.4515497 L60,86.4568405 C60,88.4111144 61.569985,90 63.4994874,90 L70.5005126,90 C72.4306986,90 74,88.4111144 74,86.4568405 L74,24.4515497 C74,24.4148723 73.9979495,24.3775031 73.9965826,24.340134 Z M67.0010253,17.048284 L69.5313188,22.6799699 L64.4693649,22.6799699 L67.0010253,17.048284 Z M70.5025632,86.5758685 C70.5025632,86.5758685 70.5025632,86.5758685 70.5005126,86.5758685 L63.4994874,86.5758685 L63.4994874,79.4895496 L70.5005126,79.4895496 L70.5025632,86.4568405 L70.5025632,86.5758685 Z M63.4994874,75.9463901 L63.4994874,26.2231294 L70.5005126,26.2231294 L70.5025632,75.9463901 L63.4994874,75.9463901 Z"
                                        fillRule="nonzero"
                                    ></path>
                                    <path d="M45.1901092,53 L8.80989077,53 C7.810209,53 7,52.1039062 7,51 C7,49.8953124 7.810209,49 8.80989077,49 L45.1901092,49 C46.1890841,49 47,49.8953124 47,51 C47,52.1039062 46.1890841,53 45.1901092,53 Z"></path>
                                    <path d="M45.1901092,64 L8.80989077,64 C7.810209,64 7,63.1039062 7,62 C7,60.8953124 7.810209,60 8.80989077,60 L45.1901092,60 C46.1890841,60 47,60.8953124 47,62 C47,63.1039062 46.1890841,64 45.1901092,64 Z"></path>
                                    <path d="M26.25,74 L8.75,74 C7.78339852,74 7,73.1039062 7,72 C7,70.8953124 7.78339852,70 8.75,70 L26.25,70 C27.2166015,70 28,70.8953124 28,72 C28,73.1039062 27.2166015,74 26.25,74 Z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
            <TextTwo className="font-semibold">
                Have a new project ? <br /> Reach us at
                <Link
                    href={`mailto:${process?.env?.NEXT_PUBLIC_EMAIL}`}
                    className="hover-underline-animation"
                >
                    hello@codecony.com
                </Link>
            </TextTwo>
            <TextOne>
                We are open to discussion and very flexible when it comes to
                mobile app development and website design. Have a talk with me.
            </TextOne>
            <Button darkBtn={true} className="mx-auto">
                Book a meeting
            </Button>
        </div>
    );
};

export default ReachUs;
