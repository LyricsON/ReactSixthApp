import React from "react";
import StarRating from "./StarRating";
import EditMovie from "./Edit";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, handleDeleteMovie, handleEditMovie }) => {
  return (
    <div className="movie-card">
      <h3 className="mvn">{movie.name}</h3>
      <img src={movie.image} alt={movie.name} />
      <StarRating rateFilter={movie.rating} />
      <h3 className="mvd">{movie.date}</h3>
      <div className="btnn">
        <EditMovie film={movie} handleEditMovie={handleEditMovie} />
        <button onClick={() => handleDeleteMovie(movie.id)} className="btn">
          Delete
        </button>
      </div>
      <Link to={`/movies/${movie.id}`} className="btnV">
        View Details
      </Link>
    </div>
  );
};

export default MovieCard;
