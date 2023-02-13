import { Image, Text, View } from "react-native";
import React from "react";

import styles from "./PostsScreen.styled";

const PostsScreen = () => {
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
    </View>
  )
}

export default PostsScreen;