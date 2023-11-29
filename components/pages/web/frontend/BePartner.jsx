import Button from "@/components/common/Button";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";

const BePartner = () => {
    return (
        <section className="section-margin-t">
            <div
                className="bg-cover bg-center w-full"
                style={{
                    backgroundImage: "url('/frontend/office-footer.png')",
                }}
            >
                <div className="fluid-container horizontal-section-padding flex justify-end">
                    <div className="w-2/4 section-margin space-y-8">
                        <TextThree className="leading-relaxed">
                            Partner with us to level up your brand
                        </TextThree>
                        <TextOne className="text-slate-500">
                            We&apos;re open to any cooperating opportunities.
                        </TextOne>
                        <Button darkBtn={true}>Contact Us</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BePartner;
