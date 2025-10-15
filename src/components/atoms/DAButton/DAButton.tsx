import { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { DAText } from '../DAText/DAText';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface DAButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
}

const VARIANT_CONFIG = {
  primary: {
    buttonStyle: styles.primary,
    textStyle: styles.primaryText,
  },
  secondary: {
    buttonStyle: styles.secondary,
    textStyle: styles.secondaryText,
  },
  text: {
    buttonStyle: styles.text,
    textStyle: styles.textText,
  },
};

export const DAButton = ({
 title,
 onPress,
 variant = 'primary',
 disabled = false
}: DAButtonProps) => {
  const config = VARIANT_CONFIG[variant] || VARIANT_CONFIG.primary;

  const buttonStyle = useMemo(() => {
    return [config.buttonStyle, disabled && styles.disabled];
  }, [config, disabled]);

  const textStyle = useMemo(() => config.textStyle, [config]);

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <DAText style={textStyle}>
        {title}
      </DAText>
    </TouchableOpacity>
  );
};
