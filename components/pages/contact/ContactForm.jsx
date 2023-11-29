import Button from "@/components/common/Button";
import TextTwo from "@/components/common/TextTwo";

const ContactForm = () => {
    return (
        <section className="  h-full">
            <div className="md:pt-60 pt-32 fluid-container horizontal-section-padding">
                <TextTwo className="font-semibold">Work inquiries</TextTwo>
                <form className="!grid lg:grid-cols-3 md:grid-cols-2 my-14 gap-8">
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500"
                    />
                    <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500"
                    />
                    <input
                        type="tel"
                        name=""
                        id=""
                        placeholder="Phone Number"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500"
                    />
                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Subject"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500"
                    />

                    <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Company"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500"
                    />
                    <div className="w-full">
                        <select
                            name="numberOfImage"
                            className="cursor-pointer py-4 border-b-2 w-full focus:border-b-black outline-none duration-500s"
                            defaultValue={"default"}
                            onChange={() => {}}
                        >
                            <option value="default" disabled>
                                Your Budget
                            </option>
                            <option value="less than 500">500</option>
                            <option value="500 - 1,000">500 - 1,000</option>
                            <option value="1,000 - 10,000">
                                1,000 - 10,000
                            </option>
                            <option value="10,000 - 50,000">
                                10,000 - 50,000
                            </option>
                        </select>
                    </div>
                    <textarea
                        type="text"
                        name=""
                        id=""
                        placeholder="Your Message"
                        rows="4"
                        className="py-3 border-b-2  focus:border-b-black outline-none duration-500 lg:col-span-3 md:col-span-2"
                    ></textarea>
                    <div className="lg:col-span-3 md:col-span-2 md:flex justify-between items-center md:space-y-0 space-y-4">
                        <p className="italic text-[#888888]">
                            *Your email can not be published. We promise
                        </p>
                        <Button
                            darkBtn={true}
                            className="md:float-none float-right"
                        >
                            send message
                        </Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
