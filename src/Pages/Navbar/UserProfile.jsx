import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { NavLink, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import { MdLogout } from "react-icons/md";

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext)
    const userIMG = user.photoURL
    const navigate = useNavigate();
    const handleSingout = () => {
        logOut().then(() => {
            swal("Logout Successful");
            navigate("/");
        });
    };

    const [isHover, setIshover] = useState(false)
    return (
        <section
            onMouseEnter={() => setIshover(true)}
            onMouseLeave={() => setIshover(false)}
            className='relative font-poppins '>
            <div
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
                className='w-12 cursor-pointer'>
                <img className='rounded-full' src={userIMG} alt="" />
            </div>
            <div
                onMouseEnter={() => setIshover(true)}
                onMouseLeave={() => setIshover(false)}
                className={`bg-white   absolute h-80 w-[18.5rem]  rounded-xl mt-1 -right-[10%] top-15 ${isHover ? 'block' : 'hidden'} `}>
                <div className='mx-auto pt-8 cursor-pointer'>
                    <img className='rounded-full w-16  mx-auto' src={userIMG} alt="" />
                    <p className='text-center text-lg mt-3 font-poppins font-medium'>{user.displayName}</p>
                </div>
                <div className='text-left flex justify-start flex-col gap-y-2 px-10 mt-7 '>
                    <NavLink className="hover:text-gray-400 transition-all duration-500">
                        Add New Book
                    </NavLink>
                    <NavLink className="hover:text-gray-400 transition-all duration-500">
                        Uploaded Books
                    </NavLink>

                </div>
                <div className='w-3/4 h-[5%] mx-auto border-b-[1px]'>
                </div>
                <div className='text-left hover:text-gray-400  transition-all duration-500 flex gap-x-2 items-center  pt-2 px-10'>
                    <button
                        onClick={handleSingout}
                        className=""
                    >Log Out</button>
                    <span className='text-lg '><MdLogout></MdLogout></span>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;