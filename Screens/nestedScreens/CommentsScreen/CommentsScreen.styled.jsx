import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 32
  },
  containerList: {
    paddingTop: 32,
    height: 323
  },
  containerItem: {
    display: "flex",
    flexDirection: "row",

    paddingBottom: 24,

    backgroundColor: "#FFFFFF",
  },
  authorAvatar: {
    width: 28,
    height: 28,
    borderRadius: 14,
  },
  commentWrapper: {
    flex: 1,
    padding: 16,

    backgroundColor: " rgba(0, 0, 0, 0.03)",
    borderBottomRightRadius: 16,
    borderBottomLeftRadius: 16,
  },
  commentAuthor: {
    marginBottom: 8,

    fontWeight: "400",
    fontSize: 13,
    lineHeight: 18,

    color: "#212121",
  },
   inputWrapper: {
    position: "absolute",
    bottom: 16,
    left: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    backgroundColor: "#F6F6F6",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    paddingLeft: 16,
    paddingRight: 8
  },
})

export default styles;