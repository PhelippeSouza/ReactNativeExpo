import React from 'react';
import Button from '../../components/Button/Button';


import Container from '../../components/Container/Container';
import styles from './styles';
import AppText from '../../components/AppText/AppText';
import { NavigationContext, useNavigation, useRoute } from '@react-navigation/native';
import { View } from 'react-native';


const Registration = () => {
  const navigation = useNavigation();


  const HandleRegistration=()=>{
    navigation.navigate("Home")

  }


  return (
    <Container customStyle={styles.container}>

      <View style={styles.textcontainer}>
        <AppText customStyle={styles.sucesstext}>
          Cadastro efetuado com sucesso!{'      '}
          {''}Suas informações de cadastro    {'    '}
          {''}foram enviadas para o seu e-mail
        </AppText>
      </View> 

      <Button
        label="Entrar"
        customStyle={styles.loginButton}
        testID="btn_login"
        onPress={HandleRegistration}
      />
    </Container>
  );
};

export default Registration;
