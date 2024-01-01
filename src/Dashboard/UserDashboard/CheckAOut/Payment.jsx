import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
    return (
        <main>
             <section className='px-12 py-10'>
                <h2 className='text-center text-[33px] text-[#333] font-bold mb-10'>Payment</h2>

                <div>
                    

                    <Elements stripe={stripePromise} >
                        <Checkout></Checkout>
                    </Elements>

                </div>



            </section>
            

        </main>
    );
};

export default Payment;