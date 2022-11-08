import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// 08. 밑에서 가져온 데이터 컴포넌트 만들기.
const MovieListInfo = ({rank, id, poster_path, title}) => {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${id}`}>
                <div className="imgBox">
                    <span className="rank">{rank + 1}</span>
                    <div className="movieListimgBox">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                            alt={title}
                        />
                    </div>
                </div>
                <em>
                    <span className="title">{title}</span>
                </em>
            </a>
        </li>
    );
}

// 06. 매개변수에 담긴 값을 가져옴(props)
const MovieList = ({lists}) => {
    return (
        <div className="movie__pop">
            <div className="container">
                <div className="movieList__inner">
                    {/* 07. 매겨변수로 가져온 데이터 값 알맞게 뿌려주기 */}
                    {/* <ul className="movieRank">
                        {props.lists.map((lists, index) => (
                            <MovieListInfo key={index} rank={index} list={lists}/>
                        ))}
                    </ul> */}
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
                            {lists.map((list, index) => (
                            <SwiperSlide className="movieRank">
                                <MovieListInfo
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

export default MovieList;
