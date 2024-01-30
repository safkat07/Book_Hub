import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const FeatureSectionCard = ({ bookName, _id, description, rating, photo }) => {
    return (
        <section className='mt-28 px-10'>
            <div className='h-[22rem] w-80 rounded-2xl cursor-pointer group transition-all duration-500 hover:bg-indigo-300 relative shadow-2xl '>
                <div className='absolute -top-16 right-0 left-0'>
                    <img className=' h-60 bg-transparent mx-auto' src={photo} alt="" />
                </div>
                <div className='absolute top-1/2 right-0 left-0 flex justify-center items-center scale-110'>
                    <ReactStars
                        count={rating}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <div className='absolute top-[60%] px-2  right-0 left-0 flex justify-center items-center '>
                    <p className='font-poppins line-clamp-1 font-semibold text-xl'>{bookName}</p>
                </div>
                <div className='absolute xl:w-[90%] px-2 w-full mx-auto top-[68%] right-0 left-0 flex justify-center items-center '>
                    <p className='line-clamp-2'>{description}</p>
                </div>
                <div className='absolute  mx-auto top-[87%] right-0 left-0 flex justify-center items-center '>
                    <Link to={`/singlebooks/${_id}`}>
                        <button className='bg-indigo-300 group-hover:bg-white transition-all duration-500 group-hover:text-black font-poppins text-white px-3 rounded-full hover:scale-105 py-1'>
                            Details
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeatureSectionCard