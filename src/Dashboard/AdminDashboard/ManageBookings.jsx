
import { IoCheckmark } from "react-icons/io5";


const ManageBookings = () => {
    return (
        <main>
            <section className="text-center mb-10 font_Inter px-12 py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---At a Glance!--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-5/12 border-b-4 pb-3 mx-auto"> MANAGE ALL BOOKINGS </h2>
            </section>

            <section>
                <div className="w-10/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3">
                    <div className="flex items-center justify-between gap-4 font_cinzel mb-8">
                        <h2 className="text-[#151515] text-[21px] font-[700]">Total Items:  6 </h2>
                    </div>

                    <div className="w-full mb-8 overflow-hidden rounded-lg">
                        <div className="w-full ">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-[15px] font-semibold tracking-wide text-left text-[#fff] uppercase rounded-t-md bg-[#D1A054] px-12 py-7 mb-10 font_Inter">
                                        <th className="px-4 py-3">USER EMAIL</th>
                                        <th className="px-4 py-3">PHONE NUMBER</th>
                                        <th className="px-4 py-3">BOOKING DATE </th>
                                        <th className="px-4 py-3">BOOKING TIME</th>
                                        <th className="px-4 py-3">ACTIVITY</th>
                                        <th className="px-4 py-3">ACTION</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                    <tr  className="text-gray-700 border-b last:border-none">
                                        
                                        <td className="px-4 py-3 ">
                                            user010@gmail.com
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold ">01822299900</td>
                                        <td className="px-4 py-3 text-xs ">0+/11/06</td>
                                        <td className="px-4 py-3 text-sm ">
                                            00 : 00
                                        </td>
                                        <td className="px-4 py-3 text-sm ">
                                            Pending
                                        </td>
                                        <td className="px-4 py-3 text-sm ">
                                            <button  className="p-1 rounded-full bg-[#80E2B7] text-[#fff] text-[21px]"> 
                                                <IoCheckmark />
                                            </button>
                                        </td>
                                    </tr>

                                    
        
                                </tbody>
                            </table>
                        </div>
                    </div>
                            


                    
                   


                </div>
            </section>

        </main>
    );
};

export default ManageBookings;