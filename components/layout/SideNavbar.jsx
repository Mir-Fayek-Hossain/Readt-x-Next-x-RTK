import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ExtendedImage from "../common/ExtendedImage";
import Slider from "../pages/web/frontend/Slider";

const SideNavbar = ({
    mobileSideBarOpened,
    setMobileSideBarOpened,
    navigation,
}) => {
    const [openSlider, setOpenSlider] = useState();
    const ref = useRef(null);

    const handleSlider = (index) => {
        if (openSlider == index) {
            setOpenSlider();
        } else {
            setOpenSlider(index);
        }
    };
    const handleOutSideClick = (event) => {
        if (!ref.current?.contains(event.target)) {
            if (!mobileSideBarOpened) return;
            setMobileSideBarOpened(false);
        }
    };
    useEffect(() => {
        if (mobileSideBarOpened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        window.addEventListener("mousedown", handleOutSideClick);
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    });
    return (
        <Slider
            className={`fixed top-0 right-0  h-screen w-screen bg-black bg-opacity-50 z-[999]`}
            sliderVisibility={mobileSideBarOpened}
        >
            <div
                ref={ref}
                className={`w-[350px] bg-[#111111] float-right h-full ${
                    mobileSideBarOpened
                        ? "translate-x-0"
                        : "translate-x-[350px]"
                } duration-300`}
            >
                <div className="bg-white p-6 flex justify-between items-center">
                    <ExtendedImage
                        src="/logo-dark.png"
                        alt="logo"
                        width={150}
                        height={25}
                        className="object-contain"
                    />
                    <button
                        onClick={() => {
                            setMobileSideBarOpened(false);
                        }}
                    >
                        <XMarkIcon className="w-10 text-black" />
                    </button>
                </div>
                <ul className="w-full px-8 pt-4 text-white h-full">
                    {navigation.map((nav, idx) => (
                        <li key={idx}>
                            {nav?.child ? (
                                <div className="w-full group">
                                    <div
                                        className="flex justify-between items-center border-b border-b-slate-600"
                                        onClick={() => {
                                            handleSlider(idx);
                                        }}
                                    >
                                        <p className="py-5">{nav.name}</p>
                                        <button className="p-2 h-fit aspect-square bg-[#4e4e4e55] group-hover:bg-[#85848455]">
                                            <ChevronDownIcon
                                                className={`w-6 ${
                                                    openSlider == idx &&
                                                    "rotate-180"
                                                } duration-300`}
                                            />
                                        </button>
                                    </div>
                                    <Slider
                                        className="border-b border-b-slate-600"
                                        sliderVisibility={openSlider == idx}
                                    >
                                        {nav?.child?.map(
                                            (navChild, childIdx) => (
                                                <Link
                                                    href={navChild.link}
                                                    key={childIdx}
                                                >
                                                    <p className="p-5">
                                                        {navChild.name}
                                                    </p>
                                                </Link>
                                            )
                                        )}
                                    </Slider>
                                </div>
                            ) : (
                                <Link href={nav.link} className="">
                                    <p
                                        className={`py-5 ${
                                            navigation.length != idx + 1 &&
                                            "border-b border-b-slate-600"
                                        }`}
                                    >
                                        {nav.name}
                                    </p>
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </Slider>
    );
};

export default SideNavbar;
