import HomeList from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
// import MovieList from 'components/MovieList/MovieList';
import { Input } from 'components/MovieList/MovieList.styled';
import {
  Container,
  MoviesWrapper,
  Section,
} from 'components/SharedLayout/SharedLayout.styled';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { fetchSerchMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
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
  }, [query]);

  useEffect(() => {
    const details = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSerchMovies(query);
        setMovies([results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.elements.searchMoviesId.value;
    console.log(searchValue);

    setSearchParams({ queryMovies: searchValue });
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
      <Suspense fallback={<Loader />}>
        <Outlet />
        {<HomeList movies={movies} />}
      </Suspense>
    </Section>
  );
};

export default Movies;
