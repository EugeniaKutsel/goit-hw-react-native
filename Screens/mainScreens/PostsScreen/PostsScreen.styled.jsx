import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingVertical: 32
  },
  containerUser: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32
  },
  userPhoto: {
    marginRight: 8
  },
  userName: {
    fontFamily: "Roboto-Bold",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 15,
    color: "#212121CC"
  },
  imageContainer: {
    marginBottom: 32,
  }
})

export default styles;