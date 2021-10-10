import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';

interface ContainerProps {
  children: React.ReactNode;
  customStyle?: StyleProp<ViewStyle>;
}

const Container = ({ children, customStyle }: ContainerProps) => {
  return <View style={[styles.container, customStyle]}>{children}</View>;
};

export default Container;
