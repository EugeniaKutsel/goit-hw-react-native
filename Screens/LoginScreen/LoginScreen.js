import React, { useState } from "react";
import { ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, TouchableWithoutFeedback } from "react-native";

const initialValues = {
  email: '',
  password: ''
}

export default function LoginScreen() {
  console.log(Platform.OS);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialValues);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    console.log(state);
    setState(initialValues)
  }
  
  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground style={styles.imageBG} 
        source={require("../../assets/images/Photo_BG.png")}>
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
                  <TouchableOpacity style={styles.button} onPress={keyboardHide}>
                    <Text style={styles.btnText}>Войти</Text>
                  </TouchableOpacity>
                  <Text style={styles.text}>Нет аккаунта? Зарегистрироваться</Text>
                </>
              }
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBG: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end'
  },
  form: {
    backgroundColor: "#ffffff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    height: 50
  },
  inputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
  },
  btnInputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    paddingRight: 16
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 43
  },
  btnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#FFFFFF",
    textAlign: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371"
  }
});