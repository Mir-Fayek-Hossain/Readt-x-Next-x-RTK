import TextFour from "@/components/common/TextFour";
import TextOne from "@/components/common/TextOne";
import TextThree from "@/components/common/TextThree";
import Link from "next/link";

const ContactDetails = () => {
    return (
        <section className="section-margin">
            <div className="fluid-container horizontal-section-padding">
                <TextFour className="font-semibold">
                    Reach out to us,
                    <br /> Experience the Difference.
                </TextFour>
                <div className="section-margin-t grid lg:grid-cols-3 lg:gap-32">
                    <div className="mt-10 lg:order-none order-last">
                        <div className="md:space-y-10 space-y-4">
                            <TextThree>Get a Project Consultation</TextThree>
                            <TextOne className=" font-normal">
                                Contact us today to schedule a consultation and
                                discuss your ideas. Besides you send me your
                                queries or project description to this mail.
                            </TextOne>
                        </div>
                    </div>
                    <div className="lg:col-span-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.4734995584618!2d90.35587677599453!3d23.766147488170326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e332119abd5519d%3A0x45b7ae8d6aa10b27!2sCodecony!5e0!3m2!1sen!2sbd!4v1682681914448!5m2!1sen!2sbd"
                            className="w-full lg:aspect-[4/2] md:aspect-[10/4] aspect-square"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="grid md:grid-cols-3 gap-10 mt-3">
                            <div>
                                <h2 className="font-bold 2xl:my-8 my-4">
                                    Address
                                </h2>
                                <ul className="text-[#888888]">
                                    <li>
                                        Floor-7/B, Mahfuza Tower, Ring Road,
                                        Dhaka-1207
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold 2xl:my-8 my-4">
                                    Information
                                </h2>
                                <ul className="text-[#888888] 2xl:space-y-3 space-y-2 grid">
                                    <li className="hover-underline-animation after:!bg-slate-300 w-fit">
                                        <Link
                                            href={`tel:${process?.env?.NEXT_PUBLIC_PHONE_NUMBER}`}
                                        >
                                            +880 160 1787761
                                        </Link>
                                    </li>
                                    <li className="hover-underline-animation after:!bg-slate-300 w-fit">
                                        <Link
                                            href={`mailto:${process?.env?.NEXT_PUBLIC_EMAIL}`}
                                        >
                                            hello@codecony.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="font-bold 2xl:my-8 my-4">
                                    Social
                                </h2>
                                <ul className="text-[#888888] 2xl:space-y-3 space-y-2">
                                    <li>Facebook</li>
                                    <li>Twiter</li>
                                    <li>Instagram</li>
                                    <li>Dribble</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactDetails;
