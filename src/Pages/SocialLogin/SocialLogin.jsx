

import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import swal from 'sweetalert';

import { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const SocialLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const {googleLogin, githubLogin} = useContext(AuthContext)
    const mainColor = {
        backgroundColor: "#001829",
        color: "#ba9e76",
      };

      const handleLogin = (media) =>{
        media()
        .then(() =>{
          swal("Login Successful");
          //navigate after login
          navigate(location?.state ? location.state : '/')
        })
        .catch(() =>{
          swal("Login Failed!! Try again")
        })
      }

  return (
    <div >
      <div className="divider">Conitune With</div>
      <div className="flex justify-center">
        <button
          onClick={() => handleLogin(googleLogin)}
          className="btn btn-ghost"
        >
          <FcGoogle className="text-2xl"></FcGoogle> Google 
        </button>
        
        <button
        onClick={() => handleLogin(githubLogin)}
        className="btn btn-ghost"><BsGithub className="text-2xl"></BsGithub> Github</button>
      </div>
    </div>
  );
};

export default SocialLogin;