import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ShowBooks from "../ShowBooks/ShowBooks";

const CategoryBooks = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const booksCollection = useLoaderData();
  const { categoryName } = booksCollection;

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/addedBooks")
      .then((res) => res.json())
      .then((data) => {
        const filterBooks = data.filter(
          (allbook) => allbook.bookCategory == categoryName
        );
        setBook(filterBooks);
        setLoading(false); // Set loading to false when data is fetched
      });
  }, [categoryName]); 

  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold text-orange-500 underline text-center">
        Collection of : {categoryName}
      </h2>

      {loading ? ( // Conditionally render the spinner while loading is true
        <div className="flex justify-center  mt-52 ">
          <span className="loading flex loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2">
          {book.map((books) => (
            <ShowBooks books={books} key={books.id}></ShowBooks>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryBooks;
