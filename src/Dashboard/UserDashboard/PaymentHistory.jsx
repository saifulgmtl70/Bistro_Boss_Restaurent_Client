import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Components/Hooks/useAuth";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";


const PaymentHistory = () => {

    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })


    return (
        <main>

            <section className="text-center mb-10 font_Inter px-12 py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---At a Glance!--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-5/12 border-b-4 pb-3 mx-auto"> PAYMENT HISTORY </h2>
            </section>

            <section>
                <div className="w-10/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3">
                    <div className="flex items-center justify-between gap-4 font_cinzel mb-8">
                        <h2 className="text-[#151515] text-[21px] font-[700]">Total Payments:  {payments.length} </h2>
                    </div>

                    <div className="w-full mb-8 overflow-hidden rounded-lg">
                        <div className="w-full ">
                            <table className="w-full">
                                <thead>
                                    <tr className="text-[15px] font-semibold tracking-wide text-left text-[#fff] uppercase rounded-t-md bg-[#D1A054] px-12 py-7 mb-10 font_Inter">
                                        <th className="px-4 py-3">EMAIL</th>
                                        <th className="px-4 py-3">Total Price</th>
                                        <th className="px-4 py-3"> Transaction ID </th>
                                        <th className="px-4 py-3">PAYENT DATE</th>
                                        <th className="px-4 py-3">Status</th>
                                        {/* <th className="px-4 py-3">ACTION</th> */}
                                    </tr>
                                </thead>

                                <tbody className="bg-white">
                                  
                                  {
                                        payments.map(payment => 

                                            <tr key={payment._id}  className="text-gray-700 border-b last:border-none">
                                        
                                            <td className="px-4 py-3 ">
                                                {payment.email}
                                            </td>
                                            <td className="px-4 py-3 text-ms font-semibold ">{payment.price}</td>
                                            <td className="px-4 py-3 text-xs ">{payment.transactionId}</td>
                                            <td className="px-4 py-3 text-sm ">
                                                {payment.date}
                                            </td>
                                            <td className="px-4 py-3 text-sm ">
                                                {payment.status}
                                            </td>
                                            {/* <td className="px-4 py-3 text-sm ">
                                                
                                            </td> */}
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

export default PaymentHistory;