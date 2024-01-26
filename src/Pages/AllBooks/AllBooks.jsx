import React, { useEffect, useState } from "react";
import ShowAllBooks from "./ShowAllBooks";
import HeadingText from "../../Components/Useable/HeadingText/HeadingText";
import Loader from "../../Components/Useable/Loader/Loader";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const url = "http://localhost:5000/api/v1/addedBooks";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
        setLoading(false);
      });
  }, []);

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredBooks = allBooks.filter((book) => {
    // Apply filter based on selected option
    if (selectedFilter === "available" && book.quantity <= 0) {
      return false;
    }
    if (selectedFilter === "outOfStock" && book.quantity > 0) {
      return false;
    }

    // Apply search filter
    if (searchQuery && !book.bookName.toLowerCase().includes(searchQuery)) {
      return false;
    }

    return true;
  });

  return (
    <div>
      <HeadingText headText={"All Books"}></HeadingText>
      <div className="flex justify-center my-10 divide-x-4">
        <div className="w-[15vw] h-screen px-3">
          <div className="my-4">
            {/* Search option */}
            <p className="ml-2 font-poppins font-medium mb-2">Search Books By Name</p>
            <input
              onChange={handleSearchChange}
              name="searchText"
              type="text"
              placeholder="Search Books"
              className="input focus:outline-none input-bordered input-md w-full max-w-xs"
            />
          </div>
          <div>
            <p className="ml-2 font-poppins font-medium mb-2">Filter By Available Books</p>
            <select
              id="filterDropdown"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="select focus:outline-none font-poppins font-medium select-bordered w-full max-w-xs"
            >
              <option value="all">All Books</option>
              <option value="available">Available Books</option>
              <option value="outOfStock">Out of Stock Books</option>
            </select>
          </div>
        </div>

        <div className="w-full">
          {loading ? (
            <div className="flex justify-center ">
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
    </div>
  );
};

export default AllBooks;
