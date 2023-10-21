import React, { useEffect } from 'react';
import { fetcMovies } from 'services/api';

const Home = () => {
  useEffect(() => {
    const details = async () => {
      try {
        const { result } = await fetcMovies();
        const data = await result.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    details();
  }, []);

  return <section></section>;
};
export default Home;
