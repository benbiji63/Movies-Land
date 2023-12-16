import axios from 'axios';
import { useEffect, useState } from 'react';

import MovieCard from './components/MovieCard';

import './assets/styles/app.css';
import SearchIcon from './assets/images/search.svg';

const API_URL = `http://www.omdbapi.com/?apikey=f6b216c4`;
// f6b216c4
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  

  const searchMovies = async title => {
    const res = await axios.get(`${API_URL}&s=${title}`);
    const data = await res.data;
    setMovies(movieList => data.Search || []);
    console.log(data.Search);
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
            value={searchTerm}
            onChange={e => {setSearchTerm(e.target.value)}}
          />
          <img src={SearchIcon} alt="search" onClick={() => {searchMovies(searchTerm)}} />
        </div>
        {movies.length > 0 ? (
          <div className="container">
            {movies.map(movie => {
              return <MovieCard movie={movie} />;
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
