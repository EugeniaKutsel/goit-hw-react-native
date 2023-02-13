import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from "react-native";

import styles from "./LoginScreen.styled"

const initialValues = {
  email: '',
  password: ''
}

const LoginScreen = ({setIsAuth}) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValues);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const onSubmit = () => {
    console.log(state);
    setState(initialValues);
    setIsAuth(true);
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.imageBG}
          source={require("../../../assets/images/Photo_BG.png")}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 144 }}>
              <Text style={styles.title}>Войти</Text>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  placeholder="Адрес электронной почты"
                  style={styles.input}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                  onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                  formSubmit();
                }}
                />
              </View>
              <View style={styles.input}>
                <View style={{ flex: 4 }}>
                  <TextInput
                    placeholder="Пароль"
                    secureTextEntry={true}
                    style={styles.inputText}
                    onFocus={() => setIsShowKeyboard(true)}
                    value={state.password}
                    onChangeText={(value) => setState((prevState) => ({ ...prevState, password: value }))}
                    onSubmitEditing={() => {
                  setIsShowKeyboard(false);
                  formSubmit();
                }}
                  />
                </View>
                <View>
                  <TouchableOpacity style={styles.btnInput}>
                  <Text style={styles.btnInputText}>Показать</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {!isShowKeyboard &&
                <>
                  <TouchableOpacity style={styles.button} onPress={onSubmit}>
                    <Text style={styles.btnText}>Войти</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Нет аккаунта?
                    <Link to={{ screen: 'Registration' }}> Зарегистрироваться</Link>
                  </Text>
                </>
              }
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen;