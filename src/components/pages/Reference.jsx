import React from "react";
import {useState, useEffect} from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

//클래스형 컴퍼넌트 / 함수형 컴퍼넌트 (함수형이 더 쉽기 때문에 사용을 추천) --> 클래스향의 장점을 가져온 리액트 훅(함수형 컴퍼넌트 사용 가능)이 생김. 기본적으로 사용할 줄 알아야한다.(김치격임.)
//클래스형 컴퍼넌트 / 함수형 컴퍼넌트 --> 리액트 훅
//변수 : 저장, 추가, 변경 --> 리액트 훅에서 자동으로 변경해준다.

//리액트 훅 기능
const Reference = () => {
    const [references, setReference] = useState([]);

    useEffect(() => {
          fetch("https://webstoryboy.github.io/react2022/src/assets/json/refer.json")
            .then(response => response.json())
            // .then(result => console.log(result.data.htmlRefer))
            .then(result => setReference(result.data.htmlRefer))
            .catch(error => console.log('error', error));
    }, [])

    return (
        <>
            <Header />
            <Contents>
                <Title title={["referece", "referece api"]} />
                <ReferCont references={references} />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;
