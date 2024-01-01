import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../Authentication.css';
import { Helmet } from 'react-helmet-async';

import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';
import {  useState } from 'react';

import Swal from 'sweetalert2';
import Google from '../SociaAccount/Google';
import useAuth from '../../Hooks/useAuth';





const Login = () => {


    const [showPass, setShowPass] = useState(null);
    const { signIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    console.log('state in the location login page', location.state)


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        const user = { email, password };
        console.log(user);

        signIn(email, password)
        .then(res =>{
            Swal.fire({
                position: "center",
                icon: "success",
                title: "User Logged in Successfully",
                showConfirmButton: false,
                timer: 1500
            });
            navigate(from, { replace: true });
            console.log(res.user);
        })
        // .catch(() =>{
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Something went wrong!",
        //         showConfirmButton: true,
        //         timer: 1500
        //     });
        // })


    }
    
   
    return (
        <main>
            <Helmet>
                <title>Bistro Boss | Login </title>
                
            </Helmet>
            <section className="login_bg">
                
               

                <div className="w-full lg:w-11/12 mx-auto shadow-2xl">
                    <div className="flex flex-col lg:flex-row items-center ">
                        <div className="">
                            <img alt="Night" src="https://i.ibb.co/Q8YKqTr/authentication1-removebg-preview.png"className=" "/>

                        </div>

   

                        <div className="px-4 py-16 sm:px-6 lg:px-8 w-full lg:w-6/12">
                            <div className="w-full">
                                <p className="text-center text-lg text-[#000]  font-bold">Login to your account</p>
                                <form onSubmit={handleLogin}  action="" className="mb-0 mt-6 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                                

                                    <div>
                                        <label htmlFor="email" className='text-[20px] text-[#000] font-bold mb-4'>Email</label>

                                        <div className="relative">
                                            <input type="email" name='email' className="w-full normal-case mt-2  rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter email" />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="text-[20px] text-[#000] font-bold mb-4">Password</label>

                                        <div className="relative">
                                            <input type={showPass ? "text" : "password"}  name='password' className="w-full normal-case mt-2 rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 focus:outline-none text-[15px] shadow-sm" placeholder="Enter password" />

                                            <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0  end-0 grid place-content-center px-4">
                                    
                                            {
                                                showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                            }

                                            </span>
                                        </div>
                                    </div>

                                    

                                    <button   type="submit"  className='block w-full rounded-lg bg-[#DAB884] px-5 py-4 text-sm font-bold text-white '
                                         > Sign in </button>

                                    <p className="text-center text-[15px] font-bold text-[#a68654]">
                                        No account?
                                        <Link className="underline ms-4" to="/signup"> Sign up</Link>
                                    </p>

                                    <Google></Google>

                                </form>
                            </div>
                        </div>

                        
                    </div>
                </div>



            </section>



        </main>
    );
};

export default Login;