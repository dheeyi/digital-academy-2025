import { useEffect, useRef, useState } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { getPopularMovies, getRatedMovies } from '../../services/MDBService';
import { styles } from './style';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard';
import { DAText } from '../../components/atoms/DAText/DAText';
import { DAButton } from '../../components/atoms/DAButton/DAButton';
import LinearGradient from 'react-native-linear-gradient';
import { TMDBMovie } from '../../types/movies.ts';
import { DAListMovies } from '../../components/molecules/DAListMovies/DAListMovies';
import { DASubHeader } from '../../components/molecules/DASubHeader/DASubHeader';

const { width, height } = Dimensions.get('window');

const Movies = () => {
  const [movies, setMovies] = useState<TMDBMovie[]>([]);
  const [moviesRated, setRatedMovies] = useState<TMDBMovie[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() => {
    getPopularMovies().then(response => {
      setMovies(response);
    });
    getRatedMovies().then(rated => {
      setRatedMovies(rated);
    })
  }, []);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.carouselSection}>
          <Carousel
            ref={ref}
            width={width}
            autoPlay={true}
            autoPlayInterval={3000}
            height={height * 0.65}
            data={movies.slice(0, 7)}
            onProgressChange={progress}
            renderItem={({ item }) => (
              <MovieCard posterPath={item.poster_path} />
            )}
          />

          <LinearGradient
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,1)']}
            style={styles.gradient}
          >
            <View style={styles.overlay}>
              <View style={styles.textRow}>
                <DAText variant="subtitle">My list</DAText>
                <DAText variant="subtitle">Discover</DAText>
              </View>

              <View style={styles.buttonRow}>
                <DAButton
                  title="+ Wishlist"
                  variant="secondary"
                  onPress={() => console.log('Wishlist pressed')}
                />
                <DAButton
                  title="Details"
                  variant="primary"
                  onPress={() => console.log('Details pressed')}
                />
              </View>

              <Pagination.Basic
                progress={progress}
                data={movies.slice(0, 7)}
                containerStyle={styles.paginationContainer}
                dotStyle={styles.paginationDot}
                activeDotStyle={styles.paginationActiveDot}
                onPress={onPressPagination}
              />
            </View>
          </LinearGradient>
        </View>

        <View style={styles.contentSection}>
          <View style={styles.headerContainer}>
            <DASubHeader title="Marvel Studios" onActionPress={() => {}} />
            <DAListMovies movies={movies} />
          </View>
          <View style={styles.headerContainer}>
            <DASubHeader title="My Studios" onActionPress={() => {}} />
            <DAListMovies movies={moviesRated} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;
