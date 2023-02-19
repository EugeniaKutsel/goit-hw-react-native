import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Text, TextInput, TouchableOpacity, View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";

import styles from "./RegistrationScreen.styled";
import AddUserPhoto from "../../../assets/icons/addUserPhoto";
import { registration } from "../../../redux/auth/authOperations";
import BG from "../../../components/BG/BG";

const initialValues = {
  login: '',
  email: '',
  password: ''
}

const RegistrationScreen = () => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValues);

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
    dispatch(registration(state))
    setState(initialValues);
  }

  return (
    <BG>
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "margin"}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 16 : 78 }}>
              <View style={styles.userPhoto}>
                <TouchableOpacity style={styles.addIcon}>
                  <AddUserPhoto />
                </TouchableOpacity>
              </View>
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