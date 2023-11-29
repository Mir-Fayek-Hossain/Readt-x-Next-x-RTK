import ReachUs from "@/components/common/ReachUs";
import TextOne from "@/components/common/TextOne";
import TextTwo from "@/components/common/TextTwo";

const FrontendDetails = () => {
    return (
        <section className="section-margin space-y-32">
            <div className="fluid-container horizontal-section-padding">
                <div className="max-w-[550px] space-y-6">
                    <p className="mini-title">About us</p>
                    <TextTwo className="font-semibold">
                        The most exquisite Frontend Development Service for your
                        next Business
                    </TextTwo>
                    <TextOne>
                        Here at Codecony, we know a lot more about this industry
                        than average company. Our specialists have over 5
                        year&apos;s experience in the field.
                    </TextOne>
                </div>
            </div>
        </section>
    );
};

export default FrontendDetails;
