import { StyleSheet } from "react-native";

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
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 92,
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
  inputFocus: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#FF6C00",
    height: 50
  },
  btnInputText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
    paddingRight: 16,
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
  },
  userPhoto: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],
    borderRadius: 16,
  },
  addIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    bottom: 14,
    right: 0,
    transform: [{ translateX: 12 }],
  },
})

export default styles;