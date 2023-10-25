import { Loader } from 'components/Loader/Loader';
import { WrapperMovieItem } from 'components/MoviesInfo/Movie.styled';
import { MovieInfo } from 'components/MoviesInfo/MovieInfo';

import React, { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchAllDetails } from 'services/api';

const MovieDetails = ({ title }) => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movies) return;
    const details = async movieId => {
      setLoading(true);
      try {
        const { result } = await fetchAllDetails(movieId);
        setMovies(result);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details(movieId);
  }, [movieId, movies]);

  return (
    <div>
      <h1>{title}</h1>
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

export default MovieDetails;
