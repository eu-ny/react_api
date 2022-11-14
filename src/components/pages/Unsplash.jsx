import React from 'react';
import Header from '../layout/Header';
import Title from "../layout/Title";
import UnsplashSlider from "../include/UnsplashSlider";
import UnsplashSearch from "../include/UnsplashSearch";
import UnsplashBtn from "../include/UnsplashBtn";
import UnsplashCont from "../include/UnsplashCont";
import Contents from '../layout/Contents';
import Footer from '../layout/Footer';
import Contact from "../layout/Contact";
import { useState, useEffect } from 'react';

const Unsplash = () => {
  const [images, setImages] = useState([]);
  const [random, setRandom] = useState([]);

	const search = async (query) => {
		//클릭한 키워드를 매개변수로 전달 , 자바스크립트로 데이터 가져오는 방법
		await fetch(`https://api.unsplash.com/search/photos/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&query=${query}&per_page=30`)

		.then((response) => response.json())
    // .then(result => console.log(result.results))
		.then((result) => setImages(result.results))
		.catch(error => console.log(error))
	};

  useEffect(() => {
      fetch("https://api.unsplash.com/photos/random/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&count=30&query=sky")
          .then(response => response.json())
          // .then(result => console.log(result))
          .then(result => setImages(result))
          .catch(error => console.log('error', error));

      fetch("https://api.unsplash.com/photos/random/?client_id=jnUMeM7JBrJfpAkriD3zZI7Wjq2waN6SAvJeqJNnB68&count=10")
          .then(response => response.json())
          // .then(result => console.log(result))
          .then(result => setRandom(result))
          .catch(error => console.log('error', error));
  }, [])

  return (
    <>
        <Header />
        <Title title={["Unsplash", "Unsplash api"]} />
        <UnsplashSlider random={random} />
        <UnsplashSearch onSearch={search} />
        <UnsplashBtn onSearch={search} />
        <UnsplashCont images={images} />
        <Contents />
        <Contact />
        <Footer />
    </>
  )
}

export default Unsplash