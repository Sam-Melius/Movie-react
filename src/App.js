
import { useState } from 'react';
import './App.css';
import MovieForm from './MovieForm';

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

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
