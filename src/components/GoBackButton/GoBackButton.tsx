import React from 'react';
import Button from '../Button/Button';
import styles from './styles';
import AppText from '../AppText/AppText';
import { View, StyleProp, ViewStyle } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface GoBackButtonProps {
  label?: string;
  customStyle?: StyleProp<ViewStyle>;
}

const GoBackButton = ({ label = 'Voltar', customStyle }: GoBackButtonProps) => {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, customStyle]}>
      <Button
        customStyle={styles.button}
        type="text"
        label={
          <View style={styles.labelContainer}>
            <Ionicons name="arrow-back" style={styles.arrowIcon} size={25} />
            <AppText customStyle={styles.label}>{label}</AppText>
          </View>
        }
        onPress={() => navigation.goBack()}
        testID="btn_go_back"
      />
    </View>
  );
};

export default GoBackButton;
