import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome6 } from '@react-native-vector-icons/fontawesome6';

import Movies from '../screens/Movie/Movies';
import Home from '../screens/Home/Home';
import Search from '../screens/Search/Search';
import Wishlist from '../screens/Wishlist/Wishlist';
import { colors } from '../constants/colors.ts';

const Tab = createBottomTabNavigator();

const TAB_ICONS: Record<string, string> = {
  Movies: 'video',
  Home: 'house',
  Search: 'magnifying-glass',
  Wishlist: 'heart',
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = TAB_ICONS[route.name] as any;

          return (
            <FontAwesome6
              name={iconName || 'circle-question'}
              size={size}
              color={color}
              iconStyle='solid'
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: colors.black,
          borderTopWidth: 0,
          height: 80,
          paddingBottom: 30,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
        },
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
