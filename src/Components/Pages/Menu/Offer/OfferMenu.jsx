
import { Link } from "react-router-dom";

import OfferItem from "./OfferItem";
import UseMenu from "../../../Hooks/useMenu";



const OfferMenu = () => {

    const [menus] = UseMenu();
    const popular = menus.filter(item => item.category === 'offered' );


    return (
        <div>
            <div className="text-center mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Do not miss---</p>
                <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> TODAYS OFFER </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 ">
                
                {
                    popular.map(item => <OfferItem key={item._id} item={item} ></OfferItem> )
                }
                
            </div>

            <div className="text-center">
                <Link to="/shop">
                    <button className="px-14 py-3 rounded-md border shadow-inner shadow-pink-300">Order Your Favourite Food</button>
                </Link>
            </div>

        </div>
    );
};

export default OfferMenu;