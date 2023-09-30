// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import FirstScreen from "../components/FirstScreen";
import MainScreen from "../components/MainScreen";
import LoginScreen from "../components/LoginScreen";
import ForgetScreen from "../components/ForgetScreen";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;