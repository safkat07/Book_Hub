import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ShowBorrowedBooks = ({ book }) => {
  const [allBook, setAllBook] = useState([]);
  const [afterFilter, setAfterFilter] = useState();
  const [returnQuantity, setReturnQuantity] = useState();
  const [isReturned, setIsReturned] = useState(true);
  const {
    bookName,
    authorName,
    _id,
    quantity, // corrected from "quanity"
    bookCategory,
    description,
    rating,
    status,
    userReturnDate,
    userBorrowDate,
    photo,
  } = book;
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/addedBooks")
      .then((res) => res.json())
      .then((data) => {
        setAllBook(data);
      });
  }, []);
  // console.log(allBook);

  const handleReturn = (bookname, _Id) => {
    console.log(bookname, _Id);

    //filter through name
    const filterBook = allBook.filter(
      (totalBook) => totalBook.bookName == bookname
    );

    setAfterFilter(filterBook);

    const mainBookData = filterBook[0];
    const { quantity, _id } = mainBookData;
    console.log(_id);
    const quantityToNumber = parseInt(quantity);
    console.log("Old quantity:", quantityToNumber);

    // Update the quantity and store it in the state
    const newQuantity = 1 + quantityToNumber;
    setReturnQuantity(newQuantity);
    console.log("New quantity:", newQuantity);

    const updatedQuantity = {
      quantity: newQuantity,
    };

    const updatedStatus = {
      status: "returned",
    };
    //update two data
    fetch(`http://localhost:5000/api/v1/addedBooks/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedQuantity),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });

    //update the status of the book
    fetch(`http://localhost:5000/api/v1/borrowedbooks/${_Id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedStatus),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setIsReturned(false)
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Book Returned Successfully",
            icon: "success",
            confirmButtonText: "Cool",
            
          });
        }
      });
  };

  return (
    <div>

{!isReturned ? null : (
      <div className="card my-28 w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="h-80" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Book Name: {bookName}
          <div className="badge text-xl p-3 badge-warning">{status}</div>
        </h2>
        <p className="text-xl font-semibold">
          Book Category:{" "}
          <span className=" badge-warning p-1 rounded-xl">
            {bookCategory}
          </span>
        </p>
        <p className="text-xl font-semibold">
          Borrowed Date: {userBorrowDate}
        </p>

        <p className="text-xl font-semibold">Return Date: {userReturnDate}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleReturn(bookName, _id)}
            className="btn btn-warning "
          >
            Return Book
          </button>

          <Link
            to={`/read-book/${_id}`}
            className="btn bg-blue-500 hover:rounded-full text-white"
          >
            Read Book
          </Link>
        </div>
      </div>
    </div>
    )}
      {/* <div className="card my-28 w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Book Name: {bookName}
            <div className="badge text-xl p-3 badge-warning">{status}</div>
          </h2>
          <p className="text-xl font-semibold">
            Book Category:{" "}
            <span className=" badge-warning p-1 rounded-xl">
              {bookCategory}
            </span>
          </p>
          <p className="text-xl font-semibold">
            Borrowed Date: {userBorrowDate}
          </p>

          <p className="text-xl font-semibold">Return Date: {userReturnDate}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleReturn(bookName, _id)}
              className="btn btn-warning "
            >
              Return Book
            </button>

            <Link
              to={`/read-book/${_id}`}
              className="btn bg-blue-500 hover:rounded-full text-white"
            >
              Read Book
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default ShowBorrowedBooks;
