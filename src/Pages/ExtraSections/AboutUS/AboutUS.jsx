import HeadingText from '../../../Components/Useable/HeadingText/HeadingText';
import img from '../../../assets/Aboutus/cartoon.webp'
const AboutUS = () => {
    return (
        <div className='max-w-5xl m-auto'>
            <HeadingText headText={"What We Do?"}></HeadingText>
            <div className='flex lg:flex-row flex-col px-5 justify-center lg:gap-y-0 gap-y-5 xl:gap-x-10 mx-auto items-center'>
                <div className='xl:w-1/2  lg:w-3/5'>
                    <img className='rounded-bl-[3rem] mx-auto transition-all duration-200 rounded-tr-[3rem] hover:scale-105 rounded-2xl' src={img} alt="" />
                </div>
                <div className='lg:flex-1 lg:px-0 px-7 w-full'>
                    <p className='md:text-2xl text-xl w-full font-semibold font-poppins text-center md:text-left '>
                        Read Book, AnyWhere, AnyTime
                    </p>
                    <p className='md:text-xl md:text-left  text-center font-montserrat font-medium my-3'>
                        Read Books Anywhere, Anytime: Access Your Favorites on the Go, Anywhere in the World, Anytime You Want, for Endless Literary Adventures
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;