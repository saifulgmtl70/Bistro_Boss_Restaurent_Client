import { Helmet } from 'react-helmet-async';
import Contact_Banner from './Contact_Banner';
import { FaPhoneVolume, FaLocationDot  } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";

import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_v9o5ubl', 'template_hnm25ye', form.current, 'nI4f2s9NVc5ZAIOSB')
          .then((result) => {
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Your message has been sent",
                showConfirmButton: false,
                timer: 1500
            });
            console.log(result.text);
        }, (error) => {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
            });
              console.log(error.text);
        });
    };

    return (
        <main>
            <Helmet>
                <title>Bistro Boss | Contact </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section>
                <Contact_Banner></Contact_Banner>
            </section>

            <section className='px-12 py-10'>
                <div className="text-center mb-5">
                    <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Visit Us---</p>
                    <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> OUR LOCATION </h2>
                </div>
            </section>

            <section className='px-12 py-10'>
                <div  className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    <div className="h-auto border rounded-md ">
                        <div className='bg-[#D1A054] p-5'>
                            <FaPhoneVolume className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200 px-6 py-16 mx-6 mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>Phone</h3>
                            <p className='text-[#444444]'>+38 (012) 34 56 789</p>
                        </div>
                    </div>


                    <div className="h-auto border rounded-md ">
                        <div className='bg-[#D1A054] p-5'>
                            <FaLocationDot  className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200 px-6 py-16 mx-6 mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>ADDRESS</h3>
                            <p className='text-[#444444]'>CoxBazar, Bangladesh</p>
                        </div>
                    </div>

                    <div className="h-auto border rounded-md ">
                        <div className='bg-[#D1A054] p-5'>
                            <MdWatchLater   className='text-white text-[20px] mx-auto' />
                        </div>
                        <div className="bg-gray-200 px-6 py-12 mx-6 mb-5 space-y-3 text-center">
                            <h3 className='text-[#151515] text-[25px] font-bold'>WORKING HOURS</h3>
                            <p className='text-[#444444]'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='text-[#444444]'>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>

                </div>
            </section>


            <section className='px-12 py-10'>

                <div className="text-center mb-20">
                    <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Send Us a Message---</p>
                    <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> CONTACT FORM </h2>
                </div>

                <div className='w-full lg:w-10/12 mx-auto h-auto bg-[#F3F3F3] px-6 lg:px-10 py-5'>
                    <form ref={form} onSubmit={sendEmail} action="">
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-7'>
                            <div >
                                <label htmlFor="" className='block text-[#333] text-[18px] font-bold mb-2'>Name*</label>
                                <input type="text" name='user_name' className='px-4 py-4 text-[16px] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your name' />
                            </div>

                            <div >
                                <label htmlFor="" name='user_email' className='block text-[#333] text-[18px] font-bold mb-2'>Email*</label>
                                <input type="email" className='px-4 py-4 text-[16px] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your email' />
                            </div>
                        </div>

                        <div className='mb-6'>
                            <label htmlFor="" name='number' className='block text-[#333] text-[18px] font-bold mb-2'>Phone*</label>
                            <input type="number" className='px-4 py-4 text-[16px] focus:outline-none rounded-md bg-white w-full' placeholder='Enter your phone number'  />
                        </div>

                        <div className=''>
                            <label htmlFor="" className='block text-[#333] text-[18px] font-bold mb-2'>Message*</label>
                            

                            <textarea type="text" name="message" className='px-4 py-4 text-[16px] focus:outline-none rounded-md bg-white w-full resize-none' cols="40" rows="10" placeholder='Write your message here' >
                            </textarea>
                            
                        </div>

                        <div className='text-center my-4'>
                            <button
                                type='submit'
                                className='flex items-center text-center mx-auto px-10 py-3 rounded-sm bg-gradient-to-r from-[#8b6429] to-[#c9a873] text-white'
                                >
                                Send Message
                                <FaTelegramPlane />
                            </button>
                        </div>

                    </form>
                </div>

            </section>


        </main>
    );
};

export default Contact;