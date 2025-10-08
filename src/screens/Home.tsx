import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Home = () => {
  const insets = useSafeAreaInsets();

 return (
   <View style={styles.container}>
     <View style={styles.header}>
       <Text style={styles.headerText}>Bienvenido al modulo de React Native</Text>
     </View>

     <View style={styles.content}>
       <Text style={styles.insetInfo}>Top: {insets.top}</Text>
       <Text style={styles.insetInfo}>Bottom: {insets.bottom}</Text>
       <Text style={styles.insetInfo}>Left: {insets.left}</Text>
       <Text style={styles.insetInfo}>Right: {insets.right}</Text>
     </View>

     <View style={styles.footer}>
       <Text style={styles.footerText}>Digital Academy - 2025</Text>
     </View>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    paddingVertical: 12,
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  insetInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#333',
    fontSize: 14,
  },
});

export default Home;
