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
       if(err.code === "auth/invalid-login-credentials"){
        toast.error("Please Use Correct Email & Password")
       }
       else{
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
  );
};

export default Login;