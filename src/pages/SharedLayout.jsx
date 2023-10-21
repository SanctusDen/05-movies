import React from 'react';
import { NavLink } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <header>
      <nav>
        <NavLink className="" to="/">
          Home
        </NavLink>
        <NavLink className="" to="/movies">
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default SharedLayout;
