import TextThree from "@/components/common/TextThree";

const AboutDetail = () => {
    return (
        <section className="grid place-items-center section-margin-t 2xl:gap-8 gap-5 text-center">
            <TextThree className="md:text-5xl text-3xl font-semibold">
                About CODECONY
            </TextThree>
            <p className="font-semibold italic text-xl">
                Unleash creativity with the powerful tools of revolution
            </p>
            <p className="md:text-lg text-[#888888] max-w-[550px] px-3">
                At Codecony, we pride ourselves on being experts in mobile
                application and website development. Our team is dedicated to
                helping you unleash your creativity and bring your idea to
                business.
            </p>
        </section>
    );
};

export default AboutDetail;
