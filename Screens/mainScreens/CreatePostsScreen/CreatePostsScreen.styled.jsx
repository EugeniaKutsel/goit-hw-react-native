import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32
  },
  cameraWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8E8E8"
  },
  pickPhoto: {
    position: "absolute",
  },
  cameraBtn: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
    width: 60,
    height: 60
  },
  loadPhotoText: {
    marginTop: 8,
    color: "#BDBDBD",
    fontSize: 16,
    marginBottom: 32
  },
  openCamera: {
    height: 240,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    borderRadius: 8
  },
  takePhoto: {
    position: "absolute",
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