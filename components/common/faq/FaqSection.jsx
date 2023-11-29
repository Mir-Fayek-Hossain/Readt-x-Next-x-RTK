import { faqData } from "@/utils/constant";
import { useState } from "react";
import TextOne from "../TextOne";
import FaqTab from "./FaqTab";

const FaqSection = () => {
    const [selectedTab, setSelectedTab] = useState();
    const handleVisibility = (tabId) => {
        if (tabId == selectedTab) {
            setSelectedTab();
        } else {
            setSelectedTab(tabId);
        }
    };
    return (
        <>
            <div className="border-2 border-slate-200 !mt-16">
                {faqData?.map((data, idx) => (
                    <FaqTab
                        key={idx}
                        id={idx}
                        data={data}
                        handleVisibility={handleVisibility}
                        selectedTab={selectedTab}
                    />
                ))}
            </div>
            <TextOne className="mt-10">
                Couldn&apos;t find your answer?{" "}
                <span className="text-black hover-underline-animation">Ask a question</span>
            </TextOne>
        </>
    );
};

export default FaqSection;
