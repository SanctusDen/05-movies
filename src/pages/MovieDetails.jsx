import { Loader } from 'components/Loader/Loader';
import MovieList from 'components/MovieList/MovieList';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllDetails } from 'services/api';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movies) return;
    const details = async () => {
      setLoading(true);
      try {
        const { results } = await fetchAllDetails(movieId);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, [movieId, movies]);
  return (
    <div>
      <h1>{movieId}</h1>
      {loading && <Loader />}
      {<MovieList movie={movies} />}
    </div>
  );
};

export default MovieDetails;
