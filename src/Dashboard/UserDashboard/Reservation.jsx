import { FaPhoneVolume, FaTable  } from 'react-icons/fa';
import '../Dashboard.css';
import { MdWatchLater } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const Reservation = () => {
    return (
        <main className="font_Inter">
            <div className="text-center mb-7  py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Reservation---</p>
                <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> BOOK A TABLE </h2>
            </div>

            <form action="" className="px-12 py-10 ">
                <div className=" grid grid-cols-3 gap-10">

                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Date* </label>

                        <input type="date" className=" border-2 border-[#eeeaea] rounded w-full py-4 px-4 text-gray-700 leading-tight "  />

                    </div>

                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Date* </label>

                        <input type="time" className=" border-2 border-[#eeeaea] rounded w-full py-4 px-4 text-gray-700 leading-tight "  />

                    </div>

                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Guest* </label>
                        
                        <select name="" className=" border-2 border-[#eeeaea] rounded w-full py-[16.5px] px-5 text-gray-700 leading-tight " >
                            <option value="1 Person">1 Person</option>
                            <option value="2 Person">2 Person</option>
                            <option value="3 Person">3 Person</option>
                            <option value="4 Person">4 Person</option>
                            <option value="5 Person">5 Person</option>
                        </select>
                        

                    </div>


                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Name* </label>

                        <input type="text" className=" border-2 border-[#eeeaea] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none " placeholder="Your Name" />

                    </div>

                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Phone* </label>

                        <input type="number" className=" border-2 border-[#eeeaea] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none" placeholder="Phone Number" />

                    </div>

                    <div className="">
                        <label className="block text-[#444444] text-[19px] font-bold mb-2" >Email* </label>

                        <input type="email" className=" border-2 border-[#eeeaea] rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none" placeholder="Email address" />

                    </div>

                </div>

                <div className='text-center my-5'>
                    <button
                        type='submit'
                        className='flex items-center text-center gap-3 mx-auto px-10 py-3 rounded-sm bg-gradient-to-r from-[#7b551d] to-[#b99f75] text-white ' >
                        Book A Table
                        <FaTable />
                    </button>
                </div>

            </form>

            <section className='px-12 py-10 '>
                <div className="text-center mb-10">
                    <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Visit Us---</p>
                    <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> OUR LOCATION </h2>
                </div>
                <div  className="grid grid-cols-1 lg:grid-cols-3">
                    <div className="h-auto  rounded-md ">
                        <div className='bg-[#D1A054] p-5 border-r-4 border-[#fff]'>
                            <FaPhoneVolume className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200  py-16 mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>Phone</h3>
                            <p className='text-[#444444]'>+38 (012) 34 56 789</p>
                        </div>
                    </div>


                    <div className="h-auto  rounded-md ">
                        <div className='bg-[#D1A054] p-5 border-r-4 border-[#fff]'>
                            <FaLocationDot  className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200  py-16  mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>ADDRESS</h3>
                            <p className='text-[#444444]'>CoxBazar, Bangladesh</p>
                        </div>
                    </div>

                    <div className="h-auto  rounded-md ">
                        <div className='bg-[#D1A054] p-5  border-[#fff]'>
                            <MdWatchLater   className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200  py-[43px]  mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>WORKING HOURS</h3>
                            <p className='text-[#444444]'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='text-[#444444]'>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </div>
            </section>

           

        </main>
    );
};

export default Reservation;