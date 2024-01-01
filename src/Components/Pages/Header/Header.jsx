import React, { useContext, useState } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  
  IconButton,
} from "@material-tailwind/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import '../../Layout/Layout.css';
import { RiMenuFoldFill  } from "react-icons/ri";
import { CiUser } from "react-icons/ci";
import { MdRestaurantMenu  } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Swal from 'sweetalert2';
// import { FaUserCircle,  } from 'react-icons/fa';
import { IoLogOutOutline } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { AuthContext } from "../../Provider/AuthProvider";

import './Header.css';
import useCart from "../../Hooks/useCart";
import useAdmin from "../../Hooks/useAdmin";






 
export function Header() {
    const [openNav, setOpenNav] = React.useState(false);
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cart] = useCart();
    const [isAdmin] = useAdmin();
    console.log(cart.length);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    const handleMenuItemClick = () => {
        setOpenNav(false);
    };

    const location = useLocation();
    const naviGate = useNavigate();

    
 
    React.useEffect(() => {
        window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);
 
    const navList = (
        <ul className="mt-2 mb-4  flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        
            <Typography  as="li"
                variant="small"
                color="blue-gray"
                className="p-1 header_font font-normal"  onClick={handleMenuItemClick}> 
                <Link to="/">Home</Link> 
            </Typography>

            <Typography  as="li"
                variant="small"
                color="blue-gray"
                className="p-1 header_font font-normal"  onClick={handleMenuItemClick}> 
                <Link to="/menu">Our Menu</Link> 
            </Typography>

            <Typography  as="li"
                variant="small"
                color="blue-gray"
                className="p-1 header_font font-normal" onClick={handleMenuItemClick}> 
                <Link to="/shop">Our Shop</Link> 
            </Typography>

            <Typography  as="li"
                variant="small"
                color="blue-gray"
                className="p-1 header_font font-normal"  onClick={handleMenuItemClick}> 
                <Link to="/contact">Contact Us</Link> 
            </Typography>

        </ul>
    );


    

    const handleLogout = () =>{
        logOut()
        .then(() =>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Logged Out Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            naviGate(location?.state ? location.state : '/login');
        })

        
    }


 
    return (

        <div className="top-0 sticky  z-50">
            <Navbar className="max-w-full bg-base-100 bg-opacity-60 border-0 shadow-sm rounded-none ">
                <div className="flex items-center justify-between  text-blue-gray-900">

                    <Typography as="a" href="#" className="mr-4 cursor-pointer text-3xl header_font font-bold"> <Link to="/"><p>Bistro Boss</p><p className="text-[19px] text-[#333] font-[500]">Restaurent</p></Link> </Typography>

                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        
                                {
                                    isAdmin ?
                                    
                                    
                                    
                                    
                                    <></>
                                    :
                                    <div>
                                        <Link to="dashboard/mycart" className="flex items-center">
                                            <TiShoppingCart className="text-[24px] text-[#B89A52] font-bold" />
                                            <span className="text-[#ff4321] font-bold -mt-4 rounded-full ">
                                                {cart.length}
                                            </span>
                                        </Link>
                                    </div>
                                }
                        

                        <div className="flex items-center gap-x-1">
                            
                            {
                                user ?
                                
                                <div className="relative inline-block text-left">
                                    <div className="flex items-center gap-[15px] relative">
                                        <div className="py-2" role="menuitem" tabIndex="0">
                                                
                                        </div>
                                        <button type="button" onClick={toggleDropdown} className="text-[23px]">
                                            
                                            <div className="">
                                                <img src={user.photoURL} alt="" className="w-[40px] h-[40px] rounded-full" />
                                            </div>
                                        </button>
                                    </div>
            
                                    {isDropdownOpen  && (
                                        <div
                                            className="origin-top-right absolute right-0 mt-6 w-96 px-8 py-4 rounded-sm shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-500 ease-in-out"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="menu-button"
                                            tabIndex="-1"
                                        >
                                            
                
                                            <div className="py-2 border-b flex items-center justify-start gap-2" role="menuitem" tabIndex="0">
                                                
                                                <CiUser className="text-[15px] font-bold" />
                                                <h3>Admin Name:</h3>
                                                <h2 className="text-[15px] font-medium text-[#388e96] "> {user.displayName} </h2>
                                            </div>
                                            
                                            <div className="py-2 border-b flex items-center justify-start gap-2" role="menuitem" tabIndex="0">
                                                <HiOutlineMail className="text-[20px] font-bold" /> <h3>Admin Email:</h3>
                                                <h3 className="text-[15px] font-medium text-[#388e96]">{user.email}</h3>
                                            </div>
                                            
                                          
                                                   {
                                                        isAdmin ?
                                                      
                                                        
                                                        <div className="py-2 border-b" role="menuitem" tabIndex="0">
                                                            <Link to="dashboard/adminhome">
                                                                <h3 className="text-[15px] font-bold text-[#ff4321] mt-3">Admin Dashboard</h3>
                                                            </Link>                                           
                                                        </div>
                                                        :
                                                        <></>
                                               
                                                   }
                                            
                                            <div className="py-2" role="menuitem" tabIndex="0">
                                                <button onClick={handleLogout} className="btn bg-red-500 hover:bg-red-600 px-12 py-1 rounded-sm text-white w-full ">Sign Out <IoLogOutOutline  className='text-lg'/> </button> 
                                            </div>
                                        </div>
                                    )}
                                </div>

                                :
                                <Link to="/login">
                                    <button className="btn bg-red-600  ms-2 text-[11px] hover:bg-red-600 rounded-md text-white border-none">Login</button>
                                </Link>
                            }

                        </div>

                       


                        

                        <IconButton variant="text" className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" ripple={false} onClick={() => setOpenNav(!openNav)} >
                        {openNav ? (
                            
                            <MdRestaurantMenu  className="text-[23px]" />

                            ) : (

                            <RiMenuFoldFill   className="text-[25px]" />
                    
                        )}
                        </IconButton>
                    </div>
                </div>

                <MobileNav open={openNav}>
                {navList}
                    
                </MobileNav>
            </Navbar>

        </div>

  );
}