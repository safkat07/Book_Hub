import  { useEffect, useState } from "react";
import ShowAllBooks from "./ShowAllBooks";

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
      <h2 className="md:text-5xl text-3xl font-bold text-orange-500 underline text-center">
        All Book Collection
      </h2>
      <div>
        {/* <button onClick={toggleFilter}>
          {filterActive ? "Show All Books" : "Show Available Books"}
        </button> */}
        <div>
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
        </div>
        {loading ? (
          <div className="flex justify-center mt-52">
            <span className="loading flex loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3">
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
