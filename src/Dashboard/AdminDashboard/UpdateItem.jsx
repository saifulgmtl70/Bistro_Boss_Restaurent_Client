import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../Components/Hooks/useAxiosPublic";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {

    const {name, category, recipe, price, _id} = useLoaderData();

    const { register, handleSubmit, } = useForm();

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();



    // const item = useLoaderData();
    // console.log(item);



    const onSubmit = async (data) => {
        console.log(data)
        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            // 
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                // show success popup
                // reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: `${data.name} is updated to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };



    return (
        <main>
            <section className="">
                <h2 className="text-3xl text-center uppercase font_Inter my-6">Update item</h2>
                <div className="w-11/12 mx-auto bg-[#fff] h-auto px-10 mb-12 py-3 rounded-[1px]">
                    
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="font_Inter w-11/12 mx-auto my-6">
                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Recipe name*</p>
                            <input type="text" className="px-4 py-4 w-full mx-auto focus:outline-none border focus:border rounded-[3px] bg-[#F6F6F6]" placeholder="Recipe Name"   defaultValue={name}
                            {...register('name', { required: true })}
                            required/>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <div className="mb-8">
                                <p className="text-[17px] text-[#454545] font-[600] mb-2">Category*</p>

                                <select defaultValue={category} {...register('category', { required: true })} className="px-4 py-4 w-full focus:outline-none border focus:border mx-auto rounded-[3px] bg-[#F6F6F6]" >
                                    <option disabled value="default" >Select a Category</option>
                                    <option value="salad">Salad</option>
                                    <option value="pizza">Pizza</option>
                                    <option value="soup">Soup</option>
                                    <option value="dessarts">Dessarts</option>
                                    
                                </select>

                            </div>

                            <div className="mb-8">
                                <p className="text-[17px] text-[#454545] font-[600] mb-2">Price*</p>
                                <input type="text" className="px-4 py-4 w-full focus:outline-none border focus:border mx-auto rounded-[3px] bg-[#F6F6F6]" defaultValue={price}
                                placeholder="Price"
                                {...register('price', { required: true })} />
                            </div>
                            
                        </div>

                        <div className="mb-8">
                            <p className="text-[17px] text-[#454545] font-[600] mb-2">Recipe Details*</p>

                            <textarea name="" className="px-4 py-6 w-full focus:outline-none border focus:border h-48 mx-auto rounded-[3px] bg-[#F6F6F6] resize-none" placeholder="Recipe Details"   defaultValue={recipe} {...register('recipe')} ></textarea>
                        </div>


                        <div className="mb-8">
                        
                            <input type="file" {...register('image', { required: true })}  className="px-4 py-4 w-full mx-auto border bg-[#F6F6F6] focus:outline-none  focus:border rounded-[3px] "/>
                        </div>

                        <div className=' my-5'>
                            <button
                                type='submit'
                                className='flex items-center text-center gap-2 px-8 py-3 rounded-sm bg-gradient-to-r from-[#7b551d] to-[#b99f75] text-white ' >
                                Update Recipe Details
                            </button>
                        </div>

                    </form>

                </div>
            </section>

        </main>
    );
};

export default UpdateItem;