import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import AppText from '../../components/AppText/AppText';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import FastImage from 'react-native-fast-image';
import styles from './styles';
import { createUser } from '../../service/userService';
import GoBackButton from '../../components/GoBackButton/GoBackButton';
import { UserState } from '../../store/user/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { setUser } from '../../store/user/actions';
import { Text, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';

interface FormikValues {
  nome: string;
  email: string;
  login: string;
  empresaId: string;
  telefone: string;
  app: boolean;
}

const Separator = () => {
  return <View style={styles.separator} />;
};

const somaWhite = require('../../assets/images/soma_white_bg.png');

const Signup = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const no = [];
  const UserState = useSelector<RootState, UserState>((state) => state.user);
  const initialValues: FormikValues = UserState;
  const validationSchema = Yup.object().shape({
    nome: Yup.string().required(),
    login: Yup.string()
      .length(14, 'CPF inválido')
      .required('Você precisa informar um CPF válido '),
    email: Yup.string()
      .email('E-mail inválido')
      .required('O campo Nome é Obrigatório'),
  });

  const handleSubmit = async (value: FormikValues) => {


    try {
      setLoading(true);
      dispatch(setUser(value));

      const response = await createUser(
        value.nome,
        value.login,
        value.email,
        value.telefone,
        value.empresaId,
        value.app,
      );

      navigation.navigate('Login');

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <GoBackButton customStyle={styles.goBack} />
      <FastImage
        source={somaWhite}
        style={styles.somaLogo}
        resizeMode={FastImage.resizeMode.contain}
      />

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(value) => handleSubmit(value)}>
        {({
          handleChange,
          handleSubmit,

          errors,
          touched,
          values,
        }) => (
          <>
            <AppText type="bold">Nome Completo:</AppText>
            <View style={styles.input}>
              <TextInput
                onChangeText={handleChange('nome')}
                value={values.nome}
                keyboardType="default"
              />
            </View>
            {errors.email && touched.email ? (
              <Text style={styles.erro}>{errors.email}</Text>
            ) : null}

            <AppText type="bold">E-mail:</AppText>
            <View style={styles.input}>
              <TextInput
                onChangeText={handleChange('email')}
                value={values.email}
                keyboardType="email-address"
              />
            </View>
            {errors.email && touched.email ? (
              <Text style={styles.erro}>{errors.email}</Text>
            ) : null}

            <Input
              containerStyle={styles.fieldContainer}
              inputValue={values.login}
              setInputValue={handleChange('login')}
              label={<AppText type="bold">CPF:</AppText>}
            />
            {errors.login && touched.login ? (
              <Text style={styles.erro}>{errors.login}</Text>
            ) : null}

            <Separator />

            <Button
              customStyle={styles.signupButton}
              label="Cadastrar"
              onPress={handleSubmit}
              loading={loading}
            />
          </>
        )}
      </Formik>
    </Container>
  );
};

export default Signup;
