import { Link, useLocation, useNavigate } from "react-router-dom";
import { BiShowAlt } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(true);
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location in the login page", location);
  const handleShowPassword = () => {
    console.log("show password");
    setShowPassword(!showPassword);
  };


  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    const password = e.target.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((res) => {
        // console.log(res.user);
        toast.success("Login successful");
        navigate(location?.state ? location.state : '/')
        e.target.reset();
      })

      .catch((err) => {
        if (err.code === "auth/invalid-login-credentials") {
          toast.error("Please Use Correct Email & Password")
        }
        else {
          toast.error(err.message)
        }
      });

  };

  return (
    <div  className="hero min-h-screen ">
      <div>
        <Toaster />
      </div>

      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">LOGIN NOW!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin}  className="card-body">
            <div className="form-control">
              <label className="label">
                <span    className="label-text">
                  Email
                </span>
              </label>
              <input

                type="email"
                name="email"
                placeholder="example@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span    className="label-text">
                  Password
                </span>
              </label>
              <input
                type={showPassword ? "password" : "text"}
                placeholder="your password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a

                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button  className="btn btn-primary p-2 m-2">
                Login
              </button>
            </div>
          </form>
            <div className="flex justify-center">
                <Link to='/'>

                <button className="btn w-full mb-5 px-10 text-lg btn-warning ">Go Back Home</button>
                </Link>
            </div>
          <p className="text-center">
            New to Our Site?{" "}
            <Link className="text-blue-600" to="/register">
              Register Here!!
            </Link>
          </p>
          <SocialLogin></SocialLogin>
          {showPassword ? (
            <>
              <button
                onClick={handleShowPassword}
                className="absolute text-xl mt-[175px] ml-56"
              >
                <BiShowAlt></BiShowAlt>
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleShowPassword}
                className="absolute text-xl mt-[175px] ml-56"
              >
                <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
    // <div className="selection:bg-rose-500 selection:text-white">
    //   <div className="min-h-screen bg-rose-100 flex justify-center items-center">
    //     <div className="p-8 flex-1">
    //       <div className="w-80 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
    //         <div className="relative h-48 bg-orange-500 rounded-bl-4xl">
    //           <svg className="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    //             <path fill="#ffffff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
    //           </svg>
    //         </div>
    //         <div className="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
    //           <h1 className="text-2xl font-semibold text-gray-900">Welcome back!</h1>
    //           <form className="mt-12" action="" method="POST">
    //             <div className="relative">
    //               <input id="email" name="email" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="john@doe.com" />
    //               <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email address</label>
    //             </div>
    //             <div className="mt-10 relative">
    //               <input id="password" type="password" name="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600" placeholder="Password" />
    //               <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
    //             </div>

    //             <input type="sumbit" value="Sign in" className="mt-20 px-4 py-2 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-rose-500 focus:ring-opacity-80 cursor-pointer" />
    //           </form>
    //           <a href="#" className="mt-4 block text-sm text-center font-medium text-rose-600 hover:underline focus:outline-none focus:ring-2 focus:ring-rose-500"> Forgot your password? </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

  );
};

export default Login;