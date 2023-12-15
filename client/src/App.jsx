import axios from 'axios';
import { useEffect, useState } from 'react';
import './assets/styles/app.css';
import SearchIcon from './assets/images/search.svg';

// f6b216c4

function App() {
  const API_URL = `http://www.omdbapi.com/?apikey=f6b216c4`;
  const movie1 = {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BZGY5MDI5Y2ItNDk2MS00NzJlLWJmMTEtNGYwM2Y4ZjU2MjIyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
    Title: 'Anaconda 3: Offspring',
    Type: 'movie',
    Year: '2008',
    imdbID: 'tt1137996',
  };
  async function searchMovies(title) {
    const res = await axios.get(`${API_URL}&s=${title}`);
    const data = await res.data.Search;
    console.log(data);
  }
  useEffect(() => {
    searchMovies('Anaconda');
  });
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
        <div className="container">
          <div className="movie">
            <div>
              <p>{movie1.year}</p>
            </div>
            <div>
              <img
                src={
                  movie1.Poster != 'N/A'
                    ? movie1.Poster
                    : 'https://via.placeholder.com/400'
                }
                alt={movie1.title}
              />
            </div>
            <div>
              <span>{movie1.Type}</span>
              <h3>{movie1.Title}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
