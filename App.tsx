import { SafeAreaProvider, } from 'react-native-safe-area-context';
import Movies from './src/screens/Movie/Movies.tsx';

function App() {
  return (
    <SafeAreaProvider>
      <Movies />
    </SafeAreaProvider>
  );
}

export default App;
