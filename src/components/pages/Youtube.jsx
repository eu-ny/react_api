import React from "react";
import Header from "../layout/Header";
import Title from "../layout/Title";
import Contents from "../layout/Contents";
import YoutubeCont from "../include/YoutubeCont";
import YoutubeSlider from "../include/YoutubeSlider";
import YoutubeSearch from "../include/YoutubeSearch";
import Footer from "../layout/Footer";
import Contact from "../layout/Contact";
import { useState, useEffect } from 'react';

const Youtube = () => {
    const [youtube, setyoutube] = useState([]);
    const [random, setrandom] = useState([]);

    const search = async (query) => {
      //클릭한 키워드를 매개변수로 전달 , 자바스크립트로 데이터 가져오는 방법
      await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyARpIi7wYT1We05k6mliszOp-gkXK-eR2c&part=snippet&maxResults=30&type=video&q=${query}`)
  
      .then((response) => response.json())
    //   .then(result => console.log(result.items))
      .then((result) => setyoutube(result.items))
      .catch(error => console.log(error))
    };

    useEffect(() => {
        fetch(
            // "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyARpIi7wYT1We05k6mliszOp-gkXK-eR2c&part=snippet&maxResults=30&type=video&q=music")
            "https://eu-ny.github.io/react_api/src/utils/youtube.json")
            .then((response) => response.json())
            // .then(result => console.log(result))
            .then((result) => setyoutube(result.items))
            .catch((error) => console.log("error", error));

        fetch(
            // "https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyARpIi7wYT1We05k6mliszOp-gkXK-eR2c&part=snippet&maxResults=30&type=video&q=music")
            "https://eu-ny.github.io/react_api/src/utils/youtube.json")
            .then((response) => response.json())
            // .then(result => console.log(result))
            .then((result) => setrandom(result.items))
            .catch((error) => console.log("error", error));
    }, []);

    return (
        <>
            <Header />
            <Title title={["Youtube", "Youtube api"]} />
            <YoutubeSlider random={random} />
            <YoutubeSearch onSearch={search} />
            <YoutubeCont youtube={youtube} />
            <Contents />
            <Contact />
            <Footer />
        </>
    );
};

export default Youtube;