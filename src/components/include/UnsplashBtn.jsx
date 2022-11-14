import React from "react";

const UnsplashBtn = ({ onSearch }) => {

  const onClick1 = () => {
    onSearch("see");
  }
  const onClick2 = () => {
    onSearch("dog");
  }
  const onClick3 = () => {
    onSearch("nature");
  }
  const onClick4 = () => {
    onSearch("neon");
  }
  const onClick5 = () => {
    onSearch("people");
  }
  const onClick6 = () => {
    onSearch("winter");
  }

  return (
    <section className="unsplashBtn__cont">
      <div className="container">
        <div className="unsplashBtn__inner">
          <button type="submit" onClick={onClick1}> sea</button>
          <button type="submit" onClick={onClick2}> dog</button>
          <button type="submit" onClick={onClick3}> nature</button>
          <button type="submit" onClick={onClick4}> neon</button>
          <button type="submit" onClick={onClick5}> people</button>
          <button type="submit" onClick={onClick6}> winter</button>
        </div>
      </div>
    </section>
  );
};

export default UnsplashBtn