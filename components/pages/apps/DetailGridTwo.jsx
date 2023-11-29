import Button from "@/components/common/Button";
import ExtendedImage from "@/components/common/ExtendedImage";
import TextThree from "@/components/common/TextThree";

const DetailGridTwo = ({ title, children }) => {
    return (
        <section className="section-padding fluid-container grid lg:grid-cols-2 lg:gap-y-0 gap-16">
            <div className="lg:order-none order-last">
                <div className="lg:w-[410px] w-full space-y-8 px-5">
                    <TextThree className="!leading-[1.3] font-semibold">
                        {title}
                    </TextThree>
                    {children}
                    <Button darkBtn={true}>get your app</Button>
                </div>
            </div>
            <div className="relative lg:w-full w-[60%] aspect-[9/14] mx-auto">
                <ExtendedImage
                    src="/app development/Blue-Phone.png"
                    alt="Image"
                    fill
                    className="object-contain"
                />
            </div>
        </section>
    );
};

export default DetailGridTwo;
