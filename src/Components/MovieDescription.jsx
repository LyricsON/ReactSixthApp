import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseFloat(id));

  return (
    <div>
      {movie ? (
        <div className="trailer">
          <h3 className="des">{movie.name}</h3>
          <p>{movie.description}</p>
          <div className="vid">
            <iframe
              title={movie.name + " trailer"}
              width="560"
              height="315"
              src={movie.trailerLink}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen=""
            ></iframe>
          </div>
          <Link to="/" className="btnV btnVI">
            Go Back
          </Link>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDescription;
