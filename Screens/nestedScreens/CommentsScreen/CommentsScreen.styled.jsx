import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ffffff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    paddingTop: 32
  },
  inputWrapper: {
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
  commentsWrapper: {
    alignItems: "center",
    height: 323,
    marginBottom: 32
  },
  commentsList: {
    flexDirection: "row",
    marginVertical: 24,
  },
  photoUser: {
    width: 28,
    height: 28,
    borderRadius: 50,
    marginRight: 16
  },
  commentText: {
    width: "100%",
    fontFamily: "Roboto-Regular",
    fontSize: 13,
    borderRadius: 6,
    borderTopLeftRadius: 0,
    backgroundColor: "#00000008",
    paddingTop: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 35
  }
})

export default styles;