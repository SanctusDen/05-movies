import HomeItem from 'components/HomeItem/HomeItem';
import React from 'react';
import { ListHome } from './HomeList.styled';

const HomeList = ({ movies }) => {
  return (
    <ListHome>
      {movies.map(({ title, id, poster_path }) => (
        <HomeItem key={id} title={title} poster_path={poster_path} id={id} />
      ))}
    </ListHome>
  );
};

export default HomeList;
