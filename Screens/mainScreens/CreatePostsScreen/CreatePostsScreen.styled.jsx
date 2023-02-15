import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32
  },
  camera: {
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8
  },
  image: {
    position: "absolute",
    borderRadius: 8,
  },
  cameraBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF4D",
    borderRadius: 50,
    width: 60,
    height: 60
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
  },
  btnTrash: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F6F6F6",
    borderRadius: 20,
    width: 70, 
    height: 40,
  }
  
})

export default styles;