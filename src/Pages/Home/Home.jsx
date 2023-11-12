import { useEffect } from "react";
import Banner from "../Banner/Banner";
import BookOfTheDaySection from "../ExtraSections/BookOfTheDaySection";
import FeatureSection from "../ExtraSections/FeatureSection";
import { useState } from "react";
import BookCollection from "../../Components/BookCollection/BookCollection";

const Home = () => {
  const [bookCollection, setBookCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/bookCollection")
      .then((res) => res.json())
      .then((data) => {
        setBookCollection(data);
      });
  }, []);
  console.log(bookCollection);
  return (
    <div className="">
      <Banner></Banner>

      <h2 className="text-5xl font-bold text-orange-500 underline  text-center">
        Book Categories
      </h2>

      <div className="my-16 gap-5 grid grid-cols-1 lg:grid-cols-2">
        {bookCollection.map((book) => (
          <BookCollection key={book.id} book={book}></BookCollection>
        ))}
      </div>
      <FeatureSection></FeatureSection>
      <BookOfTheDaySection></BookOfTheDaySection>
    </div>
  );
};

export default Home;
