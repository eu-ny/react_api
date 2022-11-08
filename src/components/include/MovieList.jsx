import React from "react";

// 08. 밑에서 가져온 데이터 컴포넌트 만들기.
function MovieListInfo(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.list.id}`}>
                <div className="imgBox">
                    <span className="rank">{props.rank + 1}</span>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${props.list.poster_path}`}
                        alt={props.list.title}
                    />
                </div>
                <em>
                    <span className="title">{props.list.title}</span>
                </em>
            </a>
        </li>
    );
}

// 06. 매개변수에 담긴 값을 가져옴(props)
const MovieList = (props) => {
    return (
        <div className="movie__pop">
            <div className="container">
                <div className="movieList__inner">
                    {/* 07. 매겨변수로 가져온 데이터 값 알맞게 뿌려주기 */}
                    <ul>
                        {props.lists.map((lists, index) => (
                            <MovieListInfo key={index} rank={index} list={lists}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default MovieList;
