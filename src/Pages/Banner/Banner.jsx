import { Link } from "react-router-dom";
// img import
import img1 from '../../assets/Banner_Books/banner_book_1.jpg'
import img2 from '../../assets/Banner_Books/banner_book_2.jpg'
import img3 from '../../assets/Banner_Books/banner_book_3.jpg'
import img4 from '../../assets/Banner_Books/banner_book_4.jpg'
import './banner.css'
import { useState } from "react";

const ImgList = [
  {
    "id": 1,
    "img": img1,
    "bookTitle": "The Girl With the Dragon Tattoo",
    "bookDescription": "A gripping mystery thriller that follows investigative journalist Mikael Blomkvist and hacker Lisbeth Salander as they uncover dark secrets and conspiracies.",
    "bookAuthor": "Stieg Larsson"
  },
  {
    "id": 2,
    "img": img2,
    "bookTitle": "The Color Purple",
    "bookDescription": "A poignant novel that explores the life of Celie, an African-American woman in the early 20th century, addressing themes of racism, sexism, and the power of sisterhood.",
    "bookAuthor": "Alice Walker"
  },

  {
    "id": 3,
    "img": img3,
    "bookTitle": "Pother Pachali",
    "bookDescription": "A classic Bengali novel capturing the struggles and aspirations of a poor family in rural Bengal. It reflects on life's challenges and the pursuit of dreams.",
    "bookAuthor": "B. Bandyopadhyay"
  },
  {
    "id": 4,
    "img": img4,
    "bookTitle": "Aryonnok",
    "bookDescription": "An epic fantasy tale set in a magical world, following the journey of a young hero as he discovers his destiny and confronts ancient evils threatening the land.",
    "bookAuthor": "Humayun Ahmed"
  },


]
const Banner = () => {
  // chnage book img
  const [bookID, setBookID] = useState(img1)
  const [bookTitle, setBookTitle] = useState("The Girl With the Dragon Tattoo")
  const [bookDescription, setBookDescription] = useState("A gripping mystery thriller that follows investigative journalist Mikael Blomkvist and hacker Lisbeth Salander as they uncover dark secrets and conspiracies.")
  const [bookAuthor, setBookAuthor] = useState("Stieg Larsson")
  return (
    // <section className="h-screen -mt-[4.4rem] bg-gradient-to-r from-orange-600 via-sky-600 to-black  ">

    //   <p className="text-center pt-20">

    //   </p>
    // </section>
    // <section>

    // </section>
    <section className="bg  h-screen">
      <div className="max-w-[1380px]  md:text-left text-center absolute xl:top-[20%] md:top-32 top-28 right-0 left-0 bottom-0 mx-auto">
        <div className="flex w-full md:flex-row flex-col-reverse justify-center gap-x-20 items-center">
          <div className=" text-black md:w-1/3 w-full md:px-0 px-4 font-semibold font-montserrat">
            <p className="lg:text-4xl  md:text-2xl text-lg font-bold">
              {bookTitle}
            </p>
            <p className="font-semibold font-poppins text-white bg-gradient-to-r  from-orange-500 to-80%  py-2 px-2 rounded-xl lg:w-3/4  lg:text-2xl md:text-xl mt-2">
              {bookAuthor}
            </p>
            <p className="md:text-xl text-sm mt-4">
              {bookDescription}
            </p>
            {/* <Link to='/register'>
              <button className="border-2 border-black 2xl:px-5 xl:px-3 px-2 xl:py-1.5 py-1 bg-black text-white rounded-md">Buy Now</button>
            </Link> */}


          </div>
          <div className="">
            <img className="xl:w-80 md:w-60 w-40 xl:h-[500px]  rounded-bl-[5rem] rounded-tr-[5rem] rounded-xl " src={bookID} alt="" />
          </div>
          {/* little img listt */}

        </div>
        <div className=" max-w-[690px]  xl:mt-2 lg:mt-14 md:mt-10 mt-0    mx-auto">
          <div className="space-y-2 flex md:mr-12 justify-center md:gap-x-5 gap-x-2">
            {
              ImgList.map(data => (
                <img key={data.id} src={data.img}
                  className="lg:max-w-[120px] md:max-w-[100px] max-w-[85px] rounded-xl rounded-tl-[1.9rem] hover:rounded-tl-lg rounded-br-[1.9rem] hover:rounded-br-lg hover:rounded-bl-[3.5rem] hover:rounded-tr-[3.5rem] cursor-pointer hover:scale-105 duration-500  max-h-[200px]"
                  onClick={() => {
                    setBookID(
                      data.id === 1 ? img1 :
                        data.id === 2 ? img2 :
                          data.id === 3 ? img3 :
                            img4
                    )
                    setBookAuthor(data.bookAuthor)
                    setBookDescription(data.bookDescription)
                    setBookTitle(data.bookTitle)

                  }}

                />
              ))
            }
          </div>
        </div>
      </div>
    </section>

  );
};

export default Banner;
