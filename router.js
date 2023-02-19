import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import HomeScreen from "./Screens/mainScreens/HomeScreen/HomeScreen";
import MapScreen from "./Screens/nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen/CommentsScreen";

const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

const useRoute = (isAuth) => {

  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Registration" component={RegistrationScreen}>
        </AuthStack.Screen>
        <AuthStack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen}>
        </AuthStack.Screen>
      </AuthStack.Navigator>
    )
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <MainTab.Screen options={{
        headerLeftLabelVisible: false,
        //header
        title: "Map",
        headerStyle: {
          height: 88,
          
          borderBottomWidth: 1,
          borderBottomColor: "#b3b3b3",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontWeight: "bold",
          fontSize: 17,
          lineHeight: 22,
        }
      }}
        name="Map" component={MapScreen} />
      <MainTab.Screen options={{
        headerLeftLabelVisible: false,
        //header
        title: "Comments",
        headerStyle: {
          height: 88,
          
          borderBottomWidth: 1,
          borderBottomColor: "#b3b3b3",
        },
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontWeight: "bold",
          fontSize: 17,
          lineHeight: 22,
        },
      }}
        name="Comments" component={CommentsScreen} />
    </MainTab.Navigator>
  )
}

export { useRoute};