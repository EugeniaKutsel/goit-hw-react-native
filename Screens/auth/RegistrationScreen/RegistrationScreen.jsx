import { Link } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageBackground, Text, TextInput, TouchableOpacity, View, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";

import styles from "./RegistrationScreen.styled";
import AddUserPhoto from "../../../assets/icons/addUserPhoto";

const initialValues = {
  login: '',
  email: '',
  password: ''
}

const RegistrationScreen = ({ setIsAuth }) => {
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
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "margin"}>
            <View style={{ ...styles.form, paddingBottom: isShowKeyboard ? 32 : 78 }}>
              <View style={styles.userPhoto}>
                <TouchableOpacity style={styles.addIcon}>
                  <AddUserPhoto/>
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Регистрация</Text>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  placeholder="Логин"
                  style={styles.input}
                  onFocus={() =>
                    setIsShowKeyboard(true)
                  }
                  value={state.login}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, login: value }))}
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                    formSubmit();
                  }}
                />
              </View>
              <View style={{ marginBottom: 16 }}>
                <TextInput
                  placeholder="Адрес электронной почты"
                  style={styles.input}
                  onFocus={() =>
                    setIsShowKeyboard(true)
                  }
                  value={state.email}
                  onChangeText={(value) => setState((prevState) => ({ ...prevState, email: value }))}
                  onSubmitEditing={() => {
                    setIsShowKeyboard(false);
                    formSubmit();
                  }}
                />
              </View>
              <View style={styles.input}>
                <View style={{ flex: 1 }}>
                  <TextInput
                    placeholder="Пароль"
                    secureTextEntry={true}
                    style={styles.inputText}
                    onFocus={() =>
                      setIsShowKeyboard(true)
                    }
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
                    <Text style={styles.btnText}>Зарегистрироваться</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Уже есть аккаунт?
                    <Link to={{ screen: 'Login' }}> Войти</Link>
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

export default RegistrationScreen;