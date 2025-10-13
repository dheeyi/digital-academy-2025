import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, View } from 'react-native';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { styles } from './style.ts';
import { getPopularMovies } from '../../services/MDBService.ts';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard.tsx';
import { DAText } from '../../components/atoms/DAText/DAText.tsx';
import { DAButton } from '../../components/atoms/DAButton/DAButton.tsx';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

const Movies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  useEffect(() =>{
    getPopularMovies()
      .then((response) => {
        setMovies(response);
        debugger;
        console.log('response:', response);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Carousel
        ref={ref}
        width={width}
        height={height * 0.65}
        data={movies.slice(0, 7)}
        autoPlay={true}
        autoPlayInterval={3000}
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
        </View>
      </LinearGradient>

      <Pagination.Basic
        progress={progress}
        data={movies.slice(0, 7)}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.paginationDot}
        activeDotStyle={styles.paginationActiveDot}
        onPress={onPressPagination}
      />
    </View>
  );
};

export default Movies;
