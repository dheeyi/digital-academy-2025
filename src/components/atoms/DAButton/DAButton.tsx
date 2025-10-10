import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { DAText } from '../DAText/DAText';

interface DAButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const DAButton = ({
 title,
 onPress,
 variant = 'primary',
 disabled = false
}: DAButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        variant === 'primary' ? styles.primary : styles.secondary,
        disabled && styles.disabled,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <DAText
        style={variant === 'primary' ? styles.primaryText : styles.secondaryText}
      >
        {title}
      </DAText>
    </TouchableOpacity>
  );
};
