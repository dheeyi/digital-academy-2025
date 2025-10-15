import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../constants/colors';

const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  carouselSection: {
    position: 'relative',
    height: height * 0.65,
  },
  contentSection: {
    backgroundColor: colors.background,
    paddingBottom: 40,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  gradient: {
    position: 'absolute',
    top: height * 0.65 - 180,
    left: 0,
    right: 0,
    height: 200,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
  overlay: {
    paddingHorizontal: 24,
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 12,
    marginBottom: 24,
  },
  paginationContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  paginationDot: {
    backgroundColor: colors.white,
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  paginationActiveDot: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  headerContainer: {
    marginTop: 30,
  }
});
