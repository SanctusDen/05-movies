import MovieItem from 'components/Movies/MovieItems';
import { Link } from 'react-router-dom';
import { WrapperMovie, WrapperMovieItem } from './MovieList.styled';

const MovieList = ({ movie }) => {
  return (
    <>
      <WrapperMovie>
        <MovieItem movie={movie} />
        <WrapperMovieItem>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </WrapperMovieItem>
      </WrapperMovie>
    </>
  );
};

export default MovieList;
