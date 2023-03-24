import React from "react";

function Filter(props) {
  const { onFilterChange, filter } = props;

  function handleTitleChange(event) {
    onFilterChange({ ...filter, title: event.target.value });
  }

  function handleRatingChange(event) {
    onFilterChange({ ...filter, rating: event.target.value });
  }

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        value={filter.title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="10"
        value={filter.rating}
        onChange={handleRatingChange}
      />
    </div>
  );
}

export default Filter;
