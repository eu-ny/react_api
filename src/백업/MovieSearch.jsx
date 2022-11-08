import React from "react";

const MovieSearch = () => {

    const onKeyPress = () => {}

    return (
        <div className="movie__search">
            <div className="container">
                <h2>search</h2>
                <input
                    // ref={inputRef}
                    type="search"
                    placeholder="검색어를 입력하세요!"
                    onKeyPress={onKeyPress}
                />
                <button type="submit">검색</button>
            </div>
        </div>
    );
};

export default MovieSearch;
