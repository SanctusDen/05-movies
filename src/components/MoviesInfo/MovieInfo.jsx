import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

// import { fetchTrendMovies } from 'services/api';
import { LinkBtnBack, MovieItemWrapper } from './MoviesItem.styled';
import { fetchSerchMovies } from 'services/api';
import { Loader } from 'components/Loader/Loader';

const BASE_IMG = 'https://image.tmdb.org/t/p/w200/';

export const MovieInfo = ({
  title,
  overview,
  genres,
  release_date,
  vote_average,
  movieId,
  backdrop_path,
  poster_path,
}) => {
  const location = useLocation();

  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movies) return;
    const details = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSerchMovies(movieId);
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, [movieId, movies]);

  const ref = useRef(location.state?.from ?? '/');
  // const { title, overview, genres, release_date, vote_average, poster_path } =
  //   movie;
  return (
    <>
      {loading && <Loader />}
      <LinkBtnBack to={ref.current}>Go back</LinkBtnBack>

      <div>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
        {vote_average ? (
          <span rating={vote_average}>{vote_average.toFixed(1)}</span>
        ) : (
          ''
        )}
      </div>
      <MovieItemWrapper>
        <h2>{title}</h2>
        <p>Release data: {release_date}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres && genres.map(({ id, name }) => <li key={id}>{name}</li>)}
        </ul>
      </MovieItemWrapper>
    </>
  );
};
