import Home from 'pages/Home';
import Movies from 'pages/Movies';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cast from './Cast/Cast';
import MovieDetails from './Movies/MovieDetails';
import Reviews from './Reviews/Reviews';
import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
