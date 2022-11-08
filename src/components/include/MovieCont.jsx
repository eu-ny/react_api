import React from "react";

function MovieItem(props) {
    return (
        <li>
            <a href={`https://www.themoviedb.org/movie/${props.movies.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`}
                    alt={props.movies.title}
                />

                <em>
                    <span className="title">{props.movies.title}</span>
                    <span className="star">{props.movies.vote_average}</span>
                </em>
            </a>
        </li>
    );
}

const MovieCont = (props) => {
    return (
        <section className="cont_movie">
            <div className="container">
                <div className="movie__inner">
                    <ul>
                        {props.movies.map((movies, index) => (
                            <MovieItem key={index} movies={movies} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MovieCont;
