import React from 'react';

export default function Movie({
  title,
  director,
  year,
  color
}) {
  return <div className='movie' style={{ backgroundColor: color }}>
    <h2>{title}</h2>
    <p>{director}</p>
    <p>{year}</p>
  </div>;
}
