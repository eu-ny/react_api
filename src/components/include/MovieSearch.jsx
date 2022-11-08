import React, { useRef } from "react";

const MovieSearch = ({onSearch}) => {

    const inputRef = useRef();

    const handleSearch = () => {
        const value = inputRef.current.value;
        onSearch(value);
    };

    const onKeyPress = (event) => {
        if(event.key === "Enter"){
            handleSearch();
        }
    }

    const onClick = () => {
        // console.log("click");
        handleSearch();
    }

    return (
        <div className="movie__search">
            <div className="container">
                <h2>search</h2>
                <input
                    ref={inputRef}
                    type="search"
                    placeholder="검색어를 입력하세요!"
                    onKeyPress={onKeyPress}
                />
                <button type="submit" onClick={onClick}>검색</button>
            </div>
        </div>
    );
};

export default MovieSearch;
