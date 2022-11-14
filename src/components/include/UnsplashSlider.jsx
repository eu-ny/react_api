import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const UnsplashSliderItem = ({ random }) => {
    return (
        <a href={`https://unsplash.com/photos/${random.id}`}>
            <figure className="imgBox">
                <img
                    src={random.urls.regular}
                    alt={random.urls.alt_description}
                />
            </figure>
            <em>
                <span className="title">{random.title}</span>
            </em>
        </a>
    );
};

const UnsplashSlider = ({ random }) => {
    return (
        <div className="Unsplash__pop">
            <div className="container">
                <div className="UnsplashList__inner">
                <Swiper
                        slidesPerView={3}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        navigation={true}
                        pagination={{ clickable: true }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                    >
                        {random.map((random, index) => (
                            <SwiperSlide>
                                <UnsplashSliderItem
                                    key={index}
                                    rank={index}
                                    random={random}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default UnsplashSlider;
