const CarsoulPagination = ({ sliderLength, activeIndex, handleNext }) => {
    return (
        <div className="2xl:w-[50%] w-[80%] float-right mr-[10%] space-y-4 mt-8 ">
            <div className="h-1 w-full bg-slate-200">
                <div
                    className="h-full w-[30%] bg-black duration-300"
                    style={{
                        width: `${
                            (100 / sliderLength + 1) * (activeIndex + 1)
                        }%`,
                    }}
                ></div>
            </div>
            <div className="flex justify-between w-full uppercase">
                {activeIndex + 1} of {sliderLength}
                <button
                    onClick={handleNext}
                    style={{
                        backgroundImage: `url(${"/right-arrow.png"})`,
                    }}
                    className="p-1 rounded-full shado hover:bg-white bg-contain bg-no-repeat w-7 aspect-square"
                ></button>
            </div>
        </div>
    );
};

export default CarsoulPagination;
