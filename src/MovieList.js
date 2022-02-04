import React from 'react';
import Movie from './Movie';

export default function MovieList({ movies, deleteMovie }) {
  return <div>
    {movies.map((movie, i) => <Movie
      key={movie.title + i} {...movie}
      deleteMovie={deleteMovie} />)}
  </div>;
}
