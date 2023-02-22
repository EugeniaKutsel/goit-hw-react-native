import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  imageWrapper: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,

    zIndex: 1000,
  },
  userAddAvatar: {
    position: "absolute",
    bottom: 14,
    right: 0,

    width: 25,
    height: 25,
    
    transform: [{ translateX: 12 }],
  },
  userDeleteAvatar: {
    position: "absolute",
    bottom: 20,
    right: 0,

    width: 25,
    height: 25,

    backgroundColor: "transparent",

    transform: [{ translateX: 14 / 2 }],
    zIndex: 10000,
  },
})

export default styles;