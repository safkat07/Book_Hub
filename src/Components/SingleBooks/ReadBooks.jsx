import { useLoaderData } from "react-router-dom";

const ReadBooks = () => {
  const book = useLoaderData();
  const { description, bookName } = book;
  return (
    <div>
      <h2 className="md:text-5xl text-3xl font-bold mb-10 text-orange-500 underline text-center">
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

export default ReadBooks;
