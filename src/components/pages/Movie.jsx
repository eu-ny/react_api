import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";

const Movie = () => {
    const [movies, setMovies] = useState([]);
	useEffect(() => {
		fetch(
			"https://api.themoviedb.org/3/search/movie?api_key=25ea29c228b2fc90f5b08707dd1c8828&query=marble&page=1"
		)
			.then((response) => response.json())
			.then((result) => setMovies(result.data.results))
			.catch((error) => console.log("error", error));
	},[])

    return (
        <>
            <Header />
			<Title title={["Movie", "Movie api"]} />
			<MovieCont movies={movies} />
            <Contents />
            <Footer />
        </>
    );
};

export default Movie;
