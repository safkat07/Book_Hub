import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';
const FeatureSectionCard = ({ bookName, description, rating, photo }) => {
    return (
        <section className='mt-28'>
            <div className='h-80 w-72 rounded-2xl cursor-pointer transition-all duration-500 hover:bg-indigo-300 relative shadow-2xl '>
                <div className='absolute -top-16 right-0 left-0'>
                    <img className=' h-60 mx-auto' src={photo} alt="" />
                </div>
                <div className='absolute top-1/2 right-0 left-0 flex justify-center items-center scale-110'>
                    <ReactStars
                        count={rating}
                        value={rating}
                        size={24}
                        activeColor="#ffd700"
                    />
                </div>
                <div className='absolute top-[60%] right-0 left-0 flex justify-center items-center '>
                    <p className='font-poppins font-semibold text-xl'>{bookName}</p>
                </div>
                <div className='absolute w-[90%] mx-auto top-[68%] right-0 left-0 flex justify-center items-center '>
                    <p className='line-clamp-2'>{description}</p>
                </div>
                <div className='absolute  mx-auto top-[87%] right-0 left-0 flex justify-center items-center '>
                    <Link>
                        <button className='bg-indigo-300 hover:bg-white transition-all duration-500 hover:text-black font-poppins text-white px-3 rounded-full hover:scale-105 py-1'>
                            Details
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default FeatureSectionCard;