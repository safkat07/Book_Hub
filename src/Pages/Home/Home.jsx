import { useEffect } from "react";
import Banner from "../Banner/Banner";
import BookOfTheDaySection from "../ExtraSections/BookOfTheDaySection";
import FeatureSection from "../ExtraSections/FeatureSection";
import { useState } from "react";
import BookCollection from "../../Components/BookCollection/BookCollection";
import UseAxiosBaseURL from "../../Hooks/UseAxiosBaseURL/UseAxiosBaseURL";
import { useQuery } from "react-query";
import Loader from "../../Components/Useable/Loader/Loader";
import HeadingText from "../../Components/Useable/HeadingText/HeadingText";
import SeeByCategory from "../ExtraSections/SeeByCategory/SeeByCategory";

const Home = () => {
  const baseURL = UseAxiosBaseURL()
  const { isPending, status, isError, error, data: bookCollection } = useQuery({
    queryKey: ['BookCollection'],
    queryFn: async () => {
      const res = await baseURL.get('api/v1/bookCollection')
      return res.data
    }
  })
  if (isPending) {
    return <div className="flex justify-center items-center">
      <Loader></Loader>
    </div>
  }
  if (isError) {
    return <p className="text-5xl font-semibold font-poppins text-center text-red-700">{error.message}</p>
  }

  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>


      <p className="lg:text-6xl md:text-4xl text-3xl font-bold bg-gradient-to-tr from-indigo-400 via-red-300 to-sky-400 text-transparent bg-clip-text xl:mt-36 lg:my-24 md:mt-40 md:mb-10  mt-24 mb-10 text-center">
        Book Categories
      </p>

      {
        <div id="categories" className="flex flex-wrap   justify-center items-center gap-x-20 ">
          {bookCollection?.map((book) => (
            <BookCollection key={book._id} book={book}></BookCollection>
          ))}
        </div>
      }
      <FeatureSection></FeatureSection>
      <SeeByCategory></SeeByCategory>
      {/* <BookOfTheDaySection></BookOfTheDaySection> */}
    </div>
  );
};

export default Home;
