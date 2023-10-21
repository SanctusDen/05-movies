import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e61641c86f787a123ab79c28a2fcf6ec';
axios.defaults.params = { api_key: API_KEY };

export const fetchTrendMovies = async () => {
  return await axios.get(`${BASE_URL}/trending/get-trending`).data;
};
console.log(fetchTrendMovies());

export const fetchSerchMovies = async () => {
  await axios.get(`${BASE_URL}/search/search-movies`).data;
};

export const fetchAllDetails = async () => {
  await axios.get(`${BASE_URL}/movies/get-movie-details`).data;
};

export const fetchActor = async () => {
  await axios.get(`${BASE_URL}/movies/get-movie-credits`).data;
};

export const fetchReviews = async () => {
  await axios.get(`${BASE_URL}/movies/get-movie-reviews`).data;
};
