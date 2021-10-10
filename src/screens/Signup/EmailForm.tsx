import React from "react";
import Container from "../../components/Container/Container";
import Input from "../../components/Input/Input";
import GoBackButton from "../../components/GoBackButton/GoBackButton";
import styles from "./styles";
import AppText from "../../components/AppText/AppText";
import Button from "../../components/Button/Button";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { userState } from "../../store/user/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as Yup from "yup";
import { Formik } from "formik";

import { setUser } from "../../store/user/action";
import { auth } from "../../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

interface FormikValues {
  email: string;
}

const EmailForm = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const UserState = useSelector<RootState, userState>((state) => state.user);
  const initialValues: FormikValues = UserState;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("E-mail inválido")
      .required("O campo E-mail é Obrigatório"),
  });
  const handleSubmit = async (value: FormikValues) => {
    dispatch(setUser(value));

    navigation.navigate("PasswordForm");

  };
  const Separator = () => {
    return <View style={styles.separator} />;
  };


  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : undefined}
    style={{ flex: 1 , marginTop:25}}
    >
        <Container>
          <GoBackButton customStyle={styles.goBack} />

          <AppText fontSize={16}>
            Por favor, informe o seu{" "}
            <AppText fontSize={16} type="bold" customStyle={styles.focus}>
              E-mail
            </AppText>
          </AppText>
          <Separator />
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(value) => handleSubmit(value)}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <>
                <View style={styles.input}>
                  <TextInput
                    onChangeText={handleChange("email")}
                    value={values.email}
                    keyboardType="default"
                  />
                </View>
                {errors.email && touched.email ? (
                  <Text style={styles.erro}>{errors.email}</Text>
                ) : null}

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

export default EmailForm;
