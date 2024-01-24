import { Link, useLoaderData } from "react-router-dom";
import Rating from "react-rating";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const SingleBooks = () => {
  const { user } = useContext(AuthContext);

  const singleBook = useLoaderData();
  const {
    bookName,
    authorName,
    _id,
    quantity, // corrected from "quanity"
    bookCategory,
    description,
    rating,
    photo,
  } = singleBook;

  // State variables
  const [bookQuantity, setBookQuantity] = useState(quantity); // corrected from "quanity"
  const [isBorrowButtonDisabled, setIsBorrowButtonDisabled] = useState(false);
  const [alreadyBorrowed, setAlreadyBorrowed] = useState(true);

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const borrowedUserName = form.borrowedUserName.value;
    const borrwoedUserEmail = form.borrwoedUserEmail.value;
    const userReturnDate = form.userReturnDate.value;
    const userBorrowDate = form.userBorrowDate.value;

    // Validate and update book quantity
    if (bookQuantity > 0) {
      setIsBorrowButtonDisabled(bookQuantity - 1 === 0);
    }

    const borrowBookByUser = {
      bookName,
      authorName,
      status: "borrowed",
      bookCategory,
      description,
      rating,
      photo,
      borrowedUserName,
      borrwoedUserEmail,
      userBorrowDate,
      userReturnDate,
    };

    const updatedQuantity = {
      quantity: bookQuantity,
    };

    // Add 'borrowBookByUser' to the Borrowed Books list (you should have a state or context for that)

    console.log(borrowBookByUser);

    console.log(bookQuantity);
    if (!alreadyBorrowed) {
      Swal.fire({
        title: "Already Borrowed.",
        width: 600,
        padding: "3em",
        color: "#FF000080",
        
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `,
      });
      return;
    }

    // Post 'borrowBookByUser' to the server
    fetch("http://localhost:5000/api/v1/borrowedbooks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(borrowBookByUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Book Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        setAlreadyBorrowed(false);
      });

    // Update the quantity of the book
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
        // Handle success or show a Swal alert here
      });
  };

  return (
    <div className="">
      <h2 className="md:text-5xl text-3xl font-bold text-orange-500 underline text-center">
        Details of: {bookName}
      </h2>

      <div className="flex md:flex-row flex-col justify-center my-10 gap-10 w-full">
        <div className="md:w-1/2 flex-1">
          <img className="w-96 mx-auto h-50" src={photo} alt="" />
        </div>
        <div className="md:w-1/2 flex-1">
          <h2 className="text-4xl font-bold">Book Name: {bookName}</h2>
          <h2 className="text-3xl font-bold">Author Name: {authorName}</h2>
          <h2 className="text-xl font-bold">Book Category: {bookCategory}</h2>
          <h2 className="text-xl font-bold">
            Available Books: {bookQuantity} Copies
          </h2>
          <h2 className="text-xl flex font-bold">
            Book Rating: <Rating initialRating={rating} readonly />
          </h2>
          <div className="flex gap-5">
            <button
              className="btn  bg-orange-500 hover:rounded-full text-white"
              onClick={() => document.getElementById("my_modal_5").showModal()}
              // disabled={isBorrowButtonDisabled || bookQuantity == 0}
            >
              Borrow Book
            </button>
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
            >
              <div className="modal-box">
                <form onSubmit={handleBorrowBook} className="w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">What is Your name?</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    name="borrowedUserName"
                    defaultValue={user?.displayName}
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    <span className="label-text">What is Your Email?</span>
                  </label>
                  <input
                    type="text"
                    name="borrwoedUserEmail"
                    defaultValue={user?.email}
                    placeholder="Email"
                    className="input input-bordered w-full max-w-xs"
                  />

                  <label className="label">
                    <span className="label-text">
                      When Will You Borrow The Book?
                    </span>
                  </label>
                  <input
                    type="date"
                    name="userBorrowDate"
                    placeholder="borrow date"
                    className="input input-bordered w-full max-w-xs"
                  />

                  <label className="label">
                    <span className="label-text">
                      When Will You Return The Book?
                    </span>
                  </label>
                  <input
                    type="date"
                    name="userReturnDate"
                    placeholder="return date"
                    className="input input-bordered w-full max-w-xs"
                  />

                  <input
                    onClick={() => {
                      setBookQuantity(bookQuantity - 1);
                    }}
                    type="submit"
                    className={
                      bookQuantity == 0
                        ? "btn mt-5 btn-disabled"
                        : "btn mt-5 btn-success"
                    }
                    value="Submit"
                  />
                </form>
                <div className="modal-action">
                  <form method="dialog">
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
            {/* {`/singlebooks/${_id}`} */}
            <Link to={`/readbook/${_id}`}>
              <button className="btn bg-blue-500 hover:rounded-full text-white">
                Read Book
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBooks;
