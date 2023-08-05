import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com?apikey=565ea02c";

const App = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState("");

  
  const searchMovie = async(title) => {
    const respones = await fetch(`${API_URL}&s=${title}`);
    const data = await respones.json();
    console.log(data.Search);
    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovie("superman")
  },[]);

  return (
    <div className="app">
      <h1>My Movie</h1>

      <div className="search">
        <input
          placeholder="search for movie"
          value={searchPhrase}
          onChange={(e) => { setSearchPhrase(e.target.value) }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => {
            searchMovie(searchPhrase);
          }}
        />
      </div>

      {movies?.length > 0
        ? (
            <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie}/>
        ))}
            </div>
        ) : (
            <div className="empty">
              <h2>Sorry No Movie Found</h2>
            </div>
        )
      }

    </div>
  );
}

export default App;
