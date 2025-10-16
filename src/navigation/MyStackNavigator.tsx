import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home/Home';
import Movies from '../screens/Movie/Movies';

const Stack = createNativeStackNavigator();

const MyStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movies" component={Movies} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

export default MyStackNavigator;
