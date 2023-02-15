import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import HomeScreen from "./Screens/mainScreens/HomeScreen/HomeScreen";
import MapScreen from "./Screens/nestedScreens/MapScreen/MapScreen";
import CommentsScreen from "./Screens/nestedScreens/CommentsScreen/CommentsScreen";

const AuthStack = createStackNavigator();
const MainTab = createStackNavigator();

export const useRoute = () => {
   const [isAuth, setIsAuth] = useState(false);
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen options={{ headerShown: false }} name="Registration">
           {() => <RegistrationScreen setIsAuth={setIsAuth} />}
        </AuthStack.Screen>
        <AuthStack.Screen options={{ headerShown: false }} name="Login">
          {() => <LoginScreen setIsAuth={setIsAuth} />}
        </AuthStack.Screen>
      </AuthStack.Navigator>
    )
  }
  return (
    <MainTab.Navigator>
      <MainTab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <MainTab.Screen name="Map" component={MapScreen} />
      <MainTab.Screen name="Comments" component={CommentsScreen}/>
    </MainTab.Navigator>
  )
}