import React from "react";

const UnsplashInner = ({ image }) => {
    return (
        <li>
            <a href={`https://unsplash.com/photos/${image.id}`}>
                <img
                    src={image.urls.regular}
                    alt={image.urls.alt_description}
                />
            </a>
        </li>
    );
};

function UnsplashCont({ images }) {
    return (
        <section className="cont__unsplash">
            <div className="container">
                <div className="unsplash__inner">
                    <ul>
                        {images.map((images, index) => (
                            <UnsplashInner key={index} image={images} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default UnsplashCont;
