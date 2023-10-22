import React from 'react';
import { useLocation } from 'react-router-dom';

const HomeList = ({ id }) => {
  const location = useLocation();
  return (
    <li>
      <link to={`/movies/${id}`} state={{ from: location }}>
        <p></p>
      </link>
    </li>
  );
};

export default HomeList;
