import { SafeAreaProvider, } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Movies from './src/screens/Movie/Movies.tsx';

function App() {
  return (
    <GestureHandlerRootView>
      <SafeAreaProvider>
        <Movies />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;
