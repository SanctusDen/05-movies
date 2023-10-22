import HomeList from 'components/HomeList/HomeList';
import { Loader } from 'components/Loader/Loader';
import {
  Container,
  Section,
} from 'components/SharedLayout/SharedLayout.styled';
import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const details = async () => {
      setLoading(true);
      try {
        const { results } = await fetchTrendMovies();
        setMovies(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    details();
  }, []);

  return (
    <Section>
      <Container>
        <h1>Popular movies of the day!</h1>
        {loading ? <HomeList movies={movies} /> : <Loader />}
      </Container>
    </Section>
  );
};

export default Home;
