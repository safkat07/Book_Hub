import { Link, NavLink, useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
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

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allbooks">All Books</NavLink>
      </li>

      <li>
        <NavLink to="/addbooks">Add Books</NavLink>
      </li>
      <li>
        <NavLink to="/borrowedbook">Borrowed Books</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );
  return (
    <div
      className="
     navbar sticky bg-transparent  z-50 
      rounded-lg top-0 w-full py-4"
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          {/* <img className="lg:block hidden" src={logo} alt="" /> */}
          <span>
            <img
              className="w-[70px]"
              src="https://i.ibb.co/tXzdS2n/Lets-Move-Icon-1-removebg-preview.png"
              alt=""
            />
          </span>
          <p className="text-4xl font-semibold lg:block hidden  font-mono">
            Book<span className="bg-orange-400  px-3  rounded-xl">Hub</span>
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="navbar-end">
        <div>
          {user && (
            <>
              <p className="lg:text-xl w-full text-sm  font-serif font-semibold lg:mr-5 mr-3">
                {user.displayName}
              </p>
            </>
          )}
        </div>
        {user && user.photoURL ? (
          <>
            <img
              className="rounded-full  w-10 h-10"
              src={user.photoURL}
              alt=""
            />
          </>
        ) : (
          <></>
        )}
        {user ? (
          <>
            <Link
              onClick={handleSingout}
              to="/"
              className="btn btn-ghost hover:bg-gray-500 hover:text-white    "
            >
              Sign-Out
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn btn-ghost hover:bg-gray-500 hover:text-white    "
            >
              Sign-in
            </Link>
          </>
        )}
      </div>
      <button
        className={`btn btn-square btn-ghost ${
          theme === "dark" ? "text-dark" : ""
        }`}
      >
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleThemeButton}
            // show toggle image based on local storage theme
            checked={theme === "light" ? false : true}
          />

          <img
            src="https://i.ibb.co/T07wHzr/sun-icon-design-free-png.png"
            alt="light"
            className="w-5 h-5 swap-on"
          />

          <img
            src="https://i.ibb.co/zr45qKn/moon-icon-1868x2048-ifpp8fum.png"
            alt="dark"
            className="w-5 h-5 swap-off"
          />
        </label>
      </button>
    </div>
  );
};

export default Navbar;
