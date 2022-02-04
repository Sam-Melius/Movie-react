import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, deleteMovie }) {
  return <div className='movie-list'>
    {movies.map((movie, i) => <Movie
      key={movie.title + i} {...movie}
      deleteMovie={deleteMovie} />)}
  </div>;
}
