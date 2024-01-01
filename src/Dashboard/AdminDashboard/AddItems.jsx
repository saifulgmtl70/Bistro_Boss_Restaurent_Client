import { useForm } from "react-hook-form";
import {  FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {

    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async(data) =>{
        console.log(data);
        // Upload image to imbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });

        if(res.data.success){
            const menuItems = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }

            const menuRes = await axiosSecure.post('/menu', menuItems);
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
                // Show Success Message
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Added an Item",
                    showConfirmButton: false,
                    timer: 1500
                });
            }

        }
        console.log(res.data);

    }

    return (
        <main>
            <section className="text-center font_Inter mb-10 px-12 py-8">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5"> ---What is new?--- </p>
                <h2 className="text-[30px] leading-relaxed uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> ADD AN ITEM</h2>
            </section>

            <div className="w-11/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3 rounded-[1px]">
                
                <form onSubmit={handleSubmit(onSubmit)} action="" className="font_Inter w-11/12 mx-auto my-6">
                    <div className="mb-8">
                        <p className="text-[17px] text-[#454545] font-[600] mb-2">Recipe name*</p>
                        <input type="text" {...register('name')} className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border rounded-[3px] bg-[#F6F6F6]" placeholder="Recipe Name" required/>
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Category*</p>

                            <select defaultValue="default" {...register('category')} className="px-4 py-4 w-full focus:outline-none border focus:border mx-auto rounded-[3px] bg-[#F6F6F6]" >
                                <option disabled value="default" >Select a Category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessarts">Dessarts</option>
                                
                            </select>

                        </div>
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Price*</p>
                            <input type="number" {...register('price')} className="px-4 py-4 w-full focus:outline-none border focus:border mx-auto rounded-[3px] bg-[#F6F6F6]" placeholder="Price" required/>
                        </div>
                    </div>

                    <div className="mb-8">
                        <p className="text-[17px] text-[#454545] font-[600] mb-2">Recipe Details*</p>

                        <textarea name="" {...register('recipe')} className="px-4 py-6 w-full focus:outline-none border focus:border h-48 mx-auto rounded-[3px] bg-[#F6F6F6] resize-none" placeholder="Recipe Details" ></textarea>
                    </div>


                    <div className="mb-8">
                        
                        <input type="file" {...register('image')} className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                    </div>

                    <div className=' my-5'>
                        <button
                            type='submit'
                            className='flex items-center text-center gap-2 px-8 py-3 rounded-sm bg-gradient-to-r from-[#7b551d] to-[#b99f75] text-white ' >
                            Add Item
                            <FaUtensils  />
                        </button>
                    </div>

                </form>

            </div>

        </main>
    );
};

export default AddItems;