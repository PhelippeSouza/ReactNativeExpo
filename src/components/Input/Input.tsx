import React from 'react';
import {
  View,
  TextInput,
  StyleProp,
  ViewStyle,
  TextInputProps,
  TextStyle,
} from 'react-native';
import styles from './styles';
import AppText from '../AppText/AppText';
import { TextInputMask } from 'react-native-masked-text';

interface InputProps {
  label?: string | React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputValue?: string;
  setInputValue: (value: string) => void;
  customProps?: TextInputProps;
  type:"cpf|cel-phone|custom"
  keyboardType:"numeric|email-address|phone-pad|default"
}

const Input = ({
  label,
  containerStyle,
  inputValue = '',
  setInputValue,
  customProps,
  inputStyle,
  type="cpf",
  keyboardType='numeric'
  


 
}: InputProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <AppText customStyle={styles.label}>{label}</AppText>
      <TextInputMask
        style={[styles.input, inputStyle]}
        value={inputValue}
        onChangeText={(value) => setInputValue(value)}
        {...customProps}
        type={type}
        
        
      />
    </View>
  );
};

export default Input;
