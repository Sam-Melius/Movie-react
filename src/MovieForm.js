import React from 'react';

export default function MovieForm({ 
  addMovie,
  titleForm,
  setTitleForm,
  directorForm,
  setDirectorForm,
  yearForm,
  setYearForm,
  colorForm,
  setColorForm
}) {

  function handleSubmit(e) {
    e.preventDefault();
    const movie = {
      title: titleForm,
      director: directorForm,
      year: yearForm,
      color: colorForm
    };
    addMovie(movie);
    
  }

  return <div></div>;
}

