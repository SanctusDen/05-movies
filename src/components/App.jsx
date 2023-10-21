import Cast from 'pages/Cast';
import Home from 'pages/Home/Home';
import MovieDetails from 'pages/Home/MovieDetails';
import Movies from 'pages/Home/Movies/Movies';
import Reviews from 'pages/Reviews';
import SharedLayout from 'pages/SharedLayout';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

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
