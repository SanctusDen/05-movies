import React from 'react';
import { NavLink } from 'react-router-dom';
import { Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Header>
      <span>LOGO</span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
    </Header>
  );
};

export default SharedLayout;
