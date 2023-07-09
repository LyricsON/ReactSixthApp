import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ filteredMovies, handleDeleteMovie, handleEditMovie }) => {
  return (
    <div className="movie-list">
      {React.Children.toArray(
        filteredMovies.map((el) => (
          <MovieCard
            movie={el}
            handleDeleteMovie={handleDeleteMovie}
            handleEditMovie={handleEditMovie}
          />
        ))
      )}
    </div>
  );
};

export default MovieList;
