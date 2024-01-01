import { IoMdSearch } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";

import {  useState } from "react";
import useAuth from "../../Components/Hooks/useAuth";
import { Link } from "react-router-dom";




const Dashboardview = () => {

    const [isOpen, setIsOpen] = useState(false);

    const { user, } = useAuth();



    if (!user) {
        // Render loading state or redirect to login
        return <img src="https://i.ibb.co/LP19z9c/04de2e31234507-564a1d23645bf.gif" className='mx-auto mt-32' alt="" />;
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };


   


    return (
        <div className="flex items-center sticky top-0 z-50 bg-opacity-100 bg-[#D1A054] justify-between h-[70px] shadow-sm px-[25px]">
            <div className="flex items-center rounded-[5px]">
                <input type="search" className="bg-[#f8f9fc] h-[40px] outline-none pl-[13px] w-[340px] rounded-[5px] rounded-r-none placeholder:text-[16px]" placeholder="Search here"/>

                <div className="bg-[#ff4321] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]">
                    <IoMdSearch className="text-[23px] text-white"/>
                </div>
            </div>

            <div className="flex items-center gap-[15px] relative">
                <div className="flex items-center gap-[25px] border-r-[1px] pr-[24px]">
                    <FaRegBell />
                    <FaEnvelope />
                </div>

               



                <div className="relative inline-block text-left">
                    <div className="flex items-center gap-[15px] relative">
                        <div className="py-2" role="menuitem" tabIndex="0">
                            <h3 href="#" className="block px-4 py-2 text-lg text-center text-gray-700 ">
                            {user.displayName}
                            </h3>
                        </div>
                        <button type="button" onClick={toggleDropdown} >
                            <img src={user.photoURL} className='w-[45px] h-[45px] rounded-full ' alt="" />
                        </button>
                    </div>

                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-4 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex="-1"
                        >
                            

                            <div className="py-2 border-b" role="menuitem" tabIndex="0">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                                    Profile
                                </Link>
                            </div>
                            <div className="py-2 border-b" role="menuitem" tabIndex="0">
                                <Link href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                                Settings
                                </Link>
                            </div>
                            <div className="py-2" role="menuitem" tabIndex="0">
                                <button  href="#" className="block px-4 py-2 text-sm text-gray-700 ">
                                Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                
            </div>

        </div>
    );
};

export default Dashboardview;