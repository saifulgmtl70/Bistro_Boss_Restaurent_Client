import { FaTrashAlt, FaEdit  } from "react-icons/fa";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import UseMenu from "../../Components/Hooks/useMenu";
import { Link } from "react-router-dom";


const ManageItem = () => {

    const [ menu, , refetch ] = UseMenu();
    const axiosSecure = useAxiosSecure();

    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure to delete this user ?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/menu/${item._id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }
    
    return (
        <main>

            <section className="text-center mb-10 font_Inter px-12 py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---Hurry Up!--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> MANAGE ALL ITEMS </h2>
            </section>



            <section>
                <div className="w-10/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3">
                    <div className="flex items-center justify-between gap-4 font_cinzel mb-8">
                        <h2 className="text-[#151515] text-[21px] font-[700]">Total Items:  {menu.length} </h2>
                    </div>

                    <div className="w-full mb-8 overflow-hidden rounded-lg">
                        <div className="w-full ">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-[15px] font-semibold tracking-wide text-left text-[#fff] uppercase rounded-t-md bg-[#D1A054] px-12 py-7 mb-10 font_Inter">
                                        <th className="px-4 py-3"></th>
                                        <th className="px-4 py-3">ITEM IMAGE</th>
                                        <th className="px-4 py-3">ITEM NAME</th>
                                        <th className="px-4 py-3">PRICE</th>
                                        <th className="px-4 py-3">Action</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                   {
                                        menu.map(item => 

                                            <tr key={item._id} className="text-gray-700 border-b last:border-none">
                                            <td className="px-4 py-3 ">
                                               
                                                <div className="relative w-20 h-20 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-[2px]" src={item.image} alt="" />
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-ms font-semibold ">{item.name} </td>
                                            <td className="px-4 py-3 text-xs ">${item.price}</td>
                                            <td className="px-4 py-3 text-sm ">
                                               <Link to={`/dashboard/updateItem/${item._id}`} >
                                                <button  className="p-3 rounded-[4px] bg-[#D1A054] text-[#fff]"> 
                                                        <FaEdit  shAlt className=" text-white"/>
                                                    </button>
                                               </Link>
                                            </td>
                                            <td className="px-4 py-3 text-sm ">
                                                <button onClick={() => handleDeleteItem(item)} className="p-3 rounded-[4px] bg-[#B91C1C] text-[#fff]"> 
                                                    <FaTrashAlt className=" text-white"/>
                                                </button>
                                            </td>
                                        </tr>
                                        )
                                   }

                                    
        
                                </tbody>
                            </table>
                        </div>
                    </div>
                            


                    
                   


                </div>
            </section>


           


        </main>
    );
};

export default ManageItem;