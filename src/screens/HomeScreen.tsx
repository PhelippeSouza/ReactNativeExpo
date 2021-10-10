import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { auth } from "../../firebase";
import ConfirmModal from "../components/Modal/ConfirmModal";

const HomeScreen = () => {
  const [showmodal, setShowmodal] = useState(false);
  const navigation = useNavigation();
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };

  const handleMap = () => {
    navigation.navigate("Maps");
  };
  return (
    <>
   
      <View style={styles.container}>
        <Text> Email: {auth.currentUser?.email} </Text>
        <TouchableOpacity style={styles.button} onPress={handleSignOut}>
          <Text style={styles.buttonText}> Sair</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleMap}>
          <Text style={styles.buttonText}> Ir para Mapa</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  button: {
    backgroundColor: "#00008B",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 3,
  },
});
