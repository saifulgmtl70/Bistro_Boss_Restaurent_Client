import { Link } from "react-router-dom";
import UseMenu from "../../../Hooks/useMenu";
import PizzaItem from "./PizzaItem";


const Pizza = () => {

    const [menus] = UseMenu();
    const pizzas = menus.filter(item => item.category === 'pizza' );

    return (
        <div>
            <div className=" bg_dessarts ">
                <div className="bg-[#0E0D0E] text-[#fff] bg-opacity-50 lg:w-8/12 h-auto lg:h-[300px] space-y-6 rounded-sm lg:mx-auto mx-10 px-4 py-10 text-center ">
                    <h2 className="text-[44px] mt-3">PIZZA</h2>
                    <p className="text-[17px] w-auto lg:w-8/12 mx-auto">Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 px-12 py-20">
                
                {
                    pizzas.map(item => <PizzaItem key={item._id} item={item} ></PizzaItem> )
                }
                
            </div>

            <div className="text-center mb-12">
                <Link to="/shop">
                    <button className="px-14 py-3 rounded-md border shadow-inner shadow-pink-300">Order Your Favourite Food</button>
                </Link>
            </div>

        </div>
    );
};

export default Pizza;