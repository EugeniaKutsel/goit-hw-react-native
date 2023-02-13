import { Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";

import styles from "./CreatePostsScreen.styled";
import MapIcon from "../../../assets/icons/mapIcon";

const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
      </View>
      <Text style={styles.loadPhoto}>Загрузите фото</Text>
      <TextInput placeholder="Название..." style={styles.input} />
      <View style={styles.input}>
        <MapIcon styles={styles.icon} />
        <TextInput placeholder="Местность..." style={styles.inputMap} />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.btnText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CreatePostsScreen;