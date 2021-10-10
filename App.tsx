import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import LoginScreens from "./src/screens/LoginScreens";
import MapsScreen from "./src/screens/MapsScreen";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/index";
import { PersistGate } from "redux-persist/integration/react";
import EmailForm from "./src/screens/Signup/EmailForm";
import NameForm from "./src/screens/Signup/NameForm";
import PasswordForm from "./src/screens/Signup/PasswordForm";
import Registration from "./src/screens/Signup/Registration";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={LoginScreens}
            />
            <Stack.Screen
              options={{ headerShown: false}}
              name="EmailForm"
              component={EmailForm}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="NameForm"
              component={NameForm}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="PasswordForm"
              component={PasswordForm}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Registration"
              component={Registration}
            />
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="Maps"
              options={{ headerShown: false }}
              component={MapsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
