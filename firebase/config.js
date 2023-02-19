import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import {getFirestore} from "firebase/firestore";

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

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);



