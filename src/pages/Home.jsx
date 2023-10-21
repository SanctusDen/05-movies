import HomeList from 'components/HomeItem/HomeItem';
import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { fetchTrendMovies } from 'services/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const details = async () => {
      try {
        const { results } = await fetchTrendMovies();
        setMovies(results);
        setLoading(true);
      } catch (error) {
        console.log(error.message);

        setLoading(true);
      }
    };
    details();
  }, []);

  return (
    <section>
      <h1>Popular movies of the day! </h1>
      {loading ? <HomeList movies={movies} /> : <Loader />}
    </section>
  );
};
export default Home;
