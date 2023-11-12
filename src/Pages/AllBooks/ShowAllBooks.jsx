import Rating from "react-rating";
import { Link } from "react-router-dom";

const ShowAllBooks = ({ book }) => {
  const { bookName, _id, photo, quantity, rating, authorName, bookCategory } =
    book;
  return (
    <div className="my-10 flex justify-center">
      <div className="card card-compact w-80 bg-base-100 shadow-xl">
        <figure>
          <img className=" h-80 w-96" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Book Title: {bookName}</h2>
          <h2 className="card-title">Author Nmae: {authorName}</h2>
          <h2 className="card-title">Book Category: {bookCategory}</h2>
          <h2 className="card-title">Book Quantity: {quantity}</h2>
          <h2 className="card-title">
            Book Rating:
            <Rating initialRating={rating} readonly />
          </h2>

          <div className="card-actions justify-start">
            <Link to={`/singlebooks/${_id}`}>
              <button className="btn  hover:rounded-full bg-orange-500 hover:bg-stone-500">
                Book Details
              </button>
            </Link>
            <Link to={`/updatebooks/${_id}`}>
              <button className="btn  hover:rounded-full bg-sky-500 hover:bg-stone-500">
                Update Books
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAllBooks;
