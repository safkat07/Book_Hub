import { useEffect, useState } from "react";
import ShowAllBooks from "./ShowAllBooks";
import HeadingText from "../../Components/Useable/HeadingText/HeadingText";
import Loader from "../../Components/Useable/Loader/Loader";

const AllBooks = () => {
  const [allBook, setAllBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");


  const url = "http://localhost:5000/api/v1/addedBooks"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllBook(data);
        setLoading(false);
      });
  }, []);

  // const toggleFilter = () => {
  //   setFilterActive(!filterActive);
  // };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredBooks = filterBooks(selectedFilter);

  function filterBooks(filter) {
    if (filter === "all") {
      return allBook;
    } else if (filter === "available") {
      return allBook.filter((book) => book.quantity > 0);
    } else if (filter === "outOfStock") {
      return allBook.filter((book) => book.quantity == 0);
    }
  }

  return (
    <div>
      <HeadingText headText={"All Books"}></HeadingText>
      <div>
        {/* <div>
          <label htmlFor="filterDropdown">Filter by:</label>
          <select
            id="filterDropdown"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="all">All Books</option>
            <option value="available">Available Books</option>
            <option value="outOfStock">Out of Stock Books</option>
          </select>
        </div> */}
        {loading ? (
          <div className="flex justify-center mt-52">
            <Loader></Loader>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-10">
            {filteredBooks.map((book) => (
              <ShowAllBooks book={book} key={book.id}></ShowAllBooks>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBooks;
