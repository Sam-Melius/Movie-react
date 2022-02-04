
import { useState } from 'react';
import './App.css';
import Movie from './Movie';
import MovieForm from './MovieForm';
import MovieList from './MovieList';

function App() {

  const [movies, setMovies] = useState([]);
  const [titleForm, setTitleForm] = useState('');
  const [directorForm, setDirectorForm] = useState('');
  const [yearForm, setYearForm] = useState('');
  const [colorForm, setColorForm] = useState('');

  function addMovie(newMovie) {
    const updateMovies = [...movies, newMovie];
    setMovies(updateMovies);
  }

  function deleteMovie(title) {
    const index = movies.findIndex(movie => movie.title === title);
    movies.splice(index, 1);
    setMovies([...movies]);
  }

  return (
    <div className="App">
      <div>
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
      <MovieList movies={movies}
        deleteMovie={deleteMovie} />
    </div>
  );
}

export default App;
