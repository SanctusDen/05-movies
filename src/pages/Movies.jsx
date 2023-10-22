import {
  Container,
  MoviesWrapper,
  Section,
} from 'components/SharedLayout/SharedLayout.styled';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSerchMovies } from 'services/api';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryMovies = searchParams.get('query');

  useEffect(() => {
    if (!queryMovies) return;
    console.log('someone');
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
  }, [queryMovies]);

  useEffect(() => {
    const details = async () => {
      setLoading(true);
      try {
        const { results } = await fetchSerchMovies(queryMovies);
        setMovies([results]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, []);

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
              <input type="text" placeholder="Search Movies" required />
            </label>
          </form>
        </MoviesWrapper>

        <ul></ul>
      </Container>
    </Section>
  );
};

export default Movies;
