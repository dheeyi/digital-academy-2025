import { FlatList, Image, TouchableOpacity, ListRenderItem } from 'react-native';
import { styles } from './styles';
import { DAText } from '../../atoms/DAText/DAText';
import { TMDBMovie } from '../../../types/movies';
import { TMDB_IMAGE_BASE_URL } from '@env';

interface DAListMoviesProps {
  movies: TMDBMovie[];
  onMoviePress?: (movie: TMDBMovie) => void;
}

export const DAListMovies = ({
 movies,
 onMoviePress
}: DAListMoviesProps) => {
  const handlePress = (movie: TMDBMovie) => {
    if (onMoviePress) {
      onMoviePress(movie);
    }
  };

  const renderMovieItem: ListRenderItem<TMDBMovie> = ({ item }) => (
    <TouchableOpacity
      style={styles.movieContainer}
      onPress={() => handlePress(item)}
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: `${TMDB_IMAGE_BASE_URL}${item.poster_path}`}}
        style={styles.poster}
        resizeMode="cover"
      />
      <DAText
        variant="body"
        style={styles.movieTitle}
        numberOfLines={2}
      >
        {item.title}
      </DAText>
    </TouchableOpacity>
  );

  const keyExtractor = (item: TMDBMovie) => item.id.toString();

  return (
    <FlatList
      data={movies}
      renderItem={renderMovieItem}
      keyExtractor={keyExtractor}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.listContent}
    />
  );
};
