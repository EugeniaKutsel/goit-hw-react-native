import React, { useState } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, View } from "react-native";

import RegistrationScreen from './Screens/auth/RegistrationScreen/RegistrationScreen';
import LoginScreen from './Screens/auth/LoginScreen/LoginScreen';
import PostsScreen from './Screens/mainScreens/PostsScreen/PostsScreen';
import CreatePostsScreen from './Screens/mainScreens/CreatePostsScreen/CreatePostsScreen';
import ProfileScreen from './Screens/mainScreens/ProfileScreen/ProfileScreen';
import PostsIcon from "./assets/icons/posts";
import CreatePostIcon from "./assets/icons/createPostIcon";
import ProfileIcon from "./assets/icons/profileIcon";
import LogOutIcon from "./assets/icons/logOutIcon";
import BackIcon from "./assets/icons/backIcon";

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

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
    <MainTab.Navigator screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 83,

        paddingBottom: 34,
        paddingTop: 9,
        paddingHorizontal: 46,

        borderTopWidth: 1,
        borderTopColor: "#b3b3b3"
      }
    }}>
      <MainTab.Screen options={{
        //header
        title: "Публикации",
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

        headerRight: () => (
          <TouchableOpacity style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            right: 16
          }}>
            <LogOutIcon onPress={() => setIsAuth(false)}/>
          </TouchableOpacity>
        ),
        
        tabBarIcon: ({ focused, size, color }) => (
          <PostsIcon />
        ),
      }} name="Posts" component={PostsScreen} />
      <MainTab.Screen options={{
        //header
        title: "Создать публикацию",
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

        headerLeft: () => (
          <TouchableOpacity style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            left: 16
          }}>
            <BackIcon />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, size, color }) => (
          <View style={{backgroundColor: "#FF6C00", width: 70, alignItems: "center", borderRadius: 20}}>
            <CreatePostIcon />
          </View>
        )
      }} name="Create Posts" component={CreatePostsScreen} />
      <MainTab.Screen options={{
        //header
        title: "Профиль",
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

        headerRight: () => (
          <TouchableOpacity style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            right: 16
          }}>
            <LogOutIcon onPress={() => setIsAuth(false)}/>
          </TouchableOpacity>
        ),
        tabBarIcon: ({ focused, size, color }) => (
          <ProfileIcon />
        )
      }} name="Profile" component={ProfileScreen} />
    </MainTab.Navigator>
  )
}