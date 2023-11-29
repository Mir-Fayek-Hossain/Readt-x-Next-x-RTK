import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";
import ExtendedImage from "../../common/ExtendedImage";

const HappyClients = () => {
    return (
        <section className="section-margin">
            <div className="max-w-[550px] mx-auto text-center space-y-8">
                <TextThree className="font-semibold">Happy clients</TextThree>
                <TextOne>
                    Check out some of our satisfied clients. Already we have
                    done some Fantastic projects with them.
                </TextOne>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 fluid-container section-margin-t-md lg:gap-y-10">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((val) => (
                    <div key={val} className="relative w-full aspect-video">
                        <ExtendedImage
                            className="opacity-30 hover:opacity-100 object-contain duration-300 max-h-[70px] max-w-[100px] mx-auto"
                            src={`/dark-client-logo-${val}.png`}
                            alt="client"
                            fill
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HappyClients;
