import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./PostsScreen.styled";
import CommentsIcon from "../../../assets/icons/commentsIcon";
import MapIcon from "../../../assets/icons/mapIcon";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../firebase/config";
import { useSelector } from "react-redux";

const PostsScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const { email, login } = useSelector((state) => state.auth)

  const getAllPosts = async () => {
    await onSnapshot(collection(db, "posts"), (data) => {
      setPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }

  useEffect(() => {
    getAllPosts();
  }, [])
  
  return (
    <View style={styles.container}>
       <View style={styles.containerUser}>
            <Image
              source={require("../../../assets/images/photoUserExample.png")}
              style={styles.userPhoto}
            />
            <View>
          <Text style={styles.userName}>{login}</Text>
              <Text style={styles.userEmail}>{email}</Text>
            </View>
      </View>
      <FlatList data={posts} keyExtractor={(item, index) => item.id} showsVerticalScrollIndicator={false}
        renderItem={({ item }) =>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.photo }} style={{ height: 240, borderRadius: 8 }} />
            <View style={styles.imageDetails}>
              <Text style={styles.name}>{item.title}</Text>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Comments", {postId: item.id, photo: item.photo})} style={{flexDirection: "row", alignItems: "center"}}>
                  <CommentsIcon />
                  <Text style={{ marginLeft: 6, color: "#BDBDBD" }}>0</Text>
                </TouchableOpacity>
                   <TouchableOpacity onPress={() => navigation.navigate("Map", {location: item.location})} style={{flexDirection: "row", alignItems: "center"}}>
                  <MapIcon />
                  <Text style={{marginLeft: 3, fontSize: 16, textDecorationLine: "underline"}}>{item.locationName}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        } />
    </View>
  )
}

export default PostsScreen;