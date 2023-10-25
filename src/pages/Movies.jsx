import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { Input } from 'components/MoviesInfo/Movie.styled';
import {
  Container,
  MoviesWrapper,
  Section,
} from 'components/SharedLayout/SharedLayout.styled';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { fetchSerchMovies } from 'services/api';

export const Movies = () => {
  const [movies] = useState([]);
  const [loading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  // useEffect(() => {
  //   if (!query) return;
  //   const details = async () => {
  //     setLoading(true);
  //     try {
  //       const { results } = await fetchSerchMovies(query);
  //       setMovies([results]);
  //     } catch (error) {
  //       console.log(error.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   details();
  // }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.elements.searchMovieId.value;

    setSearchParams({ query: searchValue });
  };

  return (
    <Section>
      <Container>
        <MoviesWrapper>
          <h1>Movies</h1>
          <form onSubmit={handleSubmit}>
            <label>
              <Input type="text" placeholder="Search Movies" required />
            </label>
          </form>
        </MoviesWrapper>

        {loading && <Loader />}
      </Container>
      {movies.length !== 0}
      {<MovieList movies={movies} />}
    </Section>
  );
};
