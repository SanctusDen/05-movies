import { Loader } from 'components/Loader/Loader';
import { WrapperMovieItem } from 'components/MoviesInfo/Movie.styled';
import { MovieInfo } from 'components/MoviesInfo/MovieInfo';

import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchAllDetails } from 'services/api';

export const MovieDetails = () => {
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
      {<MovieInfo movie={movies} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <WrapperMovieItem>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </WrapperMovieItem>
    </div>
  );
};
