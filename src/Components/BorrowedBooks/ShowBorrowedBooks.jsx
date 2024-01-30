import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import UseBorrowedBooks from "../../Hooks/UseBorrowedBooks/UseBorrowedBooks";
import UseAxiosBaseURL from "../../Hooks/UseAxiosBaseURL/UseAxiosBaseURL";
const ShowBorrowedBooks = ({ book }) => {
  const [allBook, setAllBook] = useState([]);
  const [afterFilter, setAfterFilter] = useState();
  const [returnQuantity, setReturnQuantity] = useState();
  const [isReturned, setIsReturned] = useState(true);
  const [borrowedBooks, refetch, isPending] = UseBorrowedBooks()
  const baseURL = UseAxiosBaseURL()
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
    baseURL.get('api/v1/addedBooks')
      .then((response) => {
        setAllBook(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
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
    // fetch(`http://localhost:5000/api/v1/addedBooks/${_id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(updatedQuantity),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     refetch()
    //   });
    baseURL.patch(`api/v1/addedBooks/${_id}`, updatedQuantity)
      .then((response) => {
        console.log(response.data);
        refetch();
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    //update the status of the book
    baseURL.put(`api/v1/borrowedbooks/${_Id}`, updatedStatus)
      .then((response) => {
        console.log(response.data);
        setIsReturned(false);
        if (response.data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Your Book Returned Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          refetch()
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  return (
    <div>

      {!isReturned ? null : (
        // <div className="card my-28 w-96 bg-base-100 shadow-xl">
        //   <figure>
        //     <img className="h-80" src={photo} alt="Shoes" />
        //   </figure>
        //   <div className="card-body">
        //     <h2 className="card-title">
        //       Book Name: {bookName}
        //       <div className="badge text-xl p-3 badge-warning">{status}</div>
        //     </h2>
        //     <p className="text-xl font-semibold">
        //       Book Category:{" "}
        //       <span className=" badge-warning p-1 rounded-xl">
        //         {bookCategory}
        //       </span>
        //     </p>
        //     <p className="text-xl font-semibold">
        //       Borrowed Date: {userBorrowDate}
        //     </p>

        //     <p className="text-xl font-semibold">Return Date: {userReturnDate}</p>
        //     <div className="card-actions justify-end">
        //       <button
        //         onClick={() => handleReturn(bookName, _id)}
        //         className="btn btn-warning "
        //       >
        //         Return Book
        //       </button>
        //       <Link
        //         to={`/read-book/${_id}`}
        //         className="btn bg-blue-500 hover:rounded-full text-white"
        //       >
        //         Read Book
        //       </Link>
        //     </div>
        //   </div>
        // </div>
        <section className='mt-28 px-10'>
          <div className='h-[25rem] w-80 rounded-2xl cursor-pointer group transition-all duration-500 hover:bg-indigo-300 relative shadow-2xl '>
            <div className='absolute -top-16 right-0 left-0'>
              <img className=' h-60 bg-transparent mx-auto' src={photo} alt="" />
            </div>
            <div className='absolute top-1/2 right-0 left-0 flex justify-center items-center scale-110'>
              <ReactStars
                count={rating}
                value={rating}
                size={24}
                activeColor="#ffd700"
              />
            </div>
            <div className='absolute top-[60%] px-2  right-0 left-0 flex justify-center items-center '>
              <p className='font-poppins line-clamp-1 font-semibold text-xl'>{bookName}</p>
            </div>
            <div className='absolute xl:w-[90%] px-2 w-full mx-auto top-[68%] right-0 left-0 flex justify-center items-center '>
              <p className='line-clamp-2'>{description}</p>
            </div>
            <div className='absolute space-x-5 mx-auto top-[87%] right-0 left-0 flex justify-center items-center '>
              <Link to={`/singlebooks/${_id}`}>
                <button className='bg-indigo-300 group-hover:bg-white transition-all duration-500 group-hover:text-black font-poppins text-white px-3 rounded-full hover:scale-105 py-1'>
                  Details
                </button>
              </Link>
              <Link to={`/read-book/${_id}`}>
                <button className='bg-indigo-300 group-hover:bg-white transition-all duration-500 group-hover:text-black font-poppins text-white px-5 rounded-full hover:scale-105 py-1'>
                  Read
                </button>
              </Link>

              <button
                onClick={() => handleReturn(bookName, _id)}
                className="bg-indigo-300 group-hover:bg-white  transition-all duration-500 group-hover:text-black font-poppins text-white px-5 rounded-full hover:scale-105 py-1"
              >
                Return
              </button>

            </div>

          </div>
        </section>

      )}
    </div>
  );
};

export default ShowBorrowedBooks;
