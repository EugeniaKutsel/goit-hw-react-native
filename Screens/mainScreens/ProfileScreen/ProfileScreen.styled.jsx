import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
container: {
  flex: 1,
  width: "100%",
  justifyContent: "flex-end",
  marginTop: 147
  },
  form: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 147,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    textAlign: 'center',
    marginTop: 92, 
    marginBottom: 32
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
  imageContainer: {
    flex: 1,
    flexDirection: "column",
    marginBottom: 32,
    height: "100%",
  },
  name: {
    marginTop: 8,
    marginBottom: 8,
    fontSize: 16,
    fontFamily: "Roboto-Medium",
    fontWeight: "500"
  }
})

export default styles