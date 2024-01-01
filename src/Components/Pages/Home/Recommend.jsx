import food from '../../../assets/food.png';

const Recommend = () => {
    return (
        <div className="mb-8 w-full lg:w-11/12 mx-auto recomend">
            <div className="text-center mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Should Try---</p>
                <h2 className="text-[30px] uppercase w-full lg:w-4/12 border-b-4 pb-3 mx-auto"> CHEF RECOMMENDS </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

                <div className="card card-compact w-full lg:w-96 bg-base-100 overflow-hidden shadow-xl rounded-sm">
                    <div  className=" hover:relative overflow-hidden duration-1000 " >
                        <img src={food} alt="Shoes"  className=" overflow-hidden hover:scale-105 duration-1000 ease-in-out  w-full object-cover "/>
                    </div>
                    <div className="text-center px-8 py-4 space-y-3">
                        <h2 className=" text-[24px] text-[#151515] text-center">Caeser Salad</h2>
                        <p className='text-[#151515] text-[16px]'> Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets </p>
                        <div className="card-actions justify-center">
                            <button className=" px-12 py-3 rounded-md text-[#CAA755] border border-[#CAA755] bg-[#F2F2F2] hover:bg-[#1F2937] hover:border-0 delay-500 transition-all uppercase font-semibold">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact overflow-hidden w-full lg:w-96  bg-base-100 shadow-xl rounded-sm">
                    <div  className=" hover:relative overflow-hidden duration-1000 " >
                        <img src={food} alt="Shoes"  className=" overflow-hidden hover:scale-105 duration-1000 ease-in-out  w-full object-cover "/>
                    </div>
                    <div className="text-center px-8 py-4 space-y-3">
                        <h2 className=" text-[24px] text-[#151515] text-center">Caeser Salad</h2>
                        <p className='text-[#151515] text-[16px]'> Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets </p>
                        <div className="card-actions justify-center">
                            <button className=" px-12 py-3 rounded-md text-[#CAA755] border border-[#CAA755] bg-[#F2F2F2] hover:bg-[#1F2937] hover:border-0 delay-500 transition-all uppercase font-semibold">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="card card-compact overflow-hidden  w-full lg:w-96 bg-base-100 shadow-xl rounded-sm">
                    <div  className=" hover:relative overflow-hidden duration-1000 " >
                        <img src={food} alt="Shoes"  className=" overflow-hidden hover:scale-105 duration-1000 ease-in-out  w-full object-cover "/>
                    </div>
                    <div className="text-center px-8 py-4 space-y-3">
                        <h2 className=" text-[24px] text-[#151515] text-center">Caeser Salad</h2>
                        <p className='text-[#151515] text-[16px]'> Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets </p>
                        <div className="card-actions justify-center">
                            <button className=" px-12 py-3 rounded-md text-[#CAA755] border border-[#CAA755] bg-[#F2F2F2] hover:bg-[#1F2937] hover:border-0 delay-500 transition-all uppercase font-semibold">Add to Cart</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Recommend;