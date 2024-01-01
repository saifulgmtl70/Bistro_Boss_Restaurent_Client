
import { FaTrashAlt } from "react-icons/fa";
import '../Dashboard.css';
import Swal from "sweetalert2";
import useCart from "../../Components/Hooks/useCart";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import { Link } from "react-router-dom";



const MyCart = () => {

    const [ cart, refetch ] = useCart();
    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    const formattedTotalPrice = totalPrice.toFixed(2);


    const handleDeleteItem = (id) =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {

            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                .then(res =>{
                    if(res.data.deletedCount > 0){
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Item has been deleted.",
                            icon: "success"
                        });
                    }
                })
            }
        });
    }

    return (
        <main >
            <section className="text-center mb-10 font_Inter px-12 py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---My Cart--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> WANNA ADD MORE? </h2>
            </section>

            <section >
                <div className="w-10/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3">
                    <div className="flex items-center justify-between gap-4 font_cinzel mb-8">
                        <h2 className="text-[#151515] text-[21px] font-[700]">Total orders: {cart.length} </h2>
                        <h2 className="text-[#151515] text-[21px] font-[700]">total price: ${formattedTotalPrice}  </h2>
                        <Link to="/dashboard/payment">
                            <button disabled={!cart.length} className="bg-[#D1A054] text-white text-[18px] px-5 py-2 rounded-[4px]">Pay</button>
                        </Link>
                    </div>

                    <div className="flex items-center justify-between gap-5 rounded-t-md bg-[#D1A054] px-9 py-5 mb-4 font_Inter">
                        

                        <div>
                            <h2 className="text-[#fff] text-[15px] font-medium uppercase">Item Image</h2>
                        </div>

                        <div>
                            <h2 className="text-[#fff] text-[15px] uppercase font-medium">Item Name</h2>
                        </div>

                        <div>
                            <h2 className="text-[#fff] text-[15px] font-medium uppercase">Price</h2>
                        </div>

                        <div>
                            <h2 className="text-[#fff] text-[15px] font-medium uppercase">Action</h2>
                        </div>

                    </div>

                    {
                        cart.map(item => 
                            <div key={item._id} className="flex items-center justify-between gap-5 rounded-t-md  px-9 pb-5  mb-4 border-b border-[#eee] last:border-none" >
                                

                                <div className="w-full">
                                    <img src={item.image} className="w-[75px] h-[75px] select-none rounded-[2px]" alt="" />
                                </div>

                                <div className="w-full">
                                    <h2 className="text-[#737373] text-start text-[15px] font-normal"> {item.name} </h2>
                                </div>

                                <div className="w-full">
                                    <h2 className="text-[#737373] text-[15px] font-normal uppercase">${item.price}</h2>
                                </div>

                                <button onClick={() => handleDeleteItem(item._id)} className="p-3 rounded-[4px] bg-[#B91C1C] text-[#fff]"> 
                                    <FaTrashAlt className=" text-white"/>
                                </button>

                            </div>
                    
                    )}

                    



                </div>
            </section>

            

        </main>
    );
};

export default MyCart;