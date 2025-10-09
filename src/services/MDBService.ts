import axios, { AxiosError } from 'axios';
import { TMDB_BASE_URL, TMDB_ACCESS_TOKEN } from '@env';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error('TMDB API error:', error.response?.data || error.message);
    } else {
      console.error('Unexpected error:', error);
    }
  }
};
