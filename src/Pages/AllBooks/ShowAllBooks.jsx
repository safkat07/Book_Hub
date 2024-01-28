import Rating from "react-rating";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const ShowAllBooks = ({ book }) => {
  const { bookName, _id, photo, quantity, bookLanguage, rating, authorName, bookCategory } = book;

  const divStyle = {
    backgroundImage: `url(${photo})`,
    backgroundSize: 'cover', // Adjust as needed
    backgroundPosition: 'center', // Adjust as needed
    width: '300px', // Example width
    height: '400px', // Example height
  };

  return (
    <div className="flex items-center   justify-center">
      <div className="group relative  rounded-tl-[1.9rem] rounded-xl hover:scale-105  transition-all duration-1000 rounded-bl-[1.9rem]    cursor-pointer items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30">
        <div className="h-96  w-72">
          <img className="h-full w-full  brightness-75 object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={photo} alt="" />
        </div>
        <div className="absolute  inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-poppins text-2xl  text-center  font-bold text-white">{bookName}</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{bookCategory}</p>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{authorName}</p>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">{quantity} Books Available</p>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Language: {bookLanguage}</p>
          <ReactStars
            count={rating}
            value={rating}
            size={24}
            activeColor="#ffd700"
          />,
          <Link>
            <button className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">Details</button>
          </Link>
        </div>
      </div>
    </div>

  );
};

export default ShowAllBooks;
