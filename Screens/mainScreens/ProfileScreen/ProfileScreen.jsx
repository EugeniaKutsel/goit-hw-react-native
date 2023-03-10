import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../../../firebase/config";
import BG from "../../../components/BG/BG";

import styles from "./ProfileScreen.styled";
import LogOutIcon from "../../../assets/icons/logOutIcon";
import CommentsIcon from "../../../assets/icons/commentsIcon";
import MapIcon from "../../../assets/icons/mapIcon";
import LikeIcon from "../../../assets/icons/likesIcon";
import { authSelectors } from "../../../redux/auth/authSelectors";
import DeleteAvatarIcon from "../../../assets/icons/deleteAvatar";

const ProfileScreen = ({ navigation }) => {
  const [userPosts, setUserPosts] = useState([]);
  const dispatch = useDispatch();

  const { userId, login, userAvatar } = useSelector(authSelectors.getUser)

  const getUserPosts = async () => {
    const q = query(collection(db, "posts"), where("userId", "==", userId));
    await onSnapshot(q, (data) => {
     setUserPosts(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    })
  }

  useEffect(() => {
    getUserPosts()
  }, [])

  return (
    <BG>
      <View style={styles.container}>
        <View style={styles.form}>
          <View style={styles.userPhoto}>
            <Image source={{ uri: userAvatar }} style={{width: 120, height: 120, borderRadius: 16}} />
            <TouchableOpacity style={styles.addIcon}>
              <DeleteAvatarIcon />
            </TouchableOpacity>
          </View>
          <LogOutIcon onPress={() => dispatch(logOut())} style={{ position: "absolute", top: 22, right: 16 }} />
          <Text style={styles.title}>{login}</Text>
          <FlatList data={userPosts} keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.photoUrl }} style={{ height: 240, borderRadius: 8 }} />
                <View style={styles.imageDetails}>
                  <Text style={styles.name}>{item.title}</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                      <TouchableOpacity onPress={() => navigation.navigate("Comments", { postId: item.id, photo: item.photoUrl, comment: item.comment })} style={{ flexDirection: "row", alignItems: "center", marginRight: 24 }}>
                        <CommentsIcon />
                        <Text style={{ marginLeft: 6, color: "#BDBDBD" }}>0</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
                        <LikeIcon />
                        <Text style={{ marginLeft: 6, color: "#BDBDBD" }}>0</Text>
                      </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Map", { location: item.location })} style={{ flexDirection: "row", alignItems: "center" }}>
                      <MapIcon />
                      <Text style={{ marginLeft: 3, fontSize: 16, textDecorationLine: "underline" }}>{item.locationName}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            } />
        </View>
    </View>
    </BG>
  )
}

export default ProfileScreen;