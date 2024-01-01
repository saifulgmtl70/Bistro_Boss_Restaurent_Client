import { useQuery } from "@tanstack/react-query";

import { FaTrashAlt } from "react-icons/fa";
import { PiUsersThreeFill } from "react-icons/pi";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";


const AllUsers = () => {

    const axiosSecure = useAxiosSecure();
    

    const { data: users = [], refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })


    const handleMakeAdmin = user =>{
        axiosSecure.patch(`/users/admin/${user._id}`)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }


    const handleDeleteUser = user => {
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

                axiosSecure.delete(`/users/${user._id}`)
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
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---How many??--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> MANAGE ALL USERS </h2>
            </section>

            <section>
                <div className="w-10/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3">
                    <div className="flex items-center justify-between gap-4 font_cinzel mb-8">
                        <h2 className="text-[#151515] text-[21px] font-[700]">Total Users: {users.length}  </h2>
                    </div>

                    

                   
                            

                    <div className="w-full mb-8 overflow-hidden rounded-lg">
                        <div className="w-full ">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-[15px] font-semibold tracking-wide text-left text-[#fff] uppercase rounded-t-md bg-[#D1A054] px-12 py-12 mb-10 font_Inter">
                                        <th className="px-4 py-3">Image / Name</th>
                                        <th className="px-4 py-3">Email</th>
                                        <th className="px-4 py-3">Role</th>
                                        <th className="px-4 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white">

                                {
                                    users.map(user =>

                                    <tr key={user._id} className="text-gray-700 border-b last:border-none">
                                        <td className="px-4 py-3 ">
                                            <div className="flex items-center text-sm">
                                                <div className="relative w-20 h-20 mr-3 rounded-full md:block">
                                                    <img className="object-cover w-full h-full rounded-[2px]" src={user.photo} alt="" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-black"> {user.name} </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-3 text-ms font-semibold ">{user.email}</td>
                                        <td className="px-4 py-3 text-xs ">

                                            {user.role === 'admin' ?  <p className="text-[18px] text-orange-700 font-bold">Admin</p> :  <button onClick={() => handleMakeAdmin(user)} className="p-3 rounded-[4px] bg-[#D1A054] text-[#fff]"> 
                                                <PiUsersThreeFill  className=" text-white"/>
                                            </button>}

                                        </td>
                                        <td className="px-4 py-3 text-sm ">
                                            <button onClick={() => handleDeleteUser(user)}  className="p-3 rounded-[4px] bg-[#B91C1C] text-[#fff]"> 
                                                <FaTrashAlt className=" text-white"/>
                                            </button>
                                        </td>
                                    </tr>

                                )}
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                    

                </div>
            </section>

        </main>
    );
};

export default AllUsers;