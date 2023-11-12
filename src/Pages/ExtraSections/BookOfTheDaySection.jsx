import img1 from "../../assets/BookMustRead/1.jpg";
import img2 from "../../assets/BookMustRead/2.jpg";
import img3 from "../../assets/BookMustRead/4.jpg";
const BookOfTheDaySection = () => {
  return (
    <div  className="my-16">
      <h2 className="md:text-5xl text-3xl mb-10 font-bold text-orange-500 underline  text-center">
        Must Read Books
      </h2>

      <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
        {/* book 1 */}
        <div>
          <img className="mx-auto" src={img1} alt="" />
          <h2 className="text-2xl text-center font-semibold ">
            "To Kill a Mockingbird"
          </h2>
          <div className="text-center">
            <p className="text-xl underline">About the Book </p>
            <p className="text-xl ">
              This timeless classic explores themes of racial injustice,
              morality, and childhood innocence. Set in the American South
              during the 1930s, it tells the story of Scout Finch, her brother
              Jem, and their father, Atticus Finch, a lawyer defending a Black
              man wrongly accused of rape
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl">Auther: Harper Lee </p>
            <p className="text-xl">Genre: Fiction - Classic </p>
          </div>
        </div>
        {/* book 2 */}
        <div>
          <img className="mx-auto" src={img2} alt="" />
          <h2 className="text-2xl text-center font-semibold ">"Dune" </h2>
          <div className="text-center">
            <p className="text-xl underline">About the Book </p>
            <p className="text-xl ">
              A science fiction epic, "Dune" is set in a distant future where
              interstellar politics, religion, and ecological sustainability
              intertwine. It follows the young Paul Atreides as he navigates the
              desert planet of Arrakis, the only source of the most valuable
              substance in the universe, "spice."
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl">Auther:  Frank Herbert </p>
            <p className="text-xl">Genre: Science Fiction </p>
          </div>
        </div>
        {/* book 3 */}
        <div>
          <img className="mx-auto w-1/2 " src={img3} alt="" />
          <h2 className="text-2xl text-center font-semibold ">
          "Gone Girl"
          </h2>
          <div className="text-center">
            <p className="text-xl underline">About the Book </p>
            <p className="text-xl ">
            This psychological thriller follows the story of Nick Dunne and his wife Amy, who goes missing on their fifth wedding anniversary. The novel is filled with unexpected twists and explores themes of marriage, deceit, and the media's role in  crime.
            </p>
          </div>
          <div className="text-center">
            <p className="text-xl">Auther: Gillian Flynn </p>
            <p className="text-xl">Genre: Mystery/Thriller - Contemporary </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookOfTheDaySection;
