import { Link } from "react-router-dom";
import bannerIMG from "../../assets/banner_img.png";

const Banner = () => {
  return (
    <div className="mt-20">
      {/* main div */}
      <div className="flex md:flex-row flex-col">
        <div>
          <h2 className="md:text-5xl text-center md:text-left  text-3xl font-bold">
            Welcome to Book
            <span className="bg-orange-400  rounded-xl px-3">Hub</span>{" "}
          </h2>
          <h2 className="md:text-4xl text-center md:text-left text-3xl mt-2 font-semibold">
            Your Very Own Virtual Library
          </h2>
          <p className="md:w-3/4 text-center md:text-left mt-5 text-2xl ">
            Step into a world of endless stories and boundless knowledge at our
            Book Library. Explore, read, and embark on literary journeys with
            us.
          </p>
          <div className="mt-5 flex justify-center">
            <Link to='/login'>
            <button className="btn mr-5 hover:bg-orange-500 text-white hover:rounded-full bg-orange-500 ">Know More</button>
            </Link>
            <Link to='/allbooks'>
            
            <button className="btn hover:bg-black text-white hover:rounded-full bg-black ">See Books</button>
            </Link>
            
      </div>
        </div>

            {/* img div */}
        <div>
          <img className="w-[1000px]" src={bannerIMG} alt="" />
        </div>
      </div>


    </div>
  );
};

export default Banner;
