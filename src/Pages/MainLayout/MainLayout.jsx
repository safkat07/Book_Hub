import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";


const MainLayout = () => {
    return (
        <div className="">
            <div>
                <Toaster></Toaster>
            </div>
            <div>
                <Navbar></Navbar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>
            {/* <Footer></Footer> */}

        </div>
    );
};

export default MainLayout;