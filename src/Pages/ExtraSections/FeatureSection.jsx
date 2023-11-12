import img1 from "../../assets/FeatureBooks/1.jpg"
import img2 from "../../assets/FeatureBooks/2.jpg"
import img3 from "../../assets/FeatureBooks/3.jpg"
import img4 from "../../assets/FeatureBooks/4.jpg"

const FeatureSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl font-bold text-orange-500 underline  text-center">
        Featured Books
      </h2>

      {/* cards div */}

      <div className="flex my-16 justify-center ">
      <div className="grid  grid-cols-1 gap-10 md:grid-cols-2  ">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img1}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"Pather Panchali" by Bibhutibhushan Bandopadhyay</h2>
            <p>Pather Panchali is a classic Bengali novel that tells the story of a young boy named Apu and his family living in a rural Bengali village. The novel beautifully portrays the everyday life, struggles, and dreams of the characters, making it a timeless classic in Bengali literature</p>
            <div>
                <p className="text-xl">Auther: Bibhutibhushan Bandopadhyay </p>
                <p className="text-xl">Genre: Novel </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn - text-white  bg-orange-500 hover:bg-orange-500  hover:rounded-full">See Book</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img2}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> "Feluda Series" by Satyajit Ray</h2>
            <p> the Feluda series by Satyajit Ray is a must-read. The series features the adventures of the detective Feluda, who solves mysteries and crimes in a captivating manner. "Sonar Kella" and "Joy Baba Felunath" are two popular books from this series</p>
            <div>
                <p className="text-xl">Auther: Satyajit Ray </p>
                <p className="text-xl">Genre: Thriller </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn - text-white bg-orange-500 hover:bg-orange-500  hover:rounded-full">See Book</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img3}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"The History of Bengal" by R.C. Majumdar</h2>
            <p>"The History of Bengal" by renowned historian R.C. Majumdar provides a comprehensive overview of the history of Bengal from ancient times to the modern era. This book is a valuable resource for those interested in the rich historical heritage of the region</p>
            <div>
                <p className="text-xl">Auther: R.C. Majumdar </p>
                <p className="text-xl">Genre: History </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn - text-white bg-orange-500 hover:bg-orange-500  hover:rounded-full">See Book</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              src={img4}
              alt="Books"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">"Kadambari Devi: A Biography of Rabindranath Tagore's Wife" by Sabyasachi Bhattacharya</h2>
            <p>This biography explores the life of Kadambari Devi, the wife of Nobel laureate Rabindranath Tagore. Her relationship with Tagore and her significant influence on his life and work make for a fascinating read. This biography offers insights into the personal and creative aspects of Tagore's life</p>
            <div>
                <p className="text-xl">Auther: Rabindranath Tagore's Wife </p>
                <p className="text-xl">Genre: Biography </p>
            </div>
            <div className="card-actions justify-end">
              <button className="btn - text-white bg-orange-500 hover:bg-orange-500  hover:rounded-full">See Book</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FeatureSection;
