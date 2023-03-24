import React from "react";

function MovieCard(props) {
  const { title, description, posterURL, rating,trailer } = props;

  return (
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{`Rating: ${rating}`}</p>
      <p>{trailer}</p>
    </div>
  );
}

export default MovieCard;
