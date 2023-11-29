import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";
import Link from "next/link";

const Team = () => {
    return (
        <section className="text-center section-margin">
            <TextThree className=" font-semibold ">Meet The Team</TextThree>
            <TextOne className="horizontal-section-padding mt-8">
                Say hello to the most dedicated team members of Codecony.
            </TextOne>
            <div className="max-w-2xl mx-auto grid md:grid-cols-3 gap-10 text-left pt-16">
                <div className="group md:px-0 px-3">
                    <div className="relative w-full aspect-[7/9] overflow-hidden flex justify-center">
                        <ExtendedImage
                            src="/cco.png"
                            alt="Image"
                            fill
                            className="object-cover group-hover:scale-110 duration-1000"
                        />
                        <div className="group-hover:opacity-100 duration-300 opacity-0 absolute z-10 bg-gradient-to-b from-transparent to-black w-full h-full"></div>
                        <Link
                            href="#"
                            className="group-hover:opacity-100 duration-300 opacity-0 hover:bg-black hover:text-white absolute bottom-5 z-20 bg-white p-4 aspect-square rounded-full text-[#888888]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                width="26px"
                                height="26px"
                                fill="currentColor"
                            >
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="#">
                        <p className="text-lg font-semibold mt-5 mb-2">
                            Apel Mahmud Khan
                        </p>
                    </Link>
                    <p className="uppercase font-bold text-xs text-[#888888]">
                        cco
                    </p>
                </div>
                <div className="group md:px-0 px-3">
                    <div className="relative w-full aspect-[7/9] overflow-hidden flex justify-center">
                        <ExtendedImage
                            src="/ceo.png"
                            alt="Image"
                            fill
                            className="object-cover group-hover:scale-110 duration-1000"
                        />
                        <div className="group-hover:opacity-100 duration-300 opacity-0 absolute z-10 bg-gradient-to-b from-transparent to-black w-full h-full"></div>
                        <Link
                            href="#"
                            className="group-hover:opacity-100 duration-300 opacity-0 hover:bg-black hover:text-white absolute bottom-5 z-20 bg-white p-4 aspect-square rounded-full text-[#888888]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                width="26px"
                                height="26px"
                                fill="currentColor"
                            >
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="#">
                        <p className="text-lg font-semibold mt-5 mb-2">
                            Ainul Bashar
                        </p>
                    </Link>
                    <p className="uppercase font-bold text-xs text-[#888888]">
                        ceo
                    </p>
                </div>
                <div className="group md:px-0 px-3">
                    <div className="relative w-full aspect-[7/9] overflow-hidden flex justify-center">
                        <ExtendedImage
                            src="/cto.png"
                            alt="Image"
                            fill
                            className="object-cover group-hover:scale-110 duration-1000"
                        />
                        <div className="group-hover:opacity-100 duration-300 opacity-0 absolute z-10 bg-gradient-to-b from-transparent to-black w-full h-full"></div>
                        <Link
                            href="#"
                            className="group-hover:opacity-100 duration-300 opacity-0 hover:bg-black hover:text-white absolute bottom-5 z-20 bg-white p-4 aspect-square rounded-full text-[#888888]"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 30 30"
                                width="26px"
                                height="26px"
                                fill="currentColor"
                            >
                                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                            </svg>
                        </Link>
                    </div>
                    <Link href="#">
                        <p className="text-lg font-semibold mt-5 mb-2">
                            Md Solaiman
                        </p>
                    </Link>
                    <p className="uppercase font-bold text-xs text-[#888888]">
                        cto
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Team;
