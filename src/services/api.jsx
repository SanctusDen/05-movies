import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'e61641c86f787a123ab79c28a2fcf6ec';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendMovies = async () => {
  const { data } = await instance.get('/trending/movie/day');
  return data;
};

export const fetchSerchMovies = async () => {
  const { data } = await instance.get(`/search/search-movies`);
  return data;
};

export const fetchAllDetails = async () => {
  const { data } = await instance.get(`/movies/get-movie-details`);
  return data;
};

export const fetchActor = async () => {
  const { data } = await instance.get(`/movies/get-movie-credits`);
  return data;
};

export const fetchReviews = async () => {
  const { data } = await instance.get(`/movies/get-movie-reviews`);
  return data;
};

// export const fetchTrendMovies = async () => {
//   return await axios.get(`${BASE_URL}/trending/movie/day`);
// };

// export const fetchSerchMovies = async () => {
//   await axios.get(`${BASE_URL}/search/search-movies`);
// };

// export const fetchAllDetails = async id => {
//   await axios.get(`${BASE_URL}/movie/${id}`);
// };

// export const fetchActor = async id => {
//   await axios.get(`${BASE_URL}/movie/${id}/credits`);
// };

// export const fetchReviews = async id => {
//   await axios.get(`${BASE_URL}/movie/${id}/reviews`);
// };
