import React from 'react';

export default function Movie({
  title,
  director,
  year,
  color,
  deleteMovie
}) {
  return <div className='movie' style={{ backgroundColor: color }}
    onClick={() => deleteMovie && deleteMovie(title)}>
    <h2>{title}</h2>
    <p>{director}</p>
    <p>{year}</p>
  </div>;
}
