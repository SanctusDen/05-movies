import { MovieItem } from 'components/MovieItem/MovieItem';
import React from 'react';
import { ListHome } from './MovieList.styled';

export const MovieList = ({ movies }) => {
  return (
    <ListHome>
      {movies.map(({ title, id, poster_path }) => (
        <MovieItem key={id} title={title} poster_path={poster_path} id={id} />
      ))}
    </ListHome>
  );
};
