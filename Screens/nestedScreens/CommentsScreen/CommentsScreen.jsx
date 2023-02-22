import React, { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

import styles from "./CommentsScreen.styled";
import SendCommentIcon from "../../../assets/icons/sendComment";
import { authSelectors } from "../../../redux/auth/authSelectors";

const CommentsScreen = ({ route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { postId, photo } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const { login, userAvatar } = useSelector(authSelectors.getUser);

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

  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image source={{ uri: photo }} style={{width: "100%", height: 240, borderRadius: 8}} />
      </View>
          <FlatList data={allComments} keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <View style={styles.commentsList}>
                <Image source={{uri: userAvatar}} style={styles.photoUser} />
                <Text style={styles.commentText}>{item.comment}</Text>
              </View>
            }
          />
        <View style={styles.inputWrapper}>
            <TextInput style={styles.input}
              onChangeText={setComment} placeholder="Comments..." />
          <TouchableOpacity onPress={addComment}>
            <SendCommentIcon />
          </TouchableOpacity>
          </View>
      </View>
  )
}

export default CommentsScreen;