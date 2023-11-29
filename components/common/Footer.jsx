import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";
import ExtendedImage from "./ExtendedImage";

const Footer = () => {
    return (
        <footer className="bg-[#111111] section-padding">
            <div className="lg:flex justify-between 2xl:w-[88vw] w-[95vw] mx-auto ">
                <div className="lg:mb-0 mb-14">
                    <Image
                        src="/icon-white.png"
                        alt="logo"
                        width={40}
                        height={40}
                        className="object-contain"
                    />
                    <ExtendedImage
                        src="/logo-white.png"
                        alt="logo"
                        width={150}
                        height={25}
                        className="object-contain my-3"
                    />
                    <div className="flex gap-3 mt-8">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M15,3C8.373,3,3,8.373,3,15c0,5.084,3.163,9.426,7.627,11.174c-0.105-0.949-0.2-2.406,0.042-3.442 c0.218-0.936,1.407-5.965,1.407-5.965s-0.359-0.719-0.359-1.781c0-1.669,0.967-2.914,2.171-2.914c1.024,0,1.518,0.769,1.518,1.69 c0,1.03-0.655,2.569-0.994,3.995c-0.283,1.195,0.599,2.169,1.777,2.169c2.133,0,3.772-2.249,3.772-5.495 c0-2.873-2.064-4.882-5.012-4.882c-3.414,0-5.418,2.561-5.418,5.208c0,1.031,0.397,2.137,0.893,2.739 c0.098,0.119,0.112,0.223,0.083,0.344c-0.091,0.379-0.293,1.194-0.333,1.361c-0.052,0.22-0.174,0.266-0.401,0.16 c-1.499-0.698-2.436-2.889-2.436-4.649c0-3.785,2.75-7.262,7.929-7.262c4.163,0,7.398,2.966,7.398,6.931 c0,4.136-2.608,7.464-6.227,7.464c-1.216,0-2.359-0.632-2.75-1.378c0,0-0.602,2.291-0.748,2.853 c-0.271,1.042-1.002,2.349-1.492,3.146C12.57,26.812,13.763,27,15,27c6.627,0,12-5.373,12-12S21.627,3,15,3z" />
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 30 30"
                            width="24px"
                            height="24px"
                            fill="currentColor"
                            className="text-white"
                        >
                            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
                        </svg>
                    </div>
                    <p className="text-slate-500 mt-5">
                        copyright © 2022 all rights reserved
                    </p>
                </div>
                <div className="text-white lg:flex grid md:grid-cols-2 2xl:gap-24 gap-10">
                    <div className="">
                        <h2 className="mb-8 text-lg">CSR</h2>
                        <ul className="text-slate-500 space-y-3 text-lg">
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white duration-500"
                                >
                                    Career
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white duration-500"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white duration-500"
                                >
                                    Case Study
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white duration-500"
                                >
                                    Privacy & Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="hover:text-white duration-500"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <h2 className="mb-8 text-lg">Contacts</h2>
                        <ul className="text-slate-500 space-y-5 text-lg">
                            <li className="max-w-[200px]">
                                Mahfuza Tower, Ring Road Mohammadpur, Dhaka-1207
                            </li>
                            <li>
                                <Link
                                    href={`tel:${process?.env?.NEXT_PUBLIC_PHONE_NUMBER}`}
                                    className="hover:text-white duration-500"
                                >
                                    +880 160 1787761
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href={`mailto:${process?.env?.NEXT_PUBLIC_EMAIL}`}
                                    className="hover:text-white duration-500"
                                >
                                    hello@codecony.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="md:col-span-2 lg:mt-0 mt-10">
                        <h2 className="mb-8">Newsletter</h2>
                        <ul className="text-slate-500 lg:max-w-[350px] space-y-5">
                            <form action="" className="flex items-center">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="p-3 w-full focus:outline-none"
                                />
                                <button className="bg-black p-4 h-full aspect-square">
                                    <ChevronRightIcon className="w-4" />
                                </button>
                            </form>
                            <li>
                                Enter your email address for receiving valuable
                                newsletters and insights on the industry.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
