import { IoMdHome, IoIosList  } from "react-icons/io";
import {  FaShoppingCart , FaCalendarAlt  } from "react-icons/fa";
import { IoWallet } from "react-icons/io5";
import { MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { MdOutlineShoppingBag, MdPermContactCalendar  } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";

import '../Dashboard.css';

import {  Link, NavLink } from "react-router-dom";
import { FaBook, FaUsers } from "react-icons/fa6";
import useAdmin from "../../Components/Hooks/useAdmin";
// import UseAdmin from "../../Hooks/UseAdmin";

const SideBar = () => {

    const [isAdmin] = useAdmin();


    return (
        <div className="bg-[#D1A054] sidemenu h-full sticky top-0 px-6 font_cinzel list-none">
            <div className="py-3 mb-5 flex justify-center items-center ">
                <Link to="/">
                    <h1 className="text-[20px] text-[#151515] font-extrabold">Bistro Boss <span className="text-[16px] tracking-widest">Restaurent</span></h1>
                </Link>
            </div>



            {
                isAdmin ?
                <>
                    <li>
                        <NavLink to="adminhome" className="flex items-center gap-[7px] py-[13px] text-[#151515]  font-[600]" >
                            <IoMdHome className="text-[23px]" />
                            <p className="text-[16px]">Admin Home</p>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="additems"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <ImSpoonKnife  className="text-[23px]" />
                            <p className="text-[16px]">Add items</p>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="manageitems"  className="flex items-center gap-[7px] py-[13px] text-[#151515] delay-300 transition-all  font-[600]" >
                                <IoIosList  className="text-[23px]" />
                                <p className="text-[16px] leading-loose">manage items</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="managebookings"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <FaBook  className="text-[23px]" />
                            <p className="text-[16px] leading-loose">Manage bookings</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="allusers"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <FaUsers className="text-[23px]" />
                            <p className="text-[16px]"> all users</p>
                        </NavLink>
                    </li>

                   
                </>
                :
                <>
                    <li>
                        <NavLink to="userhome" className="flex items-center gap-[7px] py-[13px] text-[#151515]  font-[600]" >
                            <IoMdHome className="text-[23px]" />
                            <p className="text-[16px]">User Home</p>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="reservation"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <FaCalendarAlt   className="text-[23px]" />
                            <p className="text-[16px]">reservation</p>
                        </NavLink>
                    </li>


                    <li>
                        <NavLink to="paymenthistory"  className="flex items-center gap-[7px] py-[13px] text-[#151515] delay-300 transition-all  font-[600]" >
                                <IoWallet  className="text-[23px]" />
                                <p className="text-[16px] leading-loose">payment history</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="mycart"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <FaShoppingCart  className="text-[23px]" />
                            <p className="text-[16px] leading-loose">my cart</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="addreview"  className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                            <MdReviews className="text-[23px]" />
                            <p className="text-[16px]"> add review</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="mybookings" className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]">
                            <TbBrandBooking  className="text-[23px]" />
                            <p className="text-[16px]"> my booking </p>
                        </NavLink>
                    </li>
                </>
             } 

            

            <div className="my-5">
                <hr />
            </div>

            

            
            
            <li>
                
                <NavLink to="/" className="flex items-center gap-[7px] py-[13px] text-[#151515]  transition-all  font-[600]" >
                    <IoMdHome className="text-[23px]" />
                    <p className="text-[16px]"> Home</p>
                </NavLink>
            </li>


            
            <li>
                <Link to="/menu" className="flex items-center gap-[7px] py-[13px] text-[#151515]  font-[600]" >
                    <IoIosList className="text-[23px]" />
                    <p className="text-[16px]">menu</p>
                </Link>
            </li>

            
            <li>
                <Link to="/shop" className="flex items-center gap-[7px] py-[13px] text-[#151515]   font-[600]">
                    <MdOutlineShoppingBag className="text-[23px]" />
                    <p className="text-[16px]"> shop</p>
                </Link>
            </li>

            <li>
                <Link to="/contact" className="flex items-center gap-[7px] py-[13px] text-[#151515]   font-[600]" >
                    <MdPermContactCalendar  className="text-[23px]" />
                    <p className="text-[16px]"> contact</p>
                </Link>
            </li>

        </div>
    );
};

export default SideBar;