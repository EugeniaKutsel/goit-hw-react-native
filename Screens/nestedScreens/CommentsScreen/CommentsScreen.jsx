import React, { useEffect, useState } from "react";
import { FlatList, Image, Keyboard, KeyboardAvoidingView, ScrollView, ScrollViewComponent, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../../../firebase/config";
import { addDoc, collection, doc, onSnapshot } from "firebase/firestore";

import styles from "./CommentsScreen.styled";
import SendCommentIcon from "../../../assets/icons/sendComment";
import { authSelectors } from "../../../redux/auth/authSelectors";
import postsOperations from "../../../redux/posts/postsOperations";

const CommentsScreen = ({ route }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const { postId, photo } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const dispatch = useDispatch();

  const [borderInputColorComment, setBorderInputColorComment] = useState("#E8E8E8");

  const { userId } = useSelector(authSelectors.getUser);

  const addComment = () => {
    dispatch(postsOperations.addCommentByPostID(postId, comment));
  };

  const getAllComments = async () => {
     const docRef = doc(db, "posts", postId)
    await onSnapshot(collection(docRef, "comments"), (data) => {
      setAllComments(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }

  useEffect(() => {
   getAllComments()
  }, []);

  
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  const onReserForm = () => {
    setComment("");
  }
  

  return (
      <View style={styles.container}>
         <View style={styles.image}>
        <Image source={{ uri: photo }} style={{ height: 240, borderRadius: 8}} />
          </View>
        <View style={{ ...styles.containerList}} >
          <FlatList data={allComments} keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              ...styles.containerItem,
              flexDirection: item.authorId === userId ? "row-reverse" : "row",
            }}
          >
            <Image
              source={{ uri: item.authorAvatar }}
              style={{
                ...styles.authorAvatar,
                marginRight: item.authorId === userId ? 0 : 16,
                marginLeft: !item.authorId === userId ? 0 : 16,
              }}
            />
            <View
              style={{
                ...styles.commentWrapper,
                borderTopRightRadius: item.authorId === userId ? 0 : 16,
                borderTopLeftRadius: !item.authorId === userId ? 0 : 16,
              }}
            >
              <Text style={styles.commentAuthor}>{item.comment}</Text>
            </View>
          </View>
        )}
      />
            </View>
         <View style={{
        ...styles.inputWrapper,
      }}>
          <TextInput
          onChangeText={setComment}
          onFocus={() => { setIsShowKeyboard(true) }}
            placeholder="Comments..."
            placeholderTextColor={"#BDBDBD"}
            style={styles.input}
          />
          <TouchableOpacity
          onPress={ addComment}
          >
            <SendCommentIcon />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default CommentsScreen;