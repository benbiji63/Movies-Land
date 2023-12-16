import axios from 'axios';
import { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard';

import './assets/styles/app.css';
import SearchIcon from './assets/images/search.svg';

const API_URL = `http://www.omdbapi.com/?apikey=f6b216c4`;
// f6b216c4
function App() {
  const [movies, setMovies] = useState([]);

  const searchMovies = async title => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
    console.log(data.Search);
    console.log(movies);
  };
  useEffect(() => {
    searchMovies('Superman');
  }, []);

  return (
    <>
      <div className="app">
        <h1>MovieLand</h1>
        <div className="search">
          <input
            type="text"
            placeholder="Search For Movies"
            value="Superman"
            onChange={() => {}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {}} />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map(movie => {
              <MovieCard movie={movie} />;
            })}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
