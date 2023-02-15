import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as Location from "expo-location";

import styles from "./CreatePostsScreen.styled";
import CameraIcon from "../../../assets/icons/camera";
import MapIcon from "../../../assets/icons/mapIcon";
import TrashIcon from "../../../assets/icons/trash";

const CreatePostsScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let locationRes = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: locationRes.coords.latitude,
        longitude: locationRes.coords.longitude,
      };
      setLocation(coords);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri)
  }

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo, location })
  }

  return (
      <View style={styles.container}>
      <Camera style={styles.camera} ref={setCamera}>
        {photo && <View style={styles.image}>
          <Image source={{ uri: photo }} style={{ width: 343, height: 240 }} />
        </View>}
        <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
          <CameraIcon />
        </TouchableOpacity>
      </Camera>
      <Text style={styles.loadPhoto}>Загрузите фото</Text>
      <TextInput placeholder="Название..." style={styles.input} />
      <View style={styles.input}>
        <MapIcon styles={styles.icon} />
        <TextInput placeholder="Местность..." style={styles.inputMap} />
      </View>
      <TouchableOpacity style={styles.button} onPress={sendPhoto}>
        <Text style={styles.btnText}>Опубликовать</Text>
      </TouchableOpacity>        
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 34, paddingTop: 9 }}>
        <TouchableOpacity style={styles.btnTrash}>
          <TrashIcon style={styles.trashIcon} />
        </TouchableOpacity>
          </View>
    </View>
  )
}

export default CreatePostsScreen;