import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  listContent: {
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  movieContainer: {
    marginHorizontal: 8,
    width: 160,
  },
  poster: {
    width: 160,
    height: 240,
    borderRadius: 12,
    backgroundColor: colors.backgroundLight,
  },
  movieTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
    color: colors.textPrimary,
    textAlign: 'left',
  },
});
