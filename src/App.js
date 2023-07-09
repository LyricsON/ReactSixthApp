import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Filter from "./Components/Filter";
import MovieList from "./Components/MovieList";
import AddNewMovie from "./Components/AddMovie";
import MovieDescription from "./Components/MovieDescription";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
      rating: 5,
      name: "Star Wars: The Rise Of Skywalker",
      date: "December 2019",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      rating: 4,
      name: "Avengers: Infinity War",
      date: "April 2018",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image: "https://image.tmdb.org/t/p/w500/pjeMs3yqRmFL3giJy4PMXWZTTPa.jpg",
      rating: 4,
      name: "Frozen II",
      date: "November 2019",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image:
        "https://i1.wp.com/easttennessean.com/wp-content/uploads/2016/11/FantasticBeasts.png?fit=500%2C639&ssl=1",
      rating: 3,
      name: "Fantastic Beasts and Where to Find Them",
      date: "November 2016",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
    {
      id: Math.random(),
      image:
        "https://m.media-amazon.com/images/M/MV5BMTI5MDU3MTYyMF5BMl5BanBnXkFtZTYwODgyODc3._V1_.jpg",
      rating: 2,
      name: "Cat In The Hat",
      date: "November 2003",
      description:
        "The ninth and final installment in the main Star Wars saga, 'Star Wars: The Rise of Skywalker' concludes the epic storyline that began with 'Star Wars: Episode VII - The Force Awakens.' Join Rey, Finn, and Poe Dameron as they face their greatest challenge yet, confronting the resurrected Emperor Palpatine and the formidable First Order in a battle for the fate of the galaxy.",
      trailerLink: "https://www.youtube.com/watch?v=adzYW5DZoWs",
    },
  ]);
  const [titleFilter, setTitleFilter] = useState("");
  const [rateFilter, setRateFilter] = useState(1);
  const handleTitleFilter = (x) => setTitleFilter(x);
  const handleRateFilter = (y) => setRateFilter(y);

  // deletefunction
  const handleDeleteMovie = (theId) =>
    setMovies(movies.filter((el) => el.id !== theId));
  // edit movie
  const handleEditMovie = (editedMovie) =>
    setMovies(
      movies.map((el) =>
        el.id === editedMovie.id ? { ...el, ...editedMovie } : el
      )
    );
  // add movie
  const handleAddMovie = (newMovie) => setMovies([...movies, newMovie]);
  return (
    <div className="App">
      <Router>
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter
                  titleFilter={titleFilter}
                  rateFilter={rateFilter}
                  handleTitleFilter={handleTitleFilter}
                  handleRateFilter={handleRateFilter}
                />
                <MovieList
                  filteredMovies={movies.filter(
                    (el) =>
                      el.name
                        .toLowerCase()
                        .includes(titleFilter.toLowerCase()) &&
                      el.rating >= rateFilter
                  )}
                  handleDeleteMovie={handleDeleteMovie}
                  handleEditMovie={handleEditMovie}
                />
                <AddNewMovie handleAddMovie={handleAddMovie} />
              </>
            }
          />
          <Route
            path="/movies/:id"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
