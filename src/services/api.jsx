import axios from 'axios';

export const fetcMovies = async () => {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'e61641c86f787a123ab79c28a2fcf6ec';
  axios.defaults.params = { api_key: API_KEY };
  await axios.get(`${BASE_URL}?${API_KEY}`);
  console.log(fetcMovies);
};

export const fetchTrendMovies = async () => {
  await axios.get('/trending/get-trending').data;
};

export const fetchSerchMovies = async () => {
  await axios.get('/search/search-movies').data;
};

export const fetchAllDetails = async () => {
  await axios.get('movies/get-movie-details').data;
};

export const fetchActor = async () => {
  await axios.get('/movies/get-movie-credits').data;
};

export const fetchReviews = async () => {
  await axios.get('/movies/get-movie-reviews ').data;
};
