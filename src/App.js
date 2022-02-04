
import { useState } from 'react';
import './App.css';

function App() {

  const [movies, setMovies] = useState([]);

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
