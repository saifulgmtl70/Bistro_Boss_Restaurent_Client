import '../Dashboard.css'
import { IoWalletSharp } from "react-icons/io5";
import { FaStore, FaShoppingCart,   } from "react-icons/fa";
import { FaPhoneVolume,  } from "react-icons/fa6";

import { FaStar } from "react-icons/fa6";

import { FaRegCalendarAlt } from "react-icons/fa";

import { IoWallet } from "react-icons/io5";
import useAuth from '../../Components/Hooks/useAuth';




const UserHome = () => {

    const { user } = useAuth();

    if (!user) {
        // Render loading state or redirect to login
        return <img src="https://i.ibb.co/LP19z9c/04de2e31234507-564a1d23645bf.gif" className='mx-auto mt-32' alt="" />;
    }

    return (
        <div className="px-10 py-6">
            <h1 className="text-2xl font_cinzel font-bold text-gray-700 mb-6">Hi, Welcome Back!</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-7">

                <div className='px-10 py-5 flex items-center justify-center gap-10 rounded-md bg-gradient-to-r from-[#BB34F5] to-[#f5f2f5]'>
                    <div className='text-[50px] text-white font-bold'>
                        <IoWalletSharp />
                    </div>
                    <div>
                        <h2 className='text-[40px] text-white font-bold'>1000</h2>
                        <p className='text-[24px] text-white'>Revenue</p>
                    </div>
                </div>

                <div className='px-10 py-5 flex items-center justify-center gap-10 rounded-md bg-gradient-to-r from-[#D3A256] to-[#f5f2f5]'>
                    <div className='text-[50px] text-white font-bold'>
                        <FaStore />
                    </div>
                    <div>
                        <h2 className='text-[40px] text-white font-bold'>1500</h2>
                        <p className='text-[24px] text-white'>Customers</p>
                    </div>
                </div>

                <div className='px-10 py-5 flex items-center justify-center gap-10  rounded-md bg-gradient-to-r from-[#FE4880] to-[#f5f2f5]'>
                    <div  className='text-[50px] text-white font-bold'>
                        <FaPhoneVolume />
                    </div>
                    <div>
                        <h2 className='text-[40px] text-white font-bold'>03</h2>
                        <p className='text-[24px] text-white'>Contact</p>
                    </div>
                </div>

            </div>

            <div className=' p-5 font_cinzel flex items-center'>
                <div className='bg-[#FFEDD5] w-auto lg:w-[620px] h-auto lg:h-[390px] p-10 border-r-2  border-r-[#D1A054]'>
                    <img src={user.photoURL} className='mx-auto w-[198px] h-[198px] mt-2 lg:mt-5 rounded-full border-[4px] border-[#D1A054]' alt="" />
                    <h1 className='text-2xl text-center  font-bold text-gray-800 my-6'>{user.displayName}</h1>
                </div>

                <div className='bg-[#FEF9C3] w-auto lg:w-[620px] h-auto lg:h-[390px]  p-10 '>
                    <h1 className='text-2xl text-start mt-2 lg:mt-10 font-bold text-gray-800 my-6'> Your Activities </h1>

                    <ul className='flex flex-col items-start justify-center space-y-3 '>
                        <li className='flex items-center text-[19px] gap-[6px]  text-[#0088FE]'>
                            <FaShoppingCart className='' />
                            <p className=''>Orders: 6</p>
                        </li>
                        <li className='flex items-center text-[19px] gap-[6px] text-[#00C4A1]'>
                            <FaStar  className='' />
                            <p className=''>Reviews: 2</p>
                        </li>
                        <li className='flex items-center text-[19px] gap-[6px] text-[#FFBB28]'>
                            <FaRegCalendarAlt className='' />
                            <p className=''>Orders: 6</p>
                        </li>
                        <li className='flex items-center text-[19px] gap-[6px] text-[#FF8042]'>
                            <IoWallet className='' />
                            <p className=''>Orders: 6</p>
                        </li>
                        
                    </ul>
                </div>
            </div>            

           

        </div>
    );
};

export default UserHome;