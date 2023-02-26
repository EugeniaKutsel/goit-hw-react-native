import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch } from "react-redux";
import BG from "../../../components/BG/BG";
import { login } from "../../../redux/auth/authOperations";

import styles from "./LoginScreen.styled"

const initialValues = {
  email: '',
  password: ''
}

const LoginScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(true);

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
    dispatch(login(state));
    setState(initialValues)
  }

  const handleShowPassword = () => setShowPassword(!showPassword);

  return (
    <BG>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 16 : 144 }}>
              <Text style={styles.title}>Login</Text>
              <TextInput
                placeholder="Email"
                placeholderTextColor={"#BDBDBD"}
                style={{...styles.input, borderColor: borderInputColorEmail}}
                value={state.email}
                onFocus={() => {setIsShowKeyboard(true), setBorderInputColorEmail("#FF6C00")}}
                onBlur={() => setBorderInputColorEmail("#E8E8E8")}
                onSubmitEditing={keyboardHide}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
              />
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Password"
                  secureTextEntry={showPassword}
                  style={{...styles.input, borderColor: borderInputColorPassword}}
                  value={state.password}
                  onFocus={() => {setIsShowKeyboard(true), setBorderInputColorPassword("#FF6C00")}}
                  onBlur={() => setBorderInputColorPassword("#E8E8E8")}
                  onSubmitEditing={keyboardHide}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                />
                  {showPassword ? (
                    <Text style={styles.btnShowPassword} onPress={handleShowPassword}>Show</Text>
                  ) : (
                    <Text style={styles.btnShowPassword} onPress={handleShowPassword}>Hide</Text>
                  )}
              </View>
              {!isShowKeyboard &&
                <>
                  <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.btnText}>Sign in</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Don't have an account?
                    <Link to={{ screen: 'Registration' }}> Sign up</Link>
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

export default LoginScreen;