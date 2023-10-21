import React, { useEffect } from 'react';
import { fetchSerchMovies } from 'services/api';

const Movies = () => {
  useEffect(() => {
    const details = async () => {
      try {
        const { result } = await fetchSerchMovies();
        const data = await result.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    details();
  }, []);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.elements.searchMoviesId.value;
    console.log(searchValue);
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder="searchMoviesId" required />
        </label>
      </form>
    </div>
  );
};

export default Movies;
