const Button = ({ children, darkBtn = false, className }) => {
    return (
        <button
            className={`w-fit uppercase border  p-4 flex items-center gap-2  ${
                darkBtn
                    ? "border-white hover:bg-white hover:text-[#212121] bg-black text-white"
                    : "border-black hover:bg-black hover:text-white"
            }  duration-300 mini-title ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
