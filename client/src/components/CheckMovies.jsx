import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function CheckMovies(props) {
  const [movies, setMovies] = useState([])

  async function fetchMovies() {
    const resp = await axios.get("http://localhost:5000/movies")
    console.log("movies list response", resp)
    setMovies(resp.data.movies)
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  return (
    <div>
      <h1>Ironhack Cinema</h1>
      <p>Click on the movie to check the showtimes!</p>
      <div style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-evenly" }}>
        {movies.map(eachMovie => (
          <div key={eachMovie._id} style={{ textAlign: "center" }}>
            <img src={eachMovie.image} alt={eachMovie.title} />
            <h3>{eachMovie.title}</h3>
            <Link to={`/movie/${eachMovie._id}`}>See More</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckMovies;