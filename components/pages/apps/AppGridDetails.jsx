import ExtendedImage from "@/components/common/ExtendedImage";
import TextOne from "@/components/common/TextOne";

const AppGridDetails = ({gridDetails}) => {
    return (
        <div className="grid md:grid-cols-3 gap-24 mt-10">
            {gridDetails?.map((data, idx) => (
                <div key={idx} className="space-y-6 group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <ExtendedImage
                            src={data?.imgUrl}
                            alt="Image"
                            fill
                            className="object-cover group-hover:scale-110 duration-[.8s] ease-in"
                        />
                    </div>
                    <h2 className="text-xl font-semibold">{data?.title}</h2>
                    <TextOne>{data?.description}</TextOne>
                </div>
            ))}
        </div>
    );
};

export default AppGridDetails;
