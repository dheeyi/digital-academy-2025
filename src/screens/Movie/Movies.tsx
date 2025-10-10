import React, { useEffect, useRef } from 'react';
import { Dimensions, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { styles } from './style.ts';
import { getPopularMovies } from '../../services/MDBService.ts';
import { useSharedValue } from 'react-native-reanimated';

const data = [...new Array(6).keys()];
const { width } = Dimensions.get('window');

const Movies = () => {
  const ref = useRef<ICarouselInstance>(null);
  const progress = useSharedValue<number>(0);

  useEffect(() =>{
    getPopularMovies()
      .then((response) => {
        console.log('Popular Movies:', response);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Movies Component</Text>
      <View>
        <Carousel
          ref={ref}
          width={width}
          height={width / 2}
          data={data}
          onProgressChange={progress}
          renderItem={({ index }) => (
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                justifyContent: "center",
              }}
            >
              <Text style={{ textAlign: "center", fontSize: 30 }}>{index}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Movies;
