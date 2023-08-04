import { useEffect } from "react";
import "./App.css"
import SearchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com?apikey=565ea02c";

const movie = {
  "Title": "Superman",
  "Year": "1978",
  "Rated": "PG",
  "Released": "15 Dec 1978",
  "Runtime": "143 min",
  "Genre": "Action, Adventure, Sci-Fi",
  "Director": "Richard Donner",
  "Writer": "Jerry Siegel, Joe Shuster, Mario Puzo",
  "Actors": "Christopher Reeve, Margot Kidder, Gene Hackman",
  "Plot": "An alien orphan is sent from his dying planet to Earth, where he grows up to become his adoptive home's first and greatest superhero.",
  "Language": "English",
  "Country": "United States, United Kingdom, Canada",
  "Awards": "Nominated for 3 Oscars. 17 wins & 23 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMzA0YWMwMTUtMTVhNC00NjRkLWE2ZTgtOWEzNjJhYzNiMTlkXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
  "Ratings": [
      {
          "Source": "Internet Movie Database",
          "Value": "7.4/10"
      },
      {
          "Source": "Rotten Tomatoes",
          "Value": "94%"
      },
      {
          "Source": "Metacritic",
          "Value": "82/100"
      }
  ],
  "Metascore": "82",
  "imdbRating": "7.4",
  "imdbVotes": "181,656",
  "imdbID": "tt0078346",
  "Type": "movie",
  "DVD": "01 Jan 2008",
  "BoxOffice": "$134,478,449",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}

const App = () => {

  const searchMovie = async(title) => {
    const respones = await fetch(`${API_URL}&t=${title}`);
    const data = await respones.json();
    console.log(data);
  }

  useEffect(() => {
    searchMovie("spiderman")
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
          onClick={() => {
            console.log("pressed")
          }}
        />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie.Year} </p>
          </div>
          <div>
            <img src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/400"} 
                alt={movie.Title}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
