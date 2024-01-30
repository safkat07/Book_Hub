import React, { useEffect, useState } from 'react';
import HeadingText from '../../../Components/Useable/HeadingText/HeadingText';
import UseAxiosBaseURL from '../../../Hooks/UseAxiosBaseURL/UseAxiosBaseURL';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ReactStars from "react-rating-stars-component";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Loader from '../../../Components/Useable/Loader/Loader';
const UserReview = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const baseURL = UseAxiosBaseURL()
    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await baseURL.get("/api/v1/review")
                const data = response.data
                setReviews(data)

            }
            catch (error) {
                console.error(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        fetchReview()
    }, [baseURL])
    return (
        <section className='my-16'>
            <HeadingText headText={"Tenstimonials"}></HeadingText>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-4xl mx-auto">

                {
                    isLoading ? <div className="flex justify-center items-center my-10">
                        <Loader></Loader>
                    </div>
                        :
                        <div>
                            {reviews.map(review => <SwiperSlide key={review._id}>
                                <div className='flex flex-col items-center justify-center'>
                                    <ReactStars
                                        count={5}
                                        value={review.rating}
                                        size={24}
                                        activeColor="#ffd700"
                                    />
                                    <p className='font-poppins w-3/4'>{review.details}</p>
                                    <p className='text-3xl text-yellow-500 font-medium font-montserrat'>{review.name}</p>
                                </div>
                            </SwiperSlide>)}
                        </div>
                }

            </Swiper>
        </section>
    );
};

export default UserReview;