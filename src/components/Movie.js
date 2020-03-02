import React from 'react';

const Movie = props => {
  return (
    <div>
      <p>{props.movie.title}</p>
      <p>{props.movie.director}</p>
      <p>{props.movie.genre}</p>
    </div>
  )
}

export default Movie;