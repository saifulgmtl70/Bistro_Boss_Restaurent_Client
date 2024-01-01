import { Helmet } from 'react-helmet-async';
import './OrderFood.css';
import OrderFoodBanner from './OrderFoodBanner';
import FoodItems from './FoodItems/FoodItems';

const OrderFood = () => {
    return (
        <main className='bg_font'>
            <Helmet>
                <title>Bistro Boss | Order Food </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>

            <section>
                <OrderFoodBanner></OrderFoodBanner>
            </section>

            <section className='px-10 lg:px-16 py-12'>
                <FoodItems></FoodItems>
            </section>
            
        </main>
    );
};

export default OrderFood;