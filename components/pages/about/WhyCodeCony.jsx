import { reasons } from "@/utils/constant";
import Image from "next/image";
import { useState } from "react";
import ReasonTab from "./ReasonTab";

const WhyCodeCony = () => {
    const [selectedTab, setSelectedTab] = useState("0");
    const handleVisibility = (tabId) => {
        if (tabId == selectedTab) {
            setSelectedTab();
        } else {
            setSelectedTab(tabId);
        }
    };
    return (
        <section className="bg-[#111111] ">
            <div className="horizontal-section-padding fluid-container grid lg:grid-cols-2 lg:gap-20">
                <div className="lg:w-full w-[80%] mx-auto aspect-square relative section-margin horizontal-section-padding">
                    <Image
                        src="/about-main-image.jpg"
                        alt="Image"
                        fill
                        className="object-cover"
                    />
                    <Image
                        src="/codecony-circle.png"
                        alt="Image"
                        width={150}
                        height={150}
                        className="absolute z-50 -left-20 top-10 rotating"
                    />
                </div>
                <div className="lg:w-full md:w-[80%] mx-auto flex flex-col justify-center text-slate-700 text-2xl lg:mb-0 mb-20">
                    <h2 className="gradientBgColor md:text-5xl text-4xl font-semibold leading-normal mb-8">
                        Why you will select <br />
                        CODECONY
                    </h2>
                    <div className="space-y-6">
                        {reasons?.map((data, idx) => (
                            <ReasonTab
                                key={idx}
                                id={idx}
                                data={data}
                                handleVisibility={handleVisibility}
                                selectedTab={selectedTab}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyCodeCony;
