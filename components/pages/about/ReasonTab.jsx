import TextOne from "../../common/TextOne";
import Slider from "../web/frontend/Slider";

const ReasonTab = ({ data, selectedTab, handleVisibility, id }) => {
    const { title, description } = data;
    return (
        <div
            onClick={() => {
                handleVisibility(id);
            }}
        >
            <p className="underline text-white opacity-30 hover:opacity-100 duration-300 w-fit pb-1 cursor-pointer">
                {title}
            </p>
            <Slider
                sliderVisibility={selectedTab == id}
                slideDirection="vertical"
            >
                <TextOne className="font-normal text-white my-6">
                    {description}.
                </TextOne>
            </Slider>
        </div>
    );
};

export default ReasonTab;
