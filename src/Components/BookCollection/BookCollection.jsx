import { Link } from "react-router-dom";
import { GrFormNextLink } from 'react-icons/gr';


const BookCollection = ({ book }) => {
  const { image, categoryName, _id, categoryDetails } = book
  return (
    // <div className="max-w-7xl  mx-auto">
    //   <div>
    //     <Link to={`/categorybooks/${_id}`}>
    //       <button className="group relative">
    //         <div className="group-hover:bg-opacity-80 transition-opacity duration-700">
    //           <div className="card w-96 h-80 hover:opacity-50   image-full relative">
    //             <figure>
    //               <img
    //                 src={image}
    //                 alt={categoryName}
    //                 className="transition-transform  transform hover:scale-105"
    //               />
    //             </figure>
    //             <div className="card-body">
    //               <h2 className="text-center font-mono font-bold text-2xl">
    //                 {categoryName}
    //               </h2>
    //             </div>
    //             <div className="card-body absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
    //               <h2 className="card-title text-2xl font-mono">
    //                 {categoryDetails}

    //               </h2>
    //               <button className="btn btn-sm">Visit Now <span className="text-2xl"><GrFormNextLink></GrFormNextLink></span> </button>
    //             </div>
    //           </div>
    //         </div>
    //       </button>
    //     </Link>
    //   </div>
    // </div>
    <Link to={`/categorybooks/${_id}`}>
      <section className="mb-10 ">
        <div className="w-60 h-40 shadow-2xl bg-gradient-to-r  scale-110 from-indigo-300 via-red-200 to-sky-200 rounded-xl rounded-tl-[1.9rem] hover:rounded-tl-lg rounded-br-[1.9rem] hover:rounded-br-lg hover:rounded-bl-[3.5rem] hover:rounded-tr-[3.5rem] cursor-pointer hover:scale-125 duration-500">
          <p className="text-center font-poppins font-medium pt-7">{categoryName}</p>
          <p className="text-center font-montserrat font-medium text-sm">{categoryDetails}</p>
        </div>
      </section>
    </Link>
  );
};

export default BookCollection;