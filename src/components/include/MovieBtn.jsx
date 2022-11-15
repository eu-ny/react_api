import React from "react";

const MovieBtn = ({ onSearch }) => {

  const onClick1 = () => {
    onSearch("cook");
  }
  const onClick2 = () => {
    onSearch("dog");
  }
  const onClick3 = () => {
    onSearch("music");
  }
  const onClick4 = () => {
    onSearch("game");
  }
  const onClick5 = () => {
    onSearch("news");
  }
  const onClick6 = () => {
    onSearch("winter");
  }

  return (
    <section className="unsplashBtn__cont">
      <div className="container">
        <div className="unsplashBtn__inner">
          <button type="submit" onClick={onClick1}> cook</button>
          <button type="submit" onClick={onClick2}> dog</button>
          <button type="submit" onClick={onClick3}> music</button>
          <button type="submit" onClick={onClick4}> game</button>
          <button type="submit" onClick={onClick5}> news</button>
          <button type="submit" onClick={onClick6}> winter</button>
        </div>
      </div>
    </section>
  );
};

export default MovieBtn