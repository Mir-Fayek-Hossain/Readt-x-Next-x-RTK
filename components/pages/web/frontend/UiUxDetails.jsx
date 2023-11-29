import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";

const UiUxDetails = () => {
    return (
        <section className="text-center section-padding bg-white">
            <div className="max-w-7xl mx-auto space-y-8">
                <TextThree>
                    Give a <span className="underline">Life</span> to your UI-UX
                </TextThree>
                <TextOne className="max-w-[500px] mx-auto">
                    We do frontend Development from your UX-UI Design. Mostly we
                    convert your Figma, XD, PSD, or Sketch to HTML Page.
                </TextOne>
                <div className="grid lg:grid-cols-2 gap-10">
                    <div className="relative lg:w-full w-[80%] mx-auto aspect-[9/11] ">
                        <ExtendedImage
                            src="/frontend/ui-ux.jpg"
                            fill
                            className="object-contain "
                        />
                    </div>
                    <div className="text-left space-y-4 max-w-[90%] horizontal-section-padding">
                        <div className="flex gap-10 min-h-[250px] overflow-hidden">
                            <div className="my-2">
                                <p className="md:text-7xl text-5xl">01</p>
                                <div className="h-full w-[1px] bg-slate-200 mx-auto m-8"></div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-3xl">UI-UX File</p>
                                <TextOne>
                                    Team process the Design according the
                                    provided ui ux. This may involve creating
                                    wireframes, prototypes, and user flows to
                                    illustrate how the product will function and
                                    be used.
                                </TextOne>
                            </div>
                        </div>
                        <div className="flex gap-10 min-h-[250px] overflow-hidden">
                            <div className="my-2">
                                <p className="md:text-7xl text-5xl">02</p>
                                <div className="h-full w-[1px] bg-slate-200 mx-auto m-8"></div>
                            </div>
                            <div className="space-y-6">
                                <p className="text-3xl">Technical Stack</p>
                                <TextOne>
                                    After Get the source file of UI-UX, We set a
                                    technical requirements from client. We have
                                    different tech stack experts like bootstrap,
                                    tailwind & Some Modern JavaScript framework.
                                </TextOne>
                            </div>
                        </div>
                        <div className="flex gap-10 min-h-[250px] overflow-hidden">
                            <div className="my-2">
                                <p className="md:text-7xl  text-5xl ">03</p>
                            </div>
                            <div className="space-y-6">
                                <p className="text-3xl">Pixel Perfect Design</p>
                                <TextOne>
                                    Output comes for multiple device like
                                    mobile, tab & Desktop. Even if have any
                                    additional requirements, we follow that.
                                </TextOne>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UiUxDetails;
