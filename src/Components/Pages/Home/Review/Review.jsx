import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Review.css';

// import required modules
import { Pagination, Navigation, HashNavigation, Autoplay } from 'swiper/modules';

const Review = () => {

    const [ reviews, setReviews ] = useState([]);

    useEffect(() =>{
        fetch('reviews.json')
        .then(res => res.json())
        .then(data =>{
            
            setReviews(data)})
        
    },[]);


    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<span key={i}>&#9733;</span>); // Render a filled star
            } else {
                stars.push(<span key={i}>&#9734;</span>); // Render an empty star
            }
        }
        return stars;
    };



 

    
    
    

    return (
        <div className="mb-8 w-full lg:w-11/12 review mx-auto">
            <div className="text-center mb-10">
                <p className="text-[#F1B93E] text-[17px] w-full lg:w-3/12 border-b-4 pb-3 mx-auto mb-5">---What Our Clients Say---</p>
                <h2 className="text-[30px] uppercase w-full lg:w-3/12 border-b-4 pb-3 mx-auto"> TESTIMONIALS</h2>
            </div>

            <div>
                <Swiper
                    spaceBetween={30}
                    hashNavigation={{
                    watchState: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, HashNavigation, Autoplay]}
                    className="mySwiper"
                >

                    {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                            <div className="w-full px-10 lg:w-8/12 space-y-5">
                                <p className="text-[#CD9003] text-[25px] font-extrabold" >{renderStars(review.rating)}</p>
                                
                                <p className="text-[40px] text-gray-500"><FontAwesomeIcon icon={faQuoteLeft} /></p>

                                <p className="text-[16px]">{review.details}</p>
                                <h3 className="text-[24px] font-bold text-[#CD9003]">{review.name}</h3>
                                
                            </div>
                        </SwiperSlide>
                    ))}
                    
                </Swiper>
            </div>

        </div>
    );
};

export default Review;