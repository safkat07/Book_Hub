import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import ShowAllBooks from "./ShowAllBooks";
import HeadingText from "../../Components/Useable/HeadingText/HeadingText";
import Loader from "../../Components/Useable/Loader/Loader";

const AllBooks = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [noBooksFound, setNoBooksFound] = useState(false); // New state to track if no books are found
  const [Userrating, setUSerRating] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState("all")

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

  const handleFilterLanguage = (e) => {
    setSelectedLanguage(e.target.value)
  }
  // console.log(selectedLanguage);




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
    const intDBrating = parseInt(book.rating)

    if (Userrating !== 0 && Userrating != intDBrating) {
      return false
    }

    //apply book language filter

    if (selectedLanguage != "all" && selectedLanguage != book.bookLanguage) {
      return false
    }



    return true;
  });


  useEffect(() => {
    // Check if no books are found after filtering
    setNoBooksFound(filteredBooks.length === 0 && !loading);
  }, [filteredBooks, loading,]);

  return (
    <div>
      <HeadingText headText={"All Books"}></HeadingText>
      <div className="flex xl:flex-row flex-col justify-center md:my-10 xl:gap-y-0 gap-y-10 md:divide-x-4">
        <div className="2xl:w-[15vw] xl:w-[20vw]   w-[100vw]  xl:h-screen px-3">
          <div className="my-4">
            {/* Search option */}
            <p className="ml-2 font-poppins font-medium mb-2">Search Books By Name</p>
            <input
              onChange={handleSearchChange}
              name="searchText"
              type="text"
              placeholder="Search Books"
              className="input focus:outline-none input-bordered input-md w-full xl:max-w-xs "
            />
          </div>
          <div>
            <p className="ml-2 font-poppins font-medium mb-2">Filter By Available Books</p>
            <select
              id="filterDropdown"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="select focus:outline-none font-poppins font-medium select-bordered w-full xl:max-w-xs"
            >
              <option value="all">All Books</option>
              <option value="available">Available Books</option>
              <option value="outOfStock">Out of Stock Books</option>
            </select>
          </div>
          <div>
            <p className="ml-2 font-poppins my-4 font-medium mb-2">Find Books By Language</p>
            <select
              id="filterDropdown"
              value={selectedLanguage}
              onChange={handleFilterLanguage}
              className="select focus:outline-none font-poppins font-medium select-bordered w-full xl:max-w-xs"
            >
              <option value="all">Any Language</option>
              <option value="English">English</option>
              <option value="Bengali">Bengali</option>
              <option value="Hindi">Hindi</option>
              <option value="Urdu">Urdu</option>
              <option value="Marathi">Marathi</option>
              <option value="Tamil">Tamil</option>
              <option value="Russian">Russian</option>
              <option value="Spanish">Spanish</option>
              <option value="Arabic">Arabic</option>
              <option value="French">French</option>
              <option value="Korean">Korean</option>
              <option value="Italian">Italian</option>
              <option value="Indonesian">Indonesian</option>
              <option value="German">German</option>
              <option value="Portuguese">Portuguese</option>
              <option value="Dutch">Dutch</option>
              <option value="Swahili">Swahili</option>
              <option value="Swedish">Swedish</option>
              <option value="Japanese">Japanese</option>
              <option value="Chinese">Chinese</option>
              <option value="Greek">Greek</option>
              <option value="Turkish">Turkish</option>
              <option value="Polish">Polish</option>
              <option value="Thai">Thai</option>
              <option value="Vietnamese">Vietnamese</option>

            </select>
          </div>
          {/* book categories */}
          <div>
            <p className="ml-2  my-4 font-poppins font-medium mb-2">Filter By Available Books</p>
            <select
              id="filterDropdown"
              value={selectedFilter}
              onChange={handleFilterChange}
              className="select focus:outline-none font-poppins font-medium select-bordered w-full xl:max-w-xs"
            >
              <option value="all">All Category</option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Biography">Biography</option>
              <option value="Horror">Horror</option>

            </select>
          </div>
          {/* rating */}
          <div className="flex flex-col my-4  justify-center">
            <p className="ml-2 font-poppins font-medium ">Filter By Ratings</p>
            <div className="flex justify-center scale-125">
              <div style={{ maxWidth: 130, width: '100%', marginTop: '.7rem' }}>
                <Rating
                  value={Userrating}
                  onChange={setUSerRating}
                />
                <button className="text-xs font-poppins px-2 py-1 ml-1 rounded-md text-white bg-red-400" type="button" onClick={() => setUSerRating(0)}>
                  Reset
                </button>
              </div>
            </div>
          </div>


        </div>

        <div className="w-full">
          {loading ? (
            <div className="flex justify-center ">
              <Loader></Loader>
            </div>
          ) : filteredBooks.length > 0 ? ( // Check if there are filtered books to display
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  gap-y-8">
              {filteredBooks.map((book) => (
                <ShowAllBooks book={book} key={book._id}></ShowAllBooks>
              ))}
            </div>
          ) : (
            <div><p className="text-center font-montserrat text-5xl text-red-800 font-semibold flex justify-center mt-16">
              No books found. Try Again!!
            </p></div> // Display message when no books are found
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
