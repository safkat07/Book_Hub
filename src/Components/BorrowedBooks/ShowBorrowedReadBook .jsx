import { useLoaderData } from "react-router-dom";

const ShowBorrowedReadBook = () => {
  const data = useLoaderData();
  console.log(data);
  const { description, bookName } = data;

  return (
    <div>
      <h2 className="text-5xl font-bold mb-10 text-orange-500 underline text-center">
        Summary of {bookName}
      </h2>
      <div className="mockup-window border text-center bg-base-300">
        <div className="flex justify-center text-xl font-semibold px-4 py-16 bg-base-200">
          {description}
        </div>
      </div>
    </div>
  );
};

export default ShowBorrowedReadBook;
