import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

import { Link } from 'react-router-dom';
import axios from 'axios';

export default function MovieInfo() {
  const params = useParams()

  const [movie, setMovie] = useState()

  useEffect(() => {
    async function fetchMovie() {
      const resp = await axios.get("http://localhost:5000/movie/" + params.id)
      console.log("resp", resp)
      setMovie(resp.data.movie)
    }

    fetchMovie()
  }, [params.id])

  console.log(movie)
  return (
    <div>
      <h1>Ironhack Cinema</h1>
      {movie ? (
        <div style={{ display: "flex", maxWidth: "800px", margin: "0 auto"}}>
          <img src={movie.image} alt={movie.title} />
          <div style={{ marginLeft: "2rem"}}>
            <Link to={`/CheckMovies/`}>Go Back</Link>
            <h2>{movie.title}</h2>
            <h3>Director: {movie.director}</h3>
            <strong>Stars</strong>
            <ul>
              {movie.stars.map(eachStar => (
                <li key={eachStar}>{eachStar}</li>
              ))}
            </ul>

            <p>{movie.description}</p>

            <p>{movie.showtimes.join(" | ")}</p>
          </div>
        </div>
      ) : (<p>Loading movie...</p>)
      }
    </div>
  );
}