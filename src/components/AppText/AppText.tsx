import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import styles from './styles';

interface AppTextProps {
  children: React.ReactNode;
  type?: 'regular' | 'bold';
  customStyle?: StyleProp<TextStyle>;
  fontSize?: number;
  variant?: 'black' | 'white';
}

const AppText = ({
  children,
  type = 'regular',
  customStyle,
  fontSize = 14,
  variant = 'black',
}: AppTextProps) => {
  const textStyle = {
    regular: styles.textRegular,
    bold: styles.textBold,
  };

  const textColor = {
    black: styles.textBlack,
    white: styles.textWhite,
  };

  return (
    <Text
      style={[textStyle[type], textColor[variant], { fontSize }, customStyle]}>
      {children}
    </Text>
  );
};

export default AppText;
