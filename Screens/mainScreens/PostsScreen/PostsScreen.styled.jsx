import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32
  },
   containerHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 32
  },
  userPhoto: {
    width: 60,
    height: 60,

    marginRight: 8,

    borderRadius: 16,
  },
  userName: {
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 15,

    color: "#212121",
  },
  userEmail: {
    fontWeight: "400",
    fontSize: 11,
    lineHeight: 13,

    color: "#212121",
  },
  imageContainer: {
    marginBottom: 32
  },
  imageDetails: {
    marginTop: 8
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    marginBottom: 8
  }
})

export default styles;