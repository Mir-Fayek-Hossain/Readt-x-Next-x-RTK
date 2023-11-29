import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";

const Stacks = () => {
    return (
        <section className="section-margin text-center grid place-items-center gap-y-10">
            <p className="mini-title">tech stack</p>
            <TextThree className="font-semibold ">
                Using Modern tools <br /> with Cutting-Edge Technology
            </TextThree>
            <div className="grid md:grid-cols-3 fluid-container gap-11 mt-6">
                <div className="grid place-items-center gap-y-6 md:w-full w-[90%] mx-auto aspect-[4/2]">
                    <div className="relative w-[150px] h-[100px]">
                        <ExtendedImage
                            src="/flutter-logo.png"
                            alt="flutter"
                            fill className="object-contain"
                        />
                    </div>
                    <TextOne className="!text-black font-semibold">
                        Flutter
                    </TextOne>
                    <TextOne>
                        For mobile Application Development we mostly use Flutter
                        cause its support cross platform.
                    </TextOne>
                </div>

                <div className="grid place-items-center gap-y-6 md:w-full w-[90%] mx-auto aspect-[4/2]">
                    <div className="relative w-[150px] h-[100px]">
                        <ExtendedImage src="/next-logo.png" alt="next" fill className="object-contain" />
                    </div>
                    <TextOne className="!text-black font-semibold">
                        NextJS
                    </TextOne>
                    <TextOne>
                        For mobile Application Development we mostly use Flutter
                        cause its support cross platform.
                    </TextOne>
                </div>
                <div className="grid place-items-center gap-y-6 md:w-full w-[90%] mx-auto aspect-[4/2]">
                    <div className="relative w-[150px] h-[100px]">
                        <ExtendedImage
                            src="/tailwind-logo.png"
                            alt="tailwind"
                            fill className="object-contain"
                        />
                    </div>
                    <TextOne className="!text-black font-semibold">
                        Tailwind CSS
                    </TextOne>
                    <TextOne>
                        For mobile Application Development we mostly use Flutter
                        cause its support cross platform.
                    </TextOne>
                </div>
            </div>
        </section>
    );
};

export default Stacks;
