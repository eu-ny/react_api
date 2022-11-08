import React from 'react';

function MovieBox(props){
    return <div>{props.id}</div>;
}

const MovieCont = (props) => {
    // console.log({movies})
  return (
    <section className='cont_movie'>
        <div className="container">
            <div className="movie__inner">
                <div className="movie__box">
                    {props.movies.map((movie, index) => (
                        <MovieBox key={index} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default MovieCont