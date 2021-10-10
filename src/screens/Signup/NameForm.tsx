import React from 'react';
import Container from '../../components/Container/Container';

import GoBackButton from '../../components/GoBackButton/GoBackButton';
import styles from './styles';
import AppText from '../../components/AppText/AppText';
import Button from '../../components/Button/Button';
import { KeyboardAvoidingView, Platform, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { userState } from '../../store/user/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as Yup from 'yup';
import { Formik } from 'formik';

import { setUser } from '../../store/user/action';
import Input from '../../components/Input/Input';

interface FormikValues {
  nome: string;

}

const NameForm = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const UserState = useSelector<RootState, userState>((state) => state.user);

  const initialValues: FormikValues = UserState;

  const validationSchema = Yup.object().shape({
    nome: Yup.string().required("O Campo Nome é Obrigatório"),
  });
  const handleSubmit = async (value: FormikValues) => {
    dispatch(setUser(value));
    navigation.navigate('EmailForm');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 , marginTop:25}}
      >
      <Container>
        <GoBackButton customStyle={styles.goBack} />

        <AppText fontSize={16}>
          Por favor, informe o seu{' '}
          <AppText fontSize={16} type="bold" customStyle={styles.focus}>
            Nome
          </AppText>
        </AppText>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value) => handleSubmit(value)}>
          {({
            handleChange,

            handleSubmit,
            values,
            touched,
            errors,
          }) => (
            <>
              <View>
                <TextInput
                  value={values.nome}
                  placeholderTextColor="#23364E7F"
                  style={styles.input}
                  onChangeText={handleChange('nome')}
                />
                {errors.nome && touched.nome ? (
                  <Text style={styles.erro}>{errors.nome}</Text>
                ) : null}
              </View>

              <Button
                customStyle={styles.nextButton}
                label="Próximo"
                onPress={handleSubmit}
                testID="btn_next"
              />
            </>
          )}
        </Formik>
      </Container>
    </KeyboardAvoidingView>
  );
};

export default NameForm;
