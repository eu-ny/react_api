import React from "react";
import { useState, useEffect } from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import MovieCont from "../include/MovieCont";
import MovieList from "../include/MovieList";
import MovieBtn from "../include/MovieBtn";
import MovieSearch from "../include/MovieSearch";
import Contact from "../layout/Contact";

const Movie = () => {
	const [movies, setMovies] = useState([]);
	// 04. 콜백함수를 통해 밑에 setLists에 저장한 값을 다시 lists로 보내고 저장한 뒤 
	const [lists, setLists] = useState([]);

	const search = async (query) => {
		//클릭한 키워드를 매개변수로 전달 , 자바스크립트로 데이터 가져오는 방법
		await fetch(`https://api.themoviedb.org/3/search/movie?api_key=25ea29c228b2fc90f5b08707dd1c8828&query=${query}`)

		.then((response) => response.json())
		.then((result) => setMovies(result.results))
		.catch(error => console.log(error))
	};

	// 리엑트로 데이터 가져오는 방법
	useEffect(() => {
		fetch("https://api.themoviedb.org/3/search/movie?api_key=25ea29c228b2fc90f5b08707dd1c8828&query=marvel")
		.then((response) => response.json())
		.then((result) => setMovies(result.results))
		.catch(error => console.log(error))
	},[]);

	// 01. API 데이터를 가져오고
	useEffect(() => {
		fetch(`https://api.themoviedb.org/3/movie/popular?api_key=25ea29c228b2fc90f5b08707dd1c8828&language=en-US&page=1`)
		// 02. 가져온 데이터를 json으로 변환.
		.then((response) => response.json())
			// 03. json으로 변환된 데이터 값을 setLists에 저장보냄
		.then((result) => setLists(result.results))
		.catch(error => console.log(error))
	},[]);

    return (
        <>
            <Header />
			<Title title={["Movie", "Movie api"]} />
			{/* 05. MovieList에 매개변수로 값을 보냄  / 9. 데이터 뿌려준 후 정상으로 MovieList의 컨텐츠가 include 된다면 성공! */}
			<MovieList lists={lists} />
			<MovieSearch onSearch={search} />
			<MovieBtn onSearch={search} />
			<MovieCont movies={movies} />
			<Contact />
            <Contents />
            <Footer />
        </>
    );
};

export default Movie;
