const Capabilities = () => {
    return (
        <div className="fluid-container grid lg:grid-cols-4 md:grid-cols-2 md:gap-10 md:my-8  ">
            {[1, 2, 3, 4].map((idx) => (
                <div key={idx} className="group md:w-full w-[80%] mx-auto">
                    <div className="grid place-items-center w-full aspect-[4/3] ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth=".8"
                            stroke="currentColor"
                            className="w-20 h-20"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                            />
                        </svg>
                        <p className="text-xl font-semibold">Creative</p>
                    </div>
                    <div className="w-full h-[2px] bg-slate-200 relative flex justify-center">
                        <div className="absolute w-0 h-full bg-black group-hover:w-full duration-500"></div>
                    </div>
                    <p className="text-base text-[#888888] text-center">
                        Stay creative with Codecony and you can choose the
                        collection of pre-ready template.
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Capabilities;
