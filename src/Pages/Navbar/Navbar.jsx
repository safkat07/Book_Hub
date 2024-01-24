import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from '../../assets/Logos/logo.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";




import swal from "sweetalert";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleThemeButton = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const addLocalTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to the html tag required to update the theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", addLocalTheme);
  }, [theme]);

  const handleSingout = () => {
    logOut().then(() => {
      swal("Logout Successful");
      navigate("/");
    });
  };


  return (
    <nav className="mt-[1.30rem] text-black  2xl:px-16 px-5 mx-auto">
      <div className="flex justify-between items-center">
        {/* icons div */}
        <Link>
            <p className="font-rubik 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold tracking-[.2rem]">BookHub</p>
        </Link>
        {/* icons div */}
        {/* Navigation Div */}
        <div className="lg:block hidden">
          <ul className="flex bg-gradient-to-tl  xl:gap-x-7 gap-x-3 xl:text-xl text-lg font-poppins  font-medium">
            <Link><li className="  hover:text-indigo-500 transition-all duration-500">Home</li></Link>
            <Link><li className="  hover:text-indigo-500 transition-all duration-500">All Books</li></Link>
            <Link><li className="  hover:text-indigo-500 transition-all duration-500">About Us</li></Link>
            <Link><li className="  hover:text-indigo-500 transition-all duration-500">Contacts</li></Link>
            <Link><li className="  hover:text-indigo-500 transition-all duration-500">Login</li></Link>
          </ul>
        </div>
        {/* Navigation Div */}
        {/* Social Icons */}
        <div className="lg:flex text-xl items-center justify-center gap-x-3 hidden">
          <button className="border-2 border-black 2xl:px-5 xl:px-3 px-2  xl:py-1.5 py-1 rounded-md">Login</button>
          <button className="border-2 border-black 2xl:px-5 xl:px-3 px-2 xl:py-1.5 py-1 bg-black text-white rounded-md">Sign-up</button>
        </div>
        {/* Social Icons */}
      </div>
    </nav>
    // <nav>
      
    // </nav>
  );
};

export default Navbar;
