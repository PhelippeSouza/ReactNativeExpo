import React, { useState } from "react";
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
import { userState } from "../../store/user/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import * as Yup from "yup";
import { Formik } from "formik";

import { setUser } from "../../store/user/action";
import { auth } from "../../../firebase";

interface FormikValues {
  email: string;
  password: string;
}

const PasswordForm = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const UserState = useSelector<RootState, userState>((state) => state.user);

  const initialValues: FormikValues = UserState;

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .length(6, "Digite um senha com ao menos 6 caractéres")
      .required("Você precisar informar um telefone válido"),
  });
  const handleSubmit = async (value: FormikValues) => {
    try {
      setLoading(true);
      dispatch(setUser(value));

      navigation.navigate("Registration");
      auth
        .createUserWithEmailAndPassword(value.email, value.password)
        .then((userCredentials) => {
          const user = userCredentials.user;
        })
        .catch((error) => alert(error.message));

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1, marginTop: 25 }}
    >
      <Container>
        <GoBackButton customStyle={styles.goBack} />

        <AppText fontSize={16}>
          Por favor, informe o sua{" "}
          <AppText fontSize={16} type="bold" customStyle={styles.focus}>
            Senha
          </AppText>
        </AppText>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(value) => handleSubmit(value)}
        >
          {({ handleChange, handleSubmit, errors, touched, values }) => (
            <>
              <View>
                <TextInput
                  placeholder="Password"
                  value={values.password}
                  onChangeText={handleChange("password")}
                  style={styles.Input}
                  secureTextEntry
                />
                {errors.password && touched.password ? (
                  <Text style={styles.erro}>{errors.password}</Text>
                ) : null}
              </View>
              <Button
                customStyle={styles.nextButton}
                label="Registrar"
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

export default PasswordForm;
