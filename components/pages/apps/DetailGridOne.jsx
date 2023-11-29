import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextTwo from "@/components/common/TextTwo";
import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

const DetailGridOne = ({ imgUrl, title, description }) => {
    return (
        <section className="grid lg:grid-cols-2 section-margin gap-16">
            <div className="relative w-full lg:aspect-square max-h-[70vh] aspect-[5/3]">
                <ExtendedImage
                    src={imgUrl}
                    alt="Image"
                    fill
                    className="object-cover "
                />
            </div>
            <div className="flex justify-center items-center">
                <div className="max-w-[400px] space-y-8">
                    <div className="md:flex gap-6 items-center grid place-items-center">
                        <div className="bg-black w-fit p-4 rounded-full">
                            <DevicePhoneMobileIcon className="w-7 text-white " />
                        </div>
                        <TextOne className="font-semibold text-[15px]">
                            Your Shop now on Hand
                        </TextOne>
                    </div>
                    <TextTwo className="font-semibold leading-relaxed">
                        {title}
                    </TextTwo>
                    <TextOne className="leading-relaxed">{description}</TextOne>
                </div>
            </div>
        </section>
    );
};

export default DetailGridOne;
