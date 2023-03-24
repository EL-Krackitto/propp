import React from "react";
import MovieCard from "./MovieCard";

import { Link } from "react-router-dom";
function MovieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      {movies.map((movie) => {

        return             <Link to={`/movies/${movie.description}`}><MovieCard key={movie.title} {...movie} />;
        </Link>
      })}
    </div>
  );
}

export default MovieList;
