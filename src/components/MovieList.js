import React from 'react';
import Movie from './Movie';

const MovieList = props => {

  return (
    <div>
      <p>This is the movie list - {props.title}</p>
      {props.data.map(movie => <Movie movie={movie}  />)}
    </div>
  )
}

export default MovieList;