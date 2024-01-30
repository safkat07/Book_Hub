import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {

  const loadedBooks = useLoaderData()
  const {
    bookName,
    authorName,
    _id,
    quantity, // corrected from "quanity"
    bookCategory,
    description,
    rating,
    
    photo,
  } = loadedBooks;

  const handleUpdatedBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookName = form.bookName.value;
    const bookCategory = form.bookCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const authorName = form.authorName.value;
    

    const updatedBook = {
      bookName,
      authorName,
      bookCategory,
      quantity,
      description,
      rating,
      photo,
      
    }
    console.log(updatedBook);

    //send books to server
    fetch(`https://safkat-live-server-side.vercel.app/api/v1/addedBooks/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedBook)
    })
    .then( res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0){
        Swal.fire({
            title: 'Success!',
            text: 'Book Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
            
          })
          form.reset()
    }
    })

  }
    return (
        <div className=" p-24">
           <h2 className="md:text-5xl text-3xl font-bold mb-10 text-orange-500 underline text-center">
           Update Information of {bookName}
      </h2>
        
        <form onSubmit={handleUpdatedBook}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Book Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="bookName"
                  defaultValue={bookName}
                  required
                  placeholder="Book Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control  md:w-1/2 md:ml-4">
              {/* <label className="label">
                              <span className="label-text">Book Type</span>
                          </label>
                          <label className="input-group">
                              <input type="text" name="BookType" placeholder="Book Type" className="input input-bordered w-full" />
                          </label> */}
                          <label className="label">
                              <span className="label-text">Book Category</span>
                          </label>
              <select
              name="bookCategory"
              defaultValue={bookCategory}
              required
              className="select select-bordered select-md w-full max-w-xs">
                <option disabled selected>
                Book Category
                </option>
                <option>Novel</option>
                <option>Thriller</option>
                <option>Drama</option>
                <option>History</option>
                
              </select>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Book quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  defaultValue={quantity}
                  required
                  name="quantity"
                  placeholder="Book quantity"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Book Short description</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  required
                  defaultValue={description}
                  name="description"
                  placeholder="Book description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Book Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  required
                  name="rating"
                  defaultValue={rating}
                  placeholder="rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Author Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  required
                  name="authorName"
                  defaultValue={authorName}
                  placeholder="Author Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  required
                  defaultValue={photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* read book */}
         
          <input type="submit" value="Update The Book" className="btn btn-block" />
        </form>
      </div>
    );
};

export default UpdateBooks;