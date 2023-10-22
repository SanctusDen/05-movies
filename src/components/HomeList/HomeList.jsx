import React from 'react';
import { useLocation } from 'react-router-dom';

const HomeList = ({ id, title }) => {
  const location = useLocation();
  return (
    <li>
      <link to={`/movies/${id}`} state={{ from: location }}>
        <h1>{title}</h1>
      </link>
    </li>
  );
};

export default HomeList;
