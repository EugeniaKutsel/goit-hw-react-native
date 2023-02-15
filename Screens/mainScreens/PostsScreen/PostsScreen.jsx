import { Image, Text, View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

import styles from "./PostsScreen.styled";
import CommentsIcon from "../../../assets/icons/commentsIcon";
import MapIcon from "../../../assets/icons/mapIcon";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params])
    }
  }, [route.params])
  
  return (
    <View style={styles.container}>
       <View style={styles.containerUser}>
            <Image
              source={require("../../../assets/images/photoUserExample.png")}
              style={styles.userPhoto}
            />
            <View>
              <Text style={styles.userName}>Natali Romanova</Text>
              <Text style={styles.userEmail}>email@example.com</Text>
            </View>
      </View>
      <FlatList data={posts} keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.photo }} style={{ height: 240, borderRadius: 8 }} />
            <View style={styles.imageDetails}>
              <Text>Лес</Text>
              <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                  <CommentsIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Map", {location: item.location})}>
                  <MapIcon />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        } />
    </View>
  )
}

export default PostsScreen;