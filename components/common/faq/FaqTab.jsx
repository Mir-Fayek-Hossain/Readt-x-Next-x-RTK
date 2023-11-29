import { PlusIcon } from "@heroicons/react/20/solid";
import Slider from "../../pages/web/frontend/Slider";
import TextOne from "../TextOne";

const FaqTab = ({ data, selectedTab, handleVisibility, id }) => {
    const { question, answer } = data;
    return (
        <div className="border-b-2 border-b-slate-200 text-left">
            <div
                className="  flex justify-between items-center cursor-pointer p-4"
                onClick={() => {
                    handleVisibility(id);
                }}
            >
                <TextOne className="max-w-[90%] font-semibold !text-black">
                    {question}
                </TextOne>
                <div
                    className={`${
                        selectedTab == id && "rotate-[135deg]"
                    } w-6 transition-all duration-500`}
                >
                    <PlusIcon className="w-6 text-gray-600" />
                </div>
            </div>
            <Slider
                sliderVisibility={selectedTab == id}
                slideDirection="vertical"
            >
                <TextOne className="pb-4 px-4">{answer}.</TextOne>
            </Slider>
        </div>
    );
};

export default FaqTab;
