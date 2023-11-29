import TextOne from "../TextOne";
import TextThree from "../TextThree";
import FaqSection from "./FaqSection";

const Faq = ({ titleOne, titleTwo, children }) => {
    return (
        <section className="section-padding horizontal-section-padding">
            <div className="fluid-container  text-center space-y-6">
                <TextThree className="font-semibold">
                    {titleOne} <span className="underline">{titleTwo}</span>
                </TextThree>
                <TextOne>{children}</TextOne>
                <FaqSection />
            </div>
        </section>
    );
};

export default Faq;
