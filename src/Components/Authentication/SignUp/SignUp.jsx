// import { Link, useLocation, useNavigate,  } from 'react-router-dom';
import { Link, useNavigate,  } from 'react-router-dom';
import '../Authentication.css';

import {  AiOutlineEye, AiTwotoneEyeInvisible } from 'react-icons/ai';

import { Helmet } from 'react-helmet-async';


import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Google from '../SociaAccount/Google';


const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const { register, handleSubmit, reset, formState: { errors }} = useForm();

    const [showPass, setShowPass] = useState(null);
    const { createUser, updateUserProfile } = useContext(AuthContext);
    // const location = useLocation();
    const navigate = useNavigate();


    const onSubmit = data => {
        console.log(data);
        
        createUser(data.email, data.password)
        .then(result => {
            if (result && result.user) {
                const loggedUser = result.user;
                console.log(loggedUser);
                return updateUserProfile(data.name, data.photoURL);
            } 
            else {
                throw new Error('User creation failed or returned invalid data');
            }
        })

        .then(() => {
            // console.log('user profile info updated')
            // Create user entry in the database
            const userInfo = {
                name: data.name,
                email: data.email,
                photo: data.photoURL
            };

            axiosPublic.post('/users', userInfo)
            .then(res => {
                if(res.data.insertedId){
                    console.log("User Added to databse");
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'User created successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/');
                }
            })
            
            
        })
        .catch(error => {
            console.error('Error during user creation or profile update:', error);
        });


    };


    

    



    return (
        <main>
            <Helmet>
                <title>Bistro Boss | Sign Up </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <section className="login_bg">
                <div className="w-full lg:w-11/12 mx-auto shadow-2xl">
                    <div className="flex flex-col lg:flex-row-reverse items-center ">

                        <div className="">
                            <img alt="Night" src="https://i.ibb.co/Q8YKqTr/authentication1-removebg-preview.png"className=" "/>
                        </div>

                        <div className="px-4 py-16 sm:px-6 lg:px-8 w-full lg:w-6/12">
                            <div className="w-full">
                                <p className="text-center text-lg text-[#000]  font-bold">Sign up to your account</p>
                                <form onSubmit={handleSubmit(onSubmit)} action="" className="mb-0 mt-6 space-y-5 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                                

                                    <div>
                                        <label htmlFor="name" className='text-[20px] text-[#000] font-bold mb-4'>Name</label>

                                        <div className="relative">
                                            <input type="text" {...register("name", { required: true })} name='name' className="w-full mt-2 rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter Name" />
                                            {errors.name && <span className="text-red-600">Name is required</span>}
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="name" className='text-[20px] text-[#000] font-bold mb-4'>Photo URL</label>

                                        <div className="relative">
                                            <input type="text" {...register("photoURL", { required: true })} name='photoURL' className="w-full mt-2  rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 text-[15px] focus:outline-none shadow-sm" placeholder="Enter photo url" />
                                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                                        </div>
                                    </div>


                                    <div>
                                        <label htmlFor="email" className="text-[20px] text-[#000] font-bold mb-4">Email</label>

                                        <div className="relative">
                                            <input type="email"  {...register("email", { required: true })} name='email' className="w-full mt-2 mb-2 rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333] px-5 py-3 focus:outline-none text-[15px] shadow-sm" placeholder="Enter email here" />
                                            {errors.email && <span className="text-red-600">Email is required</span>}
                                            
                                        </div>
                                    </div>

                                    
                                    <div className='mb-4'>
                                        <label htmlFor="password" className="text-[20px] text-[#000] font-bold mb-4"> Password </label>

                                        <div className="relative">
                                            <input type={showPass ? "text" : "password"}  name='password' className="w-full mt-2 mb-4 rounded-md border-base-100 focus:bg-[#E8F0FE] placeholder:text-[#333]  px-5 py-3 focus:outline-none text-[15px] shadow-sm"  placeholder="Enter password" {...register("password", {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}/>

                                            <span onClick={() => setShowPass(!showPass)} className="absolute cursor-pointer inset-y-0 -mt-5 end-0 grid place-content-center px-4">
                                    
                                            {
                                                showPass ? <AiTwotoneEyeInvisible></AiTwotoneEyeInvisible> : <AiOutlineEye></AiOutlineEye>
                                            }

                                            </span>

                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>
                                            }
                                            
                                        </div>
                                    </div>

                                    <button type="submit" className="block w-full rounded-lg bg-[#DAB884] px-5 py-4 text-sm font-bold text-white" > Sign in </button>

                                    <p className="text-center text-[15px] font-bold text-[#a68654]">
                                        Already Registered?
                                        <Link className="underline ms-4 text-red-500" to="/login"> Login</Link>
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

export default SignUp;