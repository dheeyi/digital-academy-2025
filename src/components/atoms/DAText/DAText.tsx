import { Text, TextStyle } from 'react-native';
import { styles } from './styles';

interface DATextProps {
  children: string | React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
  style?: TextStyle;
  numberOfLines?: number;
}

export const DAText = ({
 children,
 variant = 'body',
 style,
 numberOfLines
}: DATextProps) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'title':
        return styles.title;
      case 'subtitle':
        return styles.subtitle;
      case 'body':
      default:
        return styles.body;
    }
  };

  return (
    <Text
      style={[styles.base, getVariantStyle(), style]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};
