import './Home.css'

const Fetaured = () => {
    return (
        <div className='fetaured_bg  mx-auto text-white pt-8 my-20'>
            <div className="text-center px-5 lg:px-0 font-extrabold mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Should Try---</p>
                <h2 className="text-[30px] text-[#fff] uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> CHEF RECOMMENDS </h2>
            </div>

            <div className="md:flex justify-center items-center gap-12 bg-slate-500 bg-opacity-60 px-20">
                <div>
                    <img src="https://i.ibb.co/R72XgvX/featured.jpg" alt="" />
                </div>
                <div className="text-white space-y-3">
                    <p className='text-[23px]'>Aug 20, 2029</p>
                    <p className="uppercase text-[23px]">Where can i get some?</p>
                    <p className='text-[15px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate expedita hic dolorem, iusto vel suscipit nam excepturi debitis magnam nostrum! Ut eum dignissimos culpa doloremque eligendi consectetur blanditiis laboriosam fugiat ea quia similique quam nisi reprehenderit numquam magnam nemo vitae cupiditate, atque maiores dicta minus pariatur. Perspiciatis nobis vero quas?</p>
                    <button className="px-12 py-3 bg-transparent hover:bg-red-500 hover:text-white transition-all delay-300 border-b-2 rounded-b-xl">Order Now</button>
                </div>
            </div>

        </div>
    );
};

export default Fetaured;