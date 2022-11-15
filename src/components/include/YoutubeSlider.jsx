import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const YoutubeSliderItem = ({ random }) => {
    return (
        <a href={`https://www.youtube.com/watch?v=${random.videoId}`}>
            <figure className="slider">
                <img src={random.snippet.thumbnails.medium.url} alt="" />
            </figure>
        </a>
    );
};

const YoutubeSlider = ({ random }) => {
    return (
        <section className="cont__youtube">
            <div className="container">
                <div className="youtubeSlider__inner">
                    <Swiper
                        // pagination={{
                        //     clickable: false,
                        // }}
                        spaceBetween={30}
                        slidesPerView={3}
                        centeredSlides={true}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {random.map((random, index) => (
                            <SwiperSlide key={index}>
                                <YoutubeSliderItem
                                    random={random}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default YoutubeSlider;
