import { navigation } from "@/utils/constant";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import ExtendedImage from "../common/ExtendedImage";
import SideNavbar from "./SideNavbar";

const Navbar = () => {
    const router = useRouter();
    const [stickyNavbar, setStickyNavbar] = useState(false);
    const [mobileSideBarOpened, setMobileSideBarOpened] = useState(false);

    // handling side navbar close on changing route
    mobileSideBarOpened &&
        router.events.on("routeChangeStart", () => {
            setMobileSideBarOpened(false);
        });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setStickyNavbar(true);
            } else {
                setStickyNavbar(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const routeChecker =
        stickyNavbar ||
        router.pathname == "/" ||
        router.pathname == "/contact-us";

    return (
        <header
            className={`fixed ${
                stickyNavbar ? "bg-white shadow-xl" : "bg-transparent"
            } ${
                routeChecker ? "text-black" : "text-white"
            } duration-500 w-full z-50`}
        >
            <nav className="2xl:w-[88vw] w-[95vw] mx-auto py-[18px] flex justify-between items-center relative">
                <Link href="/">
                    <ExtendedImage
                        src={`${
                            routeChecker ? "/logo-dark.png" : "/logo-white.png"
                        }`}
                        alt="logo"
                        width={150}
                        height={25}
                        className="object-contain"
                    />
                </Link>
                <ul className="lg:flex hidden  gap-5 uppercase">
                    {navigation?.map((nav, idx) => (
                        <li key={idx}>
                            {nav?.child ? (
                                <div
                                    className={`relative hover:overflow-visible overflow-hidden group  mx-3.5 duration-150 font-light group grid place-items-center navbar-underline-animation after:duration-700 ${
                                        routeChecker
                                            ? "after:bg-black"
                                            : "after:bg-white"
                                    } 
                                } ${
                                    nav?.child?.some(
                                        (val) => val.link === router.pathname
                                    ) && "after:!scale-x-100"
                                }`}
                                >
                                    <div className="flex gap-1 items-center">
                                        <p className="inline-flex">
                                            {nav.name}
                                        </p>
                                        <span className="inline-flex">
                                            <ChevronDownIcon className=" w-4 " />
                                        </span>
                                    </div>
                                    <ul className="absolute  group-hover:opacity-100  opacity-0 left-0 group-hover:top-3 top-20  duration-500 pt-6 ">
                                        <div
                                            className={` px-4 py-2 bg-white  border-b-4 border-black w-60  ${
                                                routeChecker ? "shadow-box" : ""
                                            }`}
                                        >
                                            {nav?.child?.map(
                                                (navChild, idx) => (
                                                    <Link
                                                        key={idx}
                                                        href={navChild?.link}
                                                        className="hover:opacity-100 opacity-50 duration-150 text-black"
                                                    >
                                                        <li className="py-2">
                                                            {navChild?.name}
                                                        </li>
                                                    </Link>
                                                )
                                            )}
                                        </div>
                                    </ul>
                                </div>
                            ) : (
                                <Link
                                    className={`mx-3.5 duration-150 py-0 font-light group grid place-items-center navbar-underline-animation after:duration-300 ${
                                        routeChecker
                                            ? "after:bg-black"
                                            : "after:bg-white"
                                    } ${
                                        router.pathname === nav.link &&
                                        "after:!scale-x-100"
                                    }`}
                                    href={nav.link}
                                    aria-current="page"
                                >
                                    {nav.name}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
                <Button
                    darkBtn={routeChecker}
                    className={`lg:mr-0 mr-12 ${
                        routeChecker ? "!border-0" : "!border-1 border-white"
                    }`}
                >
                    Book a meeting
                </Button>
                <button
                    className="lg:hidden block absolute right-0 z-10 w-fit"
                    onClick={() => {
                        setMobileSideBarOpened(true);
                    }}
                >
                    <div
                        className={`mobile-navigation-bar ${
                            routeChecker ? "bg-black" : "bg-white"
                        }`}
                    ></div>
                    <div
                        className={`mobile-navigation-bar ${
                            routeChecker ? "bg-black" : "bg-white"
                        }`}
                    ></div>
                    <div
                        className={`mobile-navigation-bar ${
                            routeChecker ? "bg-black" : "bg-white"
                        }`}
                    ></div>
                </button>
                <SideNavbar
                    navigation={navigation}
                    mobileSideBarOpened={mobileSideBarOpened}
                    setMobileSideBarOpened={setMobileSideBarOpened}
                />
            </nav>
        </header>
    );
};

export default Navbar;
