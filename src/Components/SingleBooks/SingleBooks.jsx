import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Rating from 'react-rating';
import Swal from 'sweetalert2';
import UseAxiosBaseURL from '../../Hooks/UseAxiosBaseURL/UseAxiosBaseURL';
import UseBorrowedBooks from '../../Hooks/UseBorrowedBooks/UseBorrowedBooks';
import { AuthContext } from '../../Provider/AuthProvider';

const SingleBooks = () => {
  const { user } = useContext(AuthContext);
  const baseURL = UseAxiosBaseURL();
  const [borrowedBooks, refetch] = UseBorrowedBooks();
  const singleBook = useLoaderData();
  const {
    bookName,
    authorName,
    _id,
    quantity,
    bookCategory,
    description,
    rating,
    photo,
  } = singleBook;

  // State variables
  const [bookQuantity, setBookQuantity] = useState(quantity);
  const [alreadyBorrowed, setAlreadyBorrowed] = useState(true);

  const handleBorrowBook = (e) => {
    e.preventDefault();
    const form = e.target;
    const borrowedUserName = form.borrowedUserName.value;
    const borrowedUserEmail = form.borrowedUserEmail.value;
    const userReturnDate = form.userReturnDate.value;
    const userBorrowDate = form.userBorrowDate.value;

    if (bookQuantity > 0) {
      setBookQuantity(bookQuantity - 1);
      setAlreadyBorrowed(false); // Assuming the borrow action succeeded
    }

    const borrowBookByUser = {
      bookName,
      authorName,
      status: 'borrowed',
      bookCategory,
      description,
      rating,
      photo,
      borrowedUserName,
      borrowedUserEmail,
      userBorrowDate,
      userReturnDate,
    };

    baseURL
      .post('api/v1/borrowedbooks', borrowBookByUser)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Book Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
          refetch(); // Trigger refetch after successful borrow
        }
      })
      .catch((error) => {
        console.error('Error borrowing book:', error);
        // Handle error, display error message, etc.
      });

    baseURL
      .patch(`api/v1/addedBooks/${_id}`, { quantity: quantity - 1 })
      .then((res) => {
        console.log(res.data);
        refetch(); // Trigger refetch after successful borrow
      })
      .catch((error) => {
        console.error('Error updating book quantity:', error);
        // Handle error, display error message, etc.
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
              onClick={() => document.getElementById('my_modal_5').showModal()}
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
                    name="borrowedUserEmail"
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
                    type="submit"
                    className={
                      bookQuantity === 0
                        ? 'btn mt-5 btn-disabled'
                        : 'btn mt-5 btn-success'
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
