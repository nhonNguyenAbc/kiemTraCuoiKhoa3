import React, { useState, useEffect } from "react";
import axios from "axios";
import "../component/movie.css";

// Component phim
const Movie = ({ movie, onClick }) => {
  return (
    <div className="movie" onClick={() => onClick(movie)}>
      <img src={movie.image} alt={movie.name} />
      <p className="movie-name">{movie.name}</p>
    </div>
  );
};

// Component ListMovie
const ListMovie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 4;

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/movies/get")
      .then((response) => {
        setMovies(response.data);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleClosePopup = () => {
    setSelectedMovie(null);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-left">
          <button className="hamburger-button">&#9776;</button>
        </div>
        <h1 className="header-title">
          MOVIE <span className="span">UI</span>
        </h1>
        <div className="header-right">
          <button className="search-button">
            <span role="img" aria-label="search-icon" className="search-icon">
              🔍
            </span>
          </button>
        </div>
      </header>
      <h2>Most Popular Movies</h2>
      <div className="movie-list">
        {currentMovies.map((movie) => (
          <Movie key={movie.ID} movie={movie} onClick={handleMovieClick} />
        ))}
      </div>
      {selectedMovie && (
        <div className="popup">
          <div className="popup-content">
            <img src={selectedMovie.image} alt={selectedMovie.name} />
            <div className="movie-info">
              <span className="close" onClick={handleClosePopup}>
                &times;
              </span>
              <h2>{selectedMovie.name}</h2>
              <p>
                {selectedMovie.time} min {selectedMovie.year}
              </p>
              <p>{selectedMovie.introduce}</p>
            </div>
          </div>
        </div>
      )}
      {currentPage > 1 && (
        <button className="button-prev" onClick={handlePrevPage}>
          Previous
        </button>
      )}
      {movies.length > currentPage * moviesPerPage && (
        <button className="button-next" onClick={handleNextPage}>
          Next
        </button>
      )}
    </div>
  );
};

export default ListMovie;
