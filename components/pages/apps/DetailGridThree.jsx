import Button from "@/components/common/Button";
import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";

const DetailGridThree = ({ title, children }) => {
    return (
        <section className="section-margin grid lg:grid-cols-2 bg-[#111111]">
            <div className="relative w-full lg:aspect-square aspect-[5/3]">
                <ExtendedImage
                    src="/app development/section-feature-bg.jpg"
                    alt="Image"
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex lg:justify-center items-center">
                <div className="w-[80%] space-y-8 my-10 horizontal-section-padding ">
                    <TextOne className="italic font-semibold">
                        Transparent
                    </TextOne>
                    <TextThree className="font-semibold text-white">
                        {title}
                    </TextThree>
                    {children}
                    <Button darkBtn={true}>Get templates</Button>
                </div>
            </div>
        </section>
    );
};

export default DetailGridThree;
