// import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Home.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';



const Food_Image_Slider = () => {

    

    return (
        <div>
            <div className="text-center mt-10 mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---From 11:00am to 10:00pm---</p>

                <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto">Order Online</h2>
            
            </div>

            <div className="w-11/12 mx-auto">
               
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper" >

                    <SwiperSlide className="relative">
                        <img src="https://i.ibb.co/nLf3Vj9/slide1.jpg" alt="" />
                        
                        <h3 className="text-[21px] absolute uppercase block text-white bottom-10">Salads</h3>
                    </SwiperSlide>

                    <SwiperSlide className="relative">
                        <img src="https://i.ibb.co/55f4Hy9/slide2.jpg" alt="" />
                        <h3 className="text-[21px] absolute uppercase block text-white bottom-10">Soups</h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://i.ibb.co/g4fP3q8/slide3.jpg" alt="" />
                        <h3 className="text-[21px] absolute uppercase block text-white bottom-10">Pizzas</h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative">
                        <img src="https://i.ibb.co/SvvTTwG/slide4.jpg" alt="" />
                        <h3 className="text-[21px] absolute uppercase block text-white bottom-10">Dessarts</h3>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/nLf3Vj9/slide5.jpg" alt="" />
                        <h3 className="text-[21px] absolute uppercase block text-white bottom-10">Salads</h3>
                    </SwiperSlide>
     
                </Swiper>
            </div>

        </div>
    );
};

export default Food_Image_Slider;