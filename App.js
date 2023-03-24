import React, { useState } from "react";
import MovieList from "./Profile/Component/MovieList";
import Filter from "./Profile/Component/Filter";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Crocodile Dundee",
      description:
      "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
      posterURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
      rating: 9,
      trailer: "https://www.youtube.com/watch?v=_eED8IAv_Ac",
    },
    {
      title: "The Cotton Club",
      description:
      "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
      posterURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
      rating: 7,
      trailer: "https://www.youtube.com/watch?v=T7m4F5GlS5Q",
    },
    {
      title: "City of God",
      description:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
      posterURL:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
      rating: 6,
      trailer: "https://www.youtube.com/watch?v=dcUOO4Itgmw",
    },
    {
      title: "Ratatouille",
      description: "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
      posterURL: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
      rating: 8,
      trailer: "https://www.youtube.com/watch?v=NgsQ8mVkN8w",  
    }
  ]);

  const [filter, setFilter] = useState({
    title: "",
    rating: "",
  });

  function handleAddMovie() {
    const newMovie = {
      title: "New Movie",
      description: "Description",
      posterURL: "https://via.placeholder.com/150",
      rating: 0,
    };
    setMovies([...movies, newMovie]);
  }

  function handleFilterChange(newFilter) {
    setFilter(newFilter);
  }

  function filterMovies(movie) {
    return (
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
    );
  }

  const filteredMovies = movies.filter(filterMovies);

  return (
    <div className="app">
      <h1>Netflix Jumia</h1>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <MovieList movies={filteredMovies} />
      <button onClick={handleAddMovie}>Add Movie</button>
    </div>
  );
}

export default App;
