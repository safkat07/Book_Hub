// import Rating from "react-rating";

import Rating from "react-rating";
import { Link } from "react-router-dom";

// import { Rating } from "@smastrom/react-rating";
const ShowBooks = ({ books }) => {
  const {
    bookName,
    _id,
    authorName,
    bookCategory,
    quantity,
    description,
    rating,
    photo,
  } = books;
  //   const [rating, setRating] = useState()
  //   setRating({rating})
  return (
    <div className="my-20 flex justify-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="w-80 h-80" src={photo} alt="Books" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <h2 className="card-title">Author: {authorName}</h2>
          <p className="text-xl">Category: {bookCategory}</p>
          {/* <p className="text-xl">Rating: <span className='' ><Rating style={{  maxWidth: 200, }} value={rating}  /></span> </p> */}
          <div className="flex ">
            <p className="text-xl">Rating: </p>
            <p className="mr-28"><Rating
  initialRating={rating}
  readonly
/></p>
{/* <Rating
  emptySymbol="fa fa-star-o fa-2x"
  fullSymbol="fa fa-star fa-2x"
  fractions={2}
/> */}



          </div>

          <div className="card-actions justify-end">
            <Link to={`/singlebooks/${_id}`}>
            <button className="btn btn-primary">Book Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooks;
