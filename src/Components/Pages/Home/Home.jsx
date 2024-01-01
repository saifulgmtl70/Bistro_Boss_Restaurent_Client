import Food_Image_Slider from "./Food_Image_Slider";
import Home_Slider from "./Home_Slider";
import './Home.css';

import Recommend from "./Recommend";
import Fetaured from "./Fetaured";
import Review from "./Review/Review";

import { Helmet } from 'react-helmet-async';
import OurMenu from "./OurMenu";

const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Bistro Boss | Home </title>
                {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
            </Helmet>
            <section>
                <Home_Slider></Home_Slider>
            </section>

            <section className="px-12 py-10">
                <Food_Image_Slider></Food_Image_Slider>
            </section>

            <section className="px-0 lg:px-12 py-10">
                <div className="w-full lg:w-11/12 bg_banner mx-auto">
                    <div className="bg-white lg:w-11/12 h-auto lg:h-[300px] space-y-6 rounded-sm lg:mx-auto mx-4 px-6 py-10 text-center ">
                        <h2 className="text-[44px] mt-3">Bistro Boss</h2>
                        <p className="text-[17px] w-auto lg:w-8/12 mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    </div>
                </div>
            </section>

            <section className="px-12 py-12">
                <OurMenu></OurMenu>
            </section>

            <section className="px-4 lg:px-12 py-10">
                <div className="w-full lg:w-10/12 bg-[#151515] space-y-5 py-5 mx-auto">
                    <h3 className="text-white text-[45px] text-center mt-10">Call Us: +88 0192345678910</h3>
                </div>
            </section>


            <section className="px-12 py-10">
                <Recommend></Recommend>
            </section>


            <section className=" py-10">
                <Fetaured></Fetaured>
            </section>

            

            <section className="px-12 py-10">
                <Review></Review>
            </section>

        </main>
    );
};

export default Home;