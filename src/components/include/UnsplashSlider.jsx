import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const UnsplashSliderItem = ({ random }) => {
    return (
        <a href={`https://www.themoviedb.org/movie/${random.id}`}>
            <figure className="imgBox">
                <span className="rank">{random.rank + 1}</span>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${random.poster_path}`}
                    alt={random.title}
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
        <div className="movie__pop">
            <div className="container">
                <div className="movieList__inner">
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={false}
                        modules={[EffectCoverflow, Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {random.map((list, index) => (
                            <SwiperSlide className="movieRank">
                                <UnsplashSliderItem
                                    key={index}
                                    rank={index}
                                    id={list.id}
                                    poster_path={list.poster_path}
                                    title={list.title}
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
