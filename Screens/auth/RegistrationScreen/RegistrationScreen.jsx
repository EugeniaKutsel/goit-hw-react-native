import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "@react-navigation/native";
import { registration } from "../../../redux/auth/authOperations";
import { Text, TextInput, TouchableOpacity, View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Image } from "react-native";

import styles from "./RegistrationScreen.styled";
import BG from "../../../components/BG/BG";
import UserAvatar from "../../../components/UserAvatar/UserAvatar";

const initialValues = {
  login: '',
  email: '',
  password: ''
}

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValues);
  const [avatar, setAvatar] = useState(null);

  const [borderInputColorLogin, setBorderInputColorLogin] = useState("#E8E8E8");
  const [borderInputColorEmail, setBorderInputColorEmail] = useState("#E8E8E8");
  const [borderInputColorPassword, setBorderInputColorPassword] = useState("#E8E8E8");

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const handleSubmit = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    dispatch(registration({...state, avatar}))
    setState(initialValues);
    setAvatar(null);
  }

  return (
    <BG>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "margin"}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 16 : 78 }}>
              <UserAvatar avatar={avatar} setAvatar={setAvatar}/>
              <Text style={styles.title}>Registration</Text>
              <TextInput
                placeholder="Login"
                placeholderTextColor={"#BDBDBD"}
                style={{...styles.input, borderColor: borderInputColorLogin}}
                value={state.login}
                onFocus={() => { setIsShowKeyboard(true), setBorderInputColorLogin("#FF6C00") }}
                onBlur={() => setBorderInputColorLogin("#E8E8E8")}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#BDBDBD"}
                style={{...styles.input, borderColor: borderInputColorEmail}}
                value={state.email}
                onFocus={() => {setIsShowKeyboard(true), setBorderInputColorEmail("#FF6C00")}}
                onBlur={() => setBorderInputColorEmail("#E8E8E8")}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
              />
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Password"
                  placeholderTextColor={"#BDBDBD"}
                  secureTextEntry={true}
                  style={{...styles.input, borderColor: borderInputColorPassword}}
                  value={state.password}
                  onFocus={() => {setIsShowKeyboard(true), setBorderInputColorPassword("#FF6C00")}}
                  onBlur={() => setBorderInputColorPassword("#E8E8E8")}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                <TouchableOpacity style={styles.btnShowPassword}>
                  <Text style={styles.showPassword}>Show</Text>
                </TouchableOpacity>
              </View>
              {!isShowKeyboard &&
                <>
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Sign up</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Have an account?
                    <Link to={{ screen: 'Login' }}> Sign in</Link>
                  </Text>
                </>
              }
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </BG>
  )
}

export default RegistrationScreen;