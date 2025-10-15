import { View } from 'react-native';
import { styles } from './styles';
import { DAText } from '../../atoms/DAText/DAText';
import { DAButton } from '../../atoms/DAButton/DAButton';

interface DASubHeaderProps {
  title: string;
  actionText?: string;
  onActionPress?: () => void;
  showAction?: boolean;
}

export const DASubHeader = ({
  title,
  actionText = 'See more',
  onActionPress,
  showAction = true
}: DASubHeaderProps) => {
  return (
    <View style={styles.container}>
      <DAText variant="title" style={styles.title}>
        {title}
      </DAText>
      {showAction && onActionPress && (
        <DAButton
          title={actionText}
          onPress={onActionPress}
          variant="text"
        />
      )}
    </View>
  );
};
