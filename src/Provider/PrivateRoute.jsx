import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation();
  // console.log(location);

  if (loading) {
    return (
      <h2 className="text-7xl min-h-screen flex  justify-center font-bold text-center">
        <span className="loading loading-bars loading-lg"></span>
      </h2>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;