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
        <NavLink>
          <p className="font-rubik 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl font-semibold tracking-[.2rem]">BookHub</p>
        </NavLink>
        {/* icons div */}
        {/* Navigation Div */}
        <div className="lg:block hidden">
          <ul className="flex bg-gradient-to-tl  xl:gap-x-7 gap-x-3 xl:text-xl text-lg font-poppins  font-medium">
            <NavLink to='/' className={({ isActive }) =>
              isActive ? "hover:text-indigo-500  transition-all duration-700 scale-110 text-indigo-500" : "hover:text-indigo-500  transition-all duration-700 hover:scale-105"
            }>Home </NavLink>
            <NavLink to='/allbooks' className={({ isActive }) =>
              isActive ? "hover:text-indigo-500  transition-all duration-700 scale-110 text-indigo-500" : "hover:text-indigo-500  transition-all duration-700 hover:scale-105"
            }>All Books </NavLink>
            <a href="#categories" className={({ isActive }) =>
              isActive ? "hover:text-indigo-500  transition-all duration-700 scale-110 text-indigo-500" : "hover:text-indigo-500  transition-all duration-700 hover:scale-105"}>
              Categories
            </a>
            <NavLink to='/contact' className={({ isActive }) =>
              isActive ? "hover:text-indigo-500  transition-all duration-700 scale-110 text-indigo-500" : "hover:text-indigo-500  transition-all duration-700 hover:scale-105"
            }>Contacts </NavLink>
            {
              user ? <li 
              onClick={handleSingout}
              className="hover:text-indigo-500 cursor-pointer  transition-all duration-700 hover:scale-105"

              >LogOut</li>
                :
                <NavLink to='/login' className={({ isActive }) =>
                  isActive ? "hover:text-indigo-500  transition-all duration-700 scale-110 text-indigo-500" : "hover:text-indigo-500  transition-all duration-700 hover:scale-105"
                }>Login </NavLink>
            }


          </ul>
        </div>
        {/* Navigation Div */}
        {/* Social Icons */}
        {
          user ?
            <div className="lg:block hidden">
              <p className="hover:text-indigo-500 text-2xl font-poppins font-medium transition-all duration-700 hover:scale-105">Hello, {user.displayName}</p>
            </div>
            :
            <div className="lg:flex font-montserrat font-semibold text-xl items-center justify-center gap-x-3 hidden">
              <NavLink to='/login'>
                <button className="border-2 border-black 2xl:px-7 xl:px-5 px-4  xl:py-1.5 py-1 rounded-md">Login</button>
              </NavLink>
              <NavLink to='/register'>
                <button className="border-2 border-black 2xl:px-5 xl:px-3 px-2 xl:py-1.5 py-1 bg-black text-white rounded-md">Sign-up</button>
              </NavLink>
            </div>
        }

        {/* Social Icons */}
        {/* respnsive deisgn */}
        <div className="block lg:hidden">
          ham
        </div>
      </div>

    </nav >
    // <nav>

    // </nav>
  );
};

export default Navbar;
