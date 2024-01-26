

const HeadingText = ({ headText }) => {
    return (
        <p className="lg:text-7xl md:text-4xl text-3xl font-bold bg-gradient-to-tr from-indigo-400 via-red-300 to-sky-400 text-transparent bg-clip-text my-7 text-center">
            {headText}
        </p>
    );
};

export default HeadingText
