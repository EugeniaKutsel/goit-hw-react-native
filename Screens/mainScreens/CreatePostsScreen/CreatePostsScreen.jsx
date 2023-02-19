import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import { db, storage } from "../../../firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import styles from "./CreatePostsScreen.styled";
import CameraIcon from "../../../assets/icons/camera";
import MapIcon from "../../../assets/icons/mapIcon";
import TrashIcon from "../../../assets/icons/trash";

const initialState = {
  title: "",
  location: ""
}

const CreatePostsScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [isReadyCreate, setIsReadyCreate] = useState(false);
  const [isReadyReset, setIsReadyReset] = useState(false);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [state, setState] = useState(initialState);
  const [location, setLocation] = useState(null);

  const [borderInputColorTitle, setBorderInputColorTitle] = useState("#E8E8E8");
  const [borderInputColorLocation, setBorderInputColorLocation] = useState("#E8E8E8");

  const { userId, login } = useSelector((state) => state.auth)

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri)
  }

  const uploadPost = async () => {
    const photo = await uploadPhoto();
    const createPosts = await addDoc(collection(db, "posts"), {
      userId,
      login,
      photo,
      title: state.title,
      locationName: state.location,
      location: location.coords
    })
  }

  const uploadPhoto = async () => {
    const response = await fetch(photo);
    const file = await response.blob();

    const photoId = Date.now().toString();
    const storageRef = ref(storage, `photos/photo_${photoId}`);

    await uploadBytes(storageRef, file);

    const photoUrl = await getDownloadURL(storageRef);
    return photoUrl;
  }

  useEffect(() => {
    if (photo && state.title && state.location && !isShowKeyboard) {
      setIsReadyCreate(true);
    }
    if (photo || state.title || state.location) {
      setIsReadyReset(true);
    }
  }, [photo, state.title, state.location, isShowKeyboard, setIsReadyCreate]);

  const sendPhoto = () => {
    uploadPost();
    navigation.navigate("PostsScreen", { photo, location })
  }

  const resetForm = () => {
    setState(initialState);
    setIsReadyCreate(false);
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Camera style={styles.camera} ref={setCamera}>
          {photo && <View style={styles.image}>
            <Image source={{ uri: photo }} style={{ width: 343, height: 240 }} />
          </View>}
          <TouchableOpacity style={styles.cameraBtn} onPress={takePhoto}>
            <CameraIcon />
          </TouchableOpacity>
        </Camera>
        <Text style={{...styles.loadPhoto, display: isShowKeyboard ? "none" : "flex" }}>Load photo</Text>
            <TextInput
              placeholder="Title..."
              placeholderTextColor={"#BDBDBD"}
              style={{ ...styles.input, borderBottomColor: borderInputColorTitle }}
              value={state.title}
              onFocus={() => {setIsShowKeyboard(true), setBorderInputColorTitle("#FF6C00")}}
              onBlur={() => setBorderInputColorTitle("#E8E8E8")}
              onChangeText={(value) => setState((prevState) => ({ ...prevState, title: value }))} />
            <View style={{ ...styles.input, borderBottomColor: borderInputColorLocation }}>
              <MapIcon styles={styles.icon} />
              <TextInput
                placeholder="Location..."
                placeholderTextColor={"#BDBDBD"}
                style={styles.inputMap}
                value={state.location}
                onFocus={() => {setIsShowKeyboard(true), setBorderInputColorLocation("#FF6C00")}}
                onBlur={() => setBorderInputColorLocation("#E8E8E8")}
                onChangeText={(value) => setState((prevState) => ({ ...prevState, location: value }))} />
          </View>
          {!isShowKeyboard && <>
            <TouchableOpacity style={{...styles.button, backgroundColor: isReadyCreate? "#FF6C00" : "#F6F6F6"}} onPress={sendPhoto}>
            <Text style={{...styles.btnText, color: isReadyCreate ? "#FFFFFF" : "#BDBDBD"}}>Publish</Text>
          </TouchableOpacity>
          </>}
        </KeyboardAvoidingView>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 34, paddingTop: 9 }}>
          <TouchableOpacity style={styles.btnTrash} onPress={resetForm}>
            <TrashIcon style={styles.trashIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default CreatePostsScreen;