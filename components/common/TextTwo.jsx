const TextTwo = ({ children, className }) => {
    return <p className={`${className} 2xl:text-4xl md:text-3xl text-2xl`}>{children}</p>;
};

export default TextTwo;
