import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  primary: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonPrimary,
  },
  secondary: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.buttonSecondary,
  },
  text: {
    paddingRight:5,
  },
  disabled: {
    opacity: 0.5,
  },
  primaryText: {
    color: colors.textDark,
    fontSize: 16,
    fontWeight: '700',
  },
  secondaryText: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: '700',
  },
  textText: {
    color: colors.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});
