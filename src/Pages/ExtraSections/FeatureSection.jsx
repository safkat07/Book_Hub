import { length } from "localforage";
import HeadingText from "../../Components/Useable/HeadingText/HeadingText";
import UseAllBooks from "../../Hooks/UseAllBooks/UseAllBooks";
import img1 from "../../assets/FeatureBooks/1.jpg"
import img2 from "../../assets/FeatureBooks/2.jpg"
import img3 from "../../assets/FeatureBooks/3.jpg"
import img4 from "../../assets/FeatureBooks/4.jpg"
import Loader from "../../Components/Useable/Loader/Loader";
import FeatureSectionCard from "./FeatureSectionCard/FeatureSectionCard";
import { useState } from "react";

const FeatureSection = () => {
  const [allBooks, isLoading] = UseAllBooks()
  const [dataLength] = useState(4)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  const shuffledBooks = shuffleArray(allBooks.slice(0, dataLength));
  return (
    <div className="mt-10 mb-7">
      <p className="text-center font-poppins text-xl">Trending Books</p>
      <p className="lg:text-7xl md:text-4xl text-3xl font-bold bg-gradient-to-tr from-indigo-400 via-red-300 to-sky-400 text-transparent bg-clip-text  text-center">
        Best Books
      </p>
      <p className="text-center font-poppins my-2  w-1/2 m-auto" >Explore a curated collection of the best books, where each page promises an unforgettable journey through timeless literary treasures</p>
      <div>
        {
          isLoading ? <div className="flex my-10 justify-center items-center ">
            <Loader></Loader>
          </div>
            :
            <div className="flex flex-wrap justify-center items-center gap-x-8">
              {shuffledBooks.map(book => (
                <FeatureSectionCard {...book} key={book._id}></FeatureSectionCard>
              ))}
            </div>
        }
      </div>
    </div>
  );
};

export default FeatureSection;
