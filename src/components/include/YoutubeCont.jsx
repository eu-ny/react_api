import React from "react";

const YoutubeItem = ({youtube}) => {
    return (
        <li>
            <a href={`https://www.youtube.com/watch?v=${youtube.id.videoId}`}>
                <img src={youtube.snippet.thumbnails.medium.url} alt="" />
                <h2>{youtube.snippet.title}</h2>
            </a>
        </li>
    );
};

const YoutubeCont = ({youtube}) => {
    return (
        <section className="cont__youtube">
            <div className="container">
                <div className="youtube__inner">
                    <ul>
                        {youtube.map((youtube, index) => (
                            <YoutubeItem key={index} youtube={youtube} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default YoutubeCont;
