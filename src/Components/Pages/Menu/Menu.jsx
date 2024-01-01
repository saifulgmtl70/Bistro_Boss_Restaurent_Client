
import Menu_banner from "./Menu_banner";
import { Helmet } from 'react-helmet-async';
import OfferMenu from "./Offer/OfferMenu";
import Dessarts from "./Dessart/Dessarts";
import Pizza from "./Pizza/Pizzas";
import Salad from "./Salad/Salads";

import './Menu.css';
import Shoups from "./Soup/Shoups";

const Menu = () => {
    return (
        <main>
             <Helmet>
                <title>Bistro Boss | Menu </title>
                
            </Helmet>
            
            <section>
                <Menu_banner></Menu_banner>
            </section>
            
            <section className="px-12 py-10">
                <OfferMenu></OfferMenu>
            </section>

            <section >
                <Dessarts></Dessarts>
            </section>

            <section >
                <Pizza></Pizza>
            </section>

            <section >
                <Salad></Salad>
            </section>

            <section >
                <Shoups></Shoups>
            </section>

            
            
        </main>
    );
};

export default Menu;