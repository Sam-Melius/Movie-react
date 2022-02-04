
import { useEffect, useState } from 'react';
import './App.css';

import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {

  const [movies, setMovies] = useState([]);
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [colorForm, setColorForm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(null);
  const [newFilter, setNewFilter] = useState('');

  function addMovie(newMovie) {
    const updateMovies = [...movies, newMovie];
    setMovies(updateMovies);
  }

  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);
    movies.splice(index, 1);
    setNewFilter('');

    setMovies([...movies]);
  }

  useEffect(() => {
    const filteredMovies = movies.filter(movie => movie.title.includes(newFilter));
    setFilteredMovies(filteredMovies);
  }, [newFilter, movies]);

  return (
    <div className="App">
      <div className='main-form'>
        <MovieForm
          titleForm={titleForm}
          setTitleForm={setTitleForm}
          directorForm={directorForm}
          setDirectorForm={setDirectorForm}
          yearForm={yearForm}
          setYearForm={setYearForm}
          colorForm={colorForm}
          setColorForm={setColorForm}
          addMovie={addMovie} />
        
      </div>
      <div>
        Filter Movies
        <input value={newFilter} onChange={(e) => setNewFilter(e.target.value)} />
      </div> 
      <div className='main-list'>
        <h1>List of Motion Pictures</h1>
        <MovieList movies={filteredMovies ? filteredMovies : movies}
          deleteMovie={deleteMovie} />
      </div> 
    </div>
  );
}

export default App;
