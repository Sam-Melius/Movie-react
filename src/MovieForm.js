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
    setTitleForm('');
    setDirectorForm('');
    setYearForm('');
    setColorForm('');  
  }

  return <form onSubmit={handleSubmit}>
    <label>
          Title
      <input value={titleForm} onChange={e => setTitleForm(e.target.value)}/>
    </label>
    <label>
          Director
      <input value={directorForm} onChange={e => setDirectorForm(e.target.value)}/>
    </label>
    <label>
          Year
      <input value={yearForm} onChange={e => setYearForm(e.target.value)}/>
    </label>
    <label>
        Color
      <select value={colorForm} onChange={e => setColorForm(e.target.value)}>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='red'>Red</option>
        <option value='purple'>Purple</option>
        <option value='orange'>Orange</option>
      </select>
    </label>
    <button>Add Movie</button>
  </form>;
}

