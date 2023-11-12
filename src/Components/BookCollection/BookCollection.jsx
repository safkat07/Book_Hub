import { Link } from "react-router-dom";
import { GrFormNextLink } from 'react-icons/gr';


const BookCollection = ({book}) => {
    const {image, categoryName, _id, categoryDetails } = book
    return (
        <div className="max-w-7xl  mx-auto">
      <div>
        <Link to={`/categorybooks/${_id}`}>
          <button className="group relative">
            <div className="group-hover:bg-opacity-80 transition-opacity duration-700">
              <div className="card w-96 h-80 hover:opacity-50   image-full relative">
                <figure>
                  <img
                    src={image}
                    alt={categoryName}
                    className="transition-transform  transform hover:scale-105"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="text-center font-mono font-bold text-2xl">
                    {categoryName}
                  </h2>
                </div>
                <div className="card-body absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <h2 className="card-title text-2xl font-mono">
                    {categoryDetails}

                  </h2>
                  <button className="btn btn-sm">Visit Now <span className="text-2xl"><GrFormNextLink></GrFormNextLink></span> </button>
                </div>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
    );
};

export default BookCollection;