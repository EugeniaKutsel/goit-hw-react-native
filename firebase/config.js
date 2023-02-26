import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCgrlLJaQ2OAia0zDuWbKzDp1vYrr3bjxg",
  authDomain: "photoapp-react-native.firebaseapp.com",
  projectId: "photoapp-react-native",
  storageBucket: "photoapp-react-native.appspot.com",
  messagingSenderId: "1036938078409",
  appId: "1:1036938078409:web:c24a677e673aa353068518",
  measurementId: "G-S0MX0559D4"
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {persistence: getReactNativePersistence(AsyncStorage)});

export const storage = getStorage(app);

export const db = getFirestore(app);



