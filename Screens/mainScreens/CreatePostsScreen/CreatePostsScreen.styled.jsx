import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32
  },
  image: {
    alignItems: "center",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8"
  },
  loadPhoto: {
    fontSize: 16,
    color: "#BDBDBD",
    marginTop: 8, 
    marginBottom: 32
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#BDBDBD",
    borderBottomWidth: 1,
    height: 50,
    fontSize: 16,
    paddingTop: 16,
    paddingBottom: 15,
    marginBottom: 16,
  },
  inputMap: {
    fontSize: 16,
    paddingLeft: 4
  },
  button: {
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    height: 51,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 32
  },
  btnText: {
    color: "#BDBDBD",
    fontSize: 16
  }
  
})

export default styles;