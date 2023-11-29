import { useEffect, useState } from "react";
import CarsoulItem from "./CarsoulItem";
import CarsoulPagination from "./CarsoulPagination";

export default function CarsoulSlider({ slides }) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [translatePercentage, setTranslatePercentage] = useState(0);

    const prev = () =>
        setActiveIndex((activeIndex) =>
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1
        );
    const next = () => {
        setActiveIndex((activeIndex) =>
            activeIndex === slides.length - 1 ? 0 : activeIndex + 1
        );
    };
    let isDown = false;
    let startX;
    const handleMouseDown = (e) => {
        isDown = true;
        startX = e.pageX;
    };

    const handleMouseUp = (e) => {
        isDown = false;
    };
    const handleMouseMove = (e) => {
        if (!isDown) return;
        const x = e.pageX;
        if (x > startX) {
            if (x > startX + 50) {
                prev();
            }
        } else {
            if (x < startX - 50) {
                next();
            }
        }
    };
    useEffect(() => {
        const slideInterval = setInterval(next, 3000);

        if (window.innerWidth < 1024) {
            setTranslatePercentage(100);
        } else {
            setTranslatePercentage(50);
        }
        return () => clearInterval(slideInterval);
    }, []);
    return (
        <div className="select-none section-margin h-[70vh]">
            <div
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onMouseMove={handleMouseMove}
                className="overflow-x-hidden relative 2xl:w-[80%] w-[90%] ml-auto"
            >
                <div
                    className=" flex transition-transform ease-out duration-500 w-full h-full"
                    style={{
                        transform: `translateX(-${activeIndex * translatePercentage}%)`,
                    }}
                >
                    {slides.map((data, idx) => (
                        <CarsoulItem
                            data={data}
                            activeIndex={activeIndex}
                            idx={idx}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
            <CarsoulPagination
                handleNext={next}
                activeIndex={activeIndex}
                sliderLength={slides.length}
            />
        </div>
    );
}
