export interface TMDBMovie {
  id: number;
  title: string;
  poster_path: string;
  backdrop_path?: string;
  overview?: string;
  vote_average: number;
  vote_count?: number;
  release_date: string;
  adult?: boolean;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  popularity?: number;
  video?: boolean;
}

export interface Movie {
  id: string;
  title: string;
  poster: string;
  rating?: number;
  releaseDate?: string;
}
