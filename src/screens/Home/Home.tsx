import React from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from './style.ts';

const Home = () => {
  const insets = useSafeAreaInsets();

 return (
   <View style={[
     styles.container,
     {
       paddingTop: insets.top,
     },
   ]}>
     <View style={styles.header}>
       <Text style={styles.headerText}>Bienvenido al modulo de React Native</Text>
     </View>

     <View style={styles.content}>
       <Text style={styles.insetInfo}>Top: {insets.top}</Text>
       <Text style={styles.insetInfo}>Bottom: {insets.bottom}</Text>
       <Text style={styles.insetInfo}>Left: {insets.left}</Text>
       <Text style={styles.insetInfo}>Right: {insets.right}</Text>
     </View>

     <View style={[
       styles.footer,
       {
          paddingBottom: insets.bottom,
       }
     ]}>
       <Text style={styles.footerText}>Digital Academy - 2025</Text>
     </View>
   </View>
 );
}

export default Home;
