const TextOne = ({ children, className }) => {
    return (
        <p
            className={` text-[#888888] md:text-lg text-base leading-relaxed ${className}`}
        >
            {children}
        </p>
    );
};

export default TextOne;
