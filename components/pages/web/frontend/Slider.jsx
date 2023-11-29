const Slider = ({
    children,
    slideDirection = "vertical",
    sliderVisibility,
    className,
}) => {
    let expanded = "max-w-screen";
    let minimized = "max-w-0";
    // checking slider direction
    if (slideDirection == "vertical") {
        expanded = "max-h-screen duration-700";
        minimized = "max-h-0 duration-200";
    } else {
        expanded = "max-w-screen duration-700";
        minimized = "max-w-0 duration-200";
    }
    return (
        <div
            className={`overflow-hidden transition-all  ease-in-out  ${
                sliderVisibility ? expanded : minimized
            } ${className}`}
        >
            {children}
        </div>
    );
};

export default Slider;
