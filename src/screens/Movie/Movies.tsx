import { useRef } from 'react';
import { View, ScrollView, Dimensions, ActivityIndicator } from 'react-native';
import { styles } from './style';
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel';
import { useSharedValue } from 'react-native-reanimated';
import { MovieCard } from './components/MovieCard';
import { DAText } from '../../components/atoms/DAText/DAText';
import { DAButton } from '../../components/atoms/DAButton/DAButton';
import LinearGradient from 'react-native-linear-gradient';
import { DAListMovies } from '../../components/molecules/DAListMovies/DAListMovies';
import { DASubHeader } from '../../components/molecules/DASubHeader/DASubHeader';
import { useTMDB } from '../../hooks/useTMDB.ts';

const { width, height } = Dimensions.get('window');

const Movies = () => {
  const { data: popularMovies, loading: loadingPopular } = useTMDB('/movie/popular');
  const { data: ratedMovies, loading: loadingRated } = useTMDB('/movie/top_rated');
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  const onPressPagination = (index: number) => {
    ref.current?.scrollTo({
      count: index - progress.value,
      animated: true,
    });
  };

  if (loadingPopular || loadingRated) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator>Loading...</ActivityIndicator>
      </View>
    );

  }

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
            data={popularMovies.slice(0, 7)}
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
                data={popularMovies.slice(0, 7)}
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
            <DAListMovies movies={popularMovies} />
          </View>
          <View style={styles.headerContainer}>
            <DASubHeader title="My Studios" onActionPress={() => {}} />
            <DAListMovies movies={ratedMovies} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Movies;
