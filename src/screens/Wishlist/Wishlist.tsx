import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DAText } from '../../components/atoms/DAText/DAText';
import { colors } from '../../constants/colors';

const Wishlist = () => {
  return (
    <View style={styles.container}>
      <DAText variant="title">Wishlist</DAText>
      <DAText variant="body" style={styles.subtitle}>
        Your saved items will appear here...
      </DAText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  subtitle: {
    marginTop: 8,
  },
});

export default Wishlist;
