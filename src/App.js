import { useState, useEffect } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=565ea02c";

const App = () => {
  
  const [movies, setMovies] = useState([]);

  const searchMovie = async(title) => {
    const respones = await fetch(`${API_URL}&t=${title}`);
    const data = await respones.json();
    await setMovies(data.Search);
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
          value="static"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          onClick={() => {} }
        />
      </div>

      { movies?.length >= 0
        ? (
            <div className="container">
              <h2>Sorry No Movie Found</h2>
            </div>
        ) : (
            <div className="empty">
              {movies.map()}
                <MovieCard movies={movies}/>
            </div>
          )
      };
      {/* {console.log("lengh is:" + movies.length)}
      <div className="container">
          <MovieCard movie = {movies}/>
      </div> */}
    </div>
  );
}

export default App
