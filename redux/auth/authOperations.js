import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { authSlice } from "./authSlice";


const registration = ({ login, email, password }) =>
  async (dispatch, getState) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user1 = auth.currentUser;
      console.log("user1", user1);
      
      await updateProfile(auth.currentUser, {
        displayName: login,
        email: email
      })

      const user = auth.currentUser;

      const userUpdateProfile = {
        userId: user.uid,
        login: user.displayName,
        email: user.email
      }
      
      dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))
      console.log("user", user);
    } catch (error) {
     console.log(error.message);
    }
  }

const login = ({email, password}) =>
  async (dispatch, getState) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      console.log(user);
    } catch (error) {
     console.log(error.message);
    }
  }

const logOut = () =>
  async (dispatch, getState) => {
    try {
      await signOut(auth);
      dispatch(authSlice.actions.authLogOut())
    } catch (error) {
      console.log(error.message);
    }
  }

const authStateChangeUser = () =>
  async (dispatch, getState) => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUpdateProfile = {
          userId: user.uid,
          login: user.displayName,
          email: user.email
        }
        dispatch(authSlice.actions.updateUserProfile(userUpdateProfile));
        dispatch(authSlice.actions.authStateChange({stateChange: true}))
      }
    })
  }

export {registration, login, logOut, authStateChangeUser}