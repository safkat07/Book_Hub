
import Swal from "sweetalert2";
import HeadingText from "../Useable/HeadingText/HeadingText";
const AddBooks = () => {

  //handle form


  const handleAddBook = (event) => {
    event.preventDefault();

    const form = event.target;

    const bookName = form.bookName.value;
    const bookCategory = form.bookCategory.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const authorName = form.authorName.value;

    const newBook = {
      bookName,
      authorName,
      bookCategory,
      quantity,
      description,
      rating,
      photo,
    }
    console.log(newBook);

    //send books to server
    fetch('http://localhost:5000/api/v1/addedBooks',
      {
        credentials: true,
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(newBook)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Book Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'

          })
          form.reset()
        }
      })

  }
  return (
    <div className=" p-24">
      <HeadingText headText={" Add New Book"}></HeadingText>
      <form onSubmit={handleAddBook} >
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
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Book" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddBooks