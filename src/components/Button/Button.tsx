import React from 'react';
import {
  TouchableOpacity,
  Text,
  ViewStyle,
  StyleProp,
  ActivityIndicator,
  View,
} from 'react-native';
import styles from './styles';
import Colors from '../../constants/Colors';

interface ButtonProps {
  label: string | React.ReactNode;
  type?: 'primary' | 'secondary' | 'text' | 'requested' | 'share';
  customStyle?: StyleProp<ViewStyle>;
  onPress?: () => void | Promise<any>;
  loading?: boolean;
  testID?: string;
}

const Button = ({
  label = '',
  type = 'primary',
  customStyle,
  onPress = () => {},
  loading = false,
  testID,
}: ButtonProps) => {
  const buttonStyle = {
    primary: styles.primaryButton,
    secondary: styles.secondaryButton,
    text: styles.textButton,
    requested: styles.requestedbutton,
    default: styles.primaryButton,
    share: styles.sharebutton,
  };

  const labelStyle = {
    primary: styles.primaryLabel,
    secondary: styles.secondaryLabel,
    text: styles.textButtonLabel,
    requested: styles.requestedLabel,
    default: styles.primaryLabel,
    share: styles.sharelabel,
  };

  const defaultStyle = buttonStyle[type] || buttonStyle.default;

  if (loading) {
    return (
      <View style={[buttonStyle.text, customStyle]}>
        <ActivityIndicator size="large" color={Colors.primaryRed} />
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[defaultStyle, customStyle]}
      onPress={onPress}
      testID={testID}>
      <Text style={labelStyle[type] || labelStyle.default}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
