import TextTwo from "@/components/common/TextTwo";
import Image from "next/image";
import Link from "next/link";

const BlogGrid = () => {
    return (
        <div className="fluid-container section-margin horizontal-section-padding">
            <div className="text-center">
                <p className="mini-title">Latest Updated</p>
                <TextTwo className="text-4xl font-medium my-8">
                    Interesting articles updated daily
                </TextTwo>
                <div className="grid lg:grid-cols-7 md:grid-cols-2 items-center py-10 text-left md:gap-10 gap-16">
                    <Link href="#" className="lg:col-span-2 grid gap-y-6 group">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/blog-1.jpg"
                                alt="Image"
                                fill
                                className="object-cover group-hover:scale-110 duration-1000"
                            />
                        </div>
                        <h2 className="text-xl font-semibold hover:text-[#E67527] duration-300">
                            How to Connect Namecheap Domain to Shopify
                            [Everything You Need to Know]
                        </h2>
                        <p className="text-sm italic">
                            March 27, 2023 by{" "}
                            <span className="font-semibold">Zaryab Hasin</span>
                        </p>
                    </Link>
                    <Link href="#" className="lg:col-span-3 grid gap-y-6 group">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/blog-2.jpg"
                                alt="Image"
                                fill
                                className="object-cover group-hover:scale-110 duration-1000"
                            />
                        </div>
                        <h2 className="text-xl font-semibold hover:text-[#E67527] duration-300">
                            What Does SSL Pending Mean on Shopify and How to Fix
                            it? [The Complete Guide]
                        </h2>
                        <p className="text-sm italic">
                            March 27, 2023 by{" "}
                            <span className="font-semibold">Zaryab Hasin</span>
                        </p>
                    </Link>
                    <Link href="#" className="lg:col-span-2 grid gap-y-6 group">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <Image
                                src="/blog-3.jpg"
                                alt="Image"
                                fill
                                className="object-cover group-hover:scale-110 duration-1000"
                            />
                        </div>
                        <h2 className="text-xl font-semibold hover:text-[#E67527] duration-300">
                            500 Internal Server Error Shopify [How To Fix It]
                        </h2>
                        <p className="text-sm italic">
                            March 27, 2023 by{" "}
                            <span className="font-semibold">Zaryab Hasin</span>
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogGrid;
