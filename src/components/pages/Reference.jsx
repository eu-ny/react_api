import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ReferCont from "../include/ReferCont";
import Contact from "../layout/Contact";

const Reference = () => {
    return (
        <>
            <Header />
            <Contents>
                <Title title={["referece", "referece api"]} />
                <ReferCont />
                <Contact />
            </Contents>
            <Footer />
        </>
    );
};

export default Reference;