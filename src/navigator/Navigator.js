// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../components/FirstScreen";
import MainScreen from "../components/MainScreen";
import LoginScreen from "../components/LoginScreen";
import ForgetScreen from "../components/ForgetScreen";
import VerifyScreen from "../components/VerifyScreen";
import RegisterScreen from "../components/RegisterScreen";
import LoginScreen2 from "../components/LoginSrceen2";
import LoginScreen3 from "../components/LoginScreen3";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={FirstScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ForgetScreen" component={ForgetScreen} />
        <Stack.Screen name="VerifyScreen" component={VerifyScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
        <Stack.Screen name="LoginScreen2" component={LoginScreen2} />
        <Stack.Screen name="LoginScreen3" component={LoginScreen3} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;