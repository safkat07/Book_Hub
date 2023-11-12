import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowBorrowedBooks from "./ShowBorrowedBooks";

const BorrowedBooks = () => {
  const [borrowedBook, setBorrowedBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const recentEmail = user?.email;
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/borrowedbooks")
      .then((res) => res.json())
      .then((data) => {
        //filter data
        const filterBooks = data?.filter(
          (book) =>
            book.borrwoedUserEmail === recentEmail && book.status === "borrowed"
        );
        setBorrowedBook(filterBooks);
        setLoading(false);
      });
  }, [recentEmail]);
  console.log(borrowedBook);
  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold mb-10 text-orange-500 underline text-center">
        Borrowed Bookss
      </h2>

      <div>
        {loading ? (
          <div className="flex justify-center mt-52">
            <span className="loading flex loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {borrowedBook.map((book) => (
              <ShowBorrowedBooks book={book} key={book.id}></ShowBorrowedBooks>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BorrowedBooks
