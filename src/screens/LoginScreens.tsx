import { useNavigation } from "@react-navigation/core";
import React, { useState, useEffect } from "react";
import {
  Button,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import { auth } from "../../firebase";
import * as Yup from "yup";
import { Formik } from "formik";
import NameForm from "./Signup/NameForm";

const LoginScreens = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();



  useEffect(() => {
    const unsubcribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubcribe;
  }, []);

  const handleSigup = () => {
    // auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then((userCredentials) => {
    //     const user = userCredentials.user;
    //     console.log(user.email);
    //   })
    //   .catch((error) => alert(error.message));
    navigation.navigate("NameForm")
  };
  const handlelogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("logged wiht", user.email);
      })
      .catch((error) => alert("Digite um E-mail válido ou faça o seu registro"));
  };
  return (
 
    <View style={styles.container1}>
      <ImageBackground source={require('../assets/img/keyboard.jpeg')}resizeMode="cover" style={styles.image}>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputcontainer}>
        <Formik>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.Input}
          />
        </Formik>

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.Input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handlelogin} style={styles.button}>
          <Text style={styles.buttonText}> Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSigup}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutilineText}> Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
};

export default LoginScreens;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputcontainer: {
    width: "80%",
  },

  Input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },

  button: {
    backgroundColor: "#00008B",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#00008B",
    borderWidth: 2,
  },
  buttonOutilineText: {
    color: "#00008B",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  
  },
  container1: {
    flex: 1,

  },

});
