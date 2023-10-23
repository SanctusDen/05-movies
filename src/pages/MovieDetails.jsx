import HomeList from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllDetails } from 'services/api';

const MovieDetails = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
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
  }, [movieId]);
  return (
    <div>
      <h1>{movieId}</h1>
      {loading && <Loader />}
      {loading ? <HomeList movie={movies} /> : <Loader />}
    </div>
  );
};

export default MovieDetails;
