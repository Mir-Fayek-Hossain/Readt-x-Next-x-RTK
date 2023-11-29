import { ArrowUpIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function ScrollTop() {
    const [scrollToTop, setScrollToTop] = useState(false);
    useEffect(() => {
        const showScroll = () => {
            if (window.scrollY > 500) {
                setScrollToTop(true);
            } else {
                setScrollToTop(false);
            }
        };
        window.addEventListener("scroll", showScroll);
        return () => {
            window.removeEventListener("scroll", showScroll);
        };
    }, [scrollToTop]);
    return (
        <button
            className={`fixed bottom-12 cursor-pointer transition-all duration-700  w-11 h-11 z-[60] right-4 md:right-12 bg-[#000000] outline-none p-1 rounded-full group ${
                scrollToTop ? "flex" : "hidden"
            } `}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
            <div className="flex items-center justify-center w-full h-full relative overflow-hidden">
                <ArrowUpIcon className="absolute w-7 h-7  text-white group-hover:translate-y-0 translate-y-10 duration-300" />
                <ArrowUpIcon className="absolute w-7 h-7  text-white translate-y-0 group-hover:-translate-y-10 duration-300" />
            </div>
        </button>
    );
}
