import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ShowBorrowedBooks from "./ShowBorrowedBooks";
import HeadingText from "../Useable/HeadingText/HeadingText";
import UseBorrowedBooks from "../../Hooks/UseBorrowedBooks/UseBorrowedBooks";

const BorrowedBooks = () => {
  const [borrowedBook, setBorrowedBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const recentEmail = user?.email;
  // useEffect(() => {
  //   fetch("https://safkat-live-server-side.vercel.app/api/v1/borrowedbooks")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       //filter data
  //       const filterBooks = data?.filter(
  //         (book) =>
  //           book.borrwoedUserEmail === recentEmail && book.status === "borrowed"
  //       );
  //       setBorrowedBook(filterBooks);
  //       setLoading(false);
  //     });
  // }, [recentEmail]);
  // console.log(borrowedBook);

  const [borrowedBooks, isPending] = UseBorrowedBooks()
  return (
    <div>
      <HeadingText headText={"Borrowed Bookss"}></HeadingText>

      <div>
        {borrowedBooks?.length === 0 ? (
          <div className="text-center mt-8"><p className="text-3xl font-montserrat font-medium">
            No books borrowed
          </p></div>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-x-8">
            {borrowedBooks?.map((book) => (
              <ShowBorrowedBooks book={book} key={book.id}></ShowBorrowedBooks>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};

export default BorrowedBooks
