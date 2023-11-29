import TextOne from "@/components/common/TextOne";
import AppGridDetails from "./AppGridDetails";

const Information = ({
    order,
    title,
    subTitle,
    children,
    description,
    gridDetails,
}) => {
    return (
        <section className="">
            <div className="lg:max-w-[1100px] max-w-[95%] mx-auto ">
                <div className="bg-white mt-[-130px] p-8 grid">
                    <h2
                        className={`md:text-8xl text-4xl bold thin-underline leading-relaxed ${
                            order && "order-last"
                        }`}
                    >
                        {title}
                    </h2>
                    <p className="mt-6 text-3xl font-semibold ">{subTitle}</p>
                </div>
                <div className="h-40 w-[1px] bg-black mx-auto my-8"></div>
                <div className="max-w-[550px] space-y-6">
                    {children}
                    <TextOne>{description}</TextOne>
                </div>
                <AppGridDetails gridDetails={gridDetails} />
            </div>
        </section>
    );
};

export default Information;
