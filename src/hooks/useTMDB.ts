import { useState, useEffect } from 'react';
import { TMDBMovie } from '../types/movies';
import axios, { AxiosError } from 'axios';
import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';

export const useTMDB = (endpoint: string, params = {}) => {
  const [data, setData] = useState<TMDBMovie[]>([]);
  const [loading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await axios.get(`${TMDB_BASE_URL}${endpoint}`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            'Content-Type': 'application/json',
          },
          params: {
            language: 'en-US',
            page: 1,
            ...params,
          },
        });

        setData(response.data.results);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data || error.message);
        } else {
          setError('Unexpected error');
        }
        setData([]);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

