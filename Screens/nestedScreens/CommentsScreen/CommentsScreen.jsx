import React, { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

import styles from "./CommentsScreen.styled";
import SendCommentIcon from "../../../assets/icons/sendComment";

const CommentsScreen = ({ route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { postId, photo } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const { login } = useSelector((state) => state.auth)

  const addComment = async () => {
    const docRef = doc(db, "posts", postId)
    const createComments = await addDoc(collection(docRef, "comments"), {
      comment,
      login
    })
  }

  const getAllComments = async () => {
    const docRef = doc(db, "posts", postId)
    await onSnapshot(collection(docRef, "comments"), (data) => {
      setAllComments(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }

  useEffect(() => {
    getAllComments();
  }, [])

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: photo }} style={{ height: 240, borderRadius: 8 }} />
        </View>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <View style={{...styles.commentsWrapper, display: isShowKeyboard ? "none" : "flex"}}>
          <FlatList data={allComments} keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <View style={styles.commentsList}>
                <Image source={require("../../../assets/images/Ellipse.png")} style={styles.photoUser} />
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            }
          />
        </View>
        <View style={{...styles.inputWrapper, marginTop: isShowKeyboard ? 20 : 0}}>
            <TextInput style={styles.input}
              onFocus={() => { setIsShowKeyboard(true) }}
              onChangeText={setComment} placeholder="Comments..." />
          <TouchableOpacity onPress={addComment}>
            <SendCommentIcon />
          </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CommentsScreen;