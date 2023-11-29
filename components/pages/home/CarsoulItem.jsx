import ExtendedImage from "@/components/common/ExtendedImage";
import TextTwo from "@/components/common/TextTwo";

const CarsoulItem = ({ data, activeIndex, idx }) => {
    return (
        <div
            className={`cursoul-item  ${
                activeIndex < idx && "opacity-50 scale-[.7]"
            }`}
            id={`slider-${idx}`}
            key={idx}
        >
            <div className="space-y-6 py-10">
                <p className="2xl:text-8xl text-5xl">0{idx + 1}.</p>
                <TextTwo className="md:leading-relaxed">
                    {data.description}
                </TextTwo>
            </div>
            <div className="relative 2xl:w-[20vw] lg:w-[25vw] 2xl:aspect-[5/6] aspect-[6/7]">
                <ExtendedImage
                    src={data.img}
                    fill
                    alt="Slider"
                    className="object-contain"
                    draggable={false}
                />
            </div>
        </div>
    );
};

export default CarsoulItem;
