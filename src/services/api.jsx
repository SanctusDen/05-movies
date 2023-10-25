import axios from 'axios';

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

export const fetchSerchMovies = async query => {
  const { data } = await instance.get('/search/movie', {
    params: {
      query: query,
    },
  });
  return data;
};

export const fetchAllDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const fetchActor = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews`);
  return data.results;
};
