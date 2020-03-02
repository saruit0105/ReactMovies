import React from 'react';
import MovieList from './components/MovieList';
import data from './data';


const App = () => {

  return (
    <div>
      <MovieList title="Tommys Movie List" data={data} />
    </div>
  )
}

export default App;
