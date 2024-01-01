import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const OurMenu = () => {

    const [menus, setMenus] = useState([]);

    useEffect(() =>{
        fetch('https://bistro-boss-restaurent-server-indol.vercel.app/menu')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter(item => item.category === 'popular');
            setMenus(popularItems)});
           
    },[])

    return (
        <div className="mb-8 w-full lg:w-11/12 mx-auto">
            <div className="text-center mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---Check it out---</p>
                <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> FROM OUR MENU </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                

                {
                    menus.map(item => <MenuItem key={item._id} item={item} ></MenuItem> )
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

export default OurMenu;