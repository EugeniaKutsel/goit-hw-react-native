import { Image, Keyboard, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";

import styles from "./CreatePostsScreen.styled";
import CameraIcon from "../../../assets/icons/camera";
import MapIcon from "../../../assets/icons/mapIcon";
import TrashIcon from "../../../assets/icons/trash";
import { useDispatch, useSelector } from "react-redux";
import { authSelectors } from "../../../redux/auth/authSelectors";
import uploadPhotoToServer from "../../../api/uploadPhotoToServer";
import postsOperations from "../../../redux/posts/postsOperations";

const initialState = {
  title: "",
  location: ""
}

const CreatePostsScreen = ({ navigation }) => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  //Camera
  const [camera, setCamera] = useState(null);
  const [cameraIsOpen, setCameraIsOpen] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [photo, setPhoto] = useState(null);

  // Location
  const [location, setLocation] = useState(null);

  // Styles
  const [borderInputColorTitle, setBorderInputColorTitle] = useState("#E8E8E8");
  const [borderInputColorLocation, setBorderInputColorLocation] = useState("#E8E8E8");

  const dispatch = useDispatch();

  const {userId, login, userAvatar} = useSelector(authSelectors.getUser)

  useEffect(() => {
      (async () => {
        try {
          const resCamera = await Camera.requestCameraPermissionsAsync();
          const resMedia = await MediaLibrary.requestPermissionsAsync();
          const resLocation = await Location.requestForegroundPermissionsAsync();

          const statusCamera = resCamera.status;
          const statusMedia = resMedia.status;
          const statusLocation = resLocation.status

          setHasPermission(
            statusCamera === "granted" && statusMedia === "granted" && statusLocation ==="granted"
          );

          const location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        } catch (error) {
          console.log(error);
        }
      })();
  }, [cameraIsOpen]);

  const onCameraToggle = () => {
    setCameraIsOpen(!cameraIsOpen);
  };

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
  }

  const sendPhoto = async () => {
    const photoUrl = await uploadPhotoToServer(photo);
    dispatch(postsOperations.addPost(
      {
        title: state.title,
        locationName: state.location,
        location: location.coords,
        photoUrl,
        userId,
        login,
        userAvatar
      }))
    navigation.navigate("PostsScreen")
    resetForm();
  }

  const resetForm = () => {
    setState(initialState);
  }

  return (
    <View style={styles.container}>
      {!cameraIsOpen ?
        <>
          <View style={styles.cameraWrapper}>
            <TouchableOpacity style={styles.cameraBtn} onPress={onCameraToggle}>
              <CameraIcon />
            </TouchableOpacity>
          </View>
          <Text style={styles.loadPhotoText} onPress={() => { }}>Load photo</Text>
        </>
        :
        <>
          <Camera style={styles.openCamera} ref={setCamera}>
            {photo &&
              <View style={styles.takePhoto}>
                <Image source={{ uri: photo }} style={{ width: 343, height: 240 }} />
              </View>
            }
            <TouchableOpacity onPress={takePhoto} style={{ ...styles.cameraBtn, backgroundColor: "#FFFFFF4D" }}>
              <CameraIcon />
            </TouchableOpacity>
          </Camera>
          <Text style={styles.loadPhotoText} onPress={() => { }}>Load photo</Text>
        </>
      }
      <TextInput
        placeholder="Title..."
        placeholderTextColor={"#BDBDBD"}
        style={{ ...styles.input, borderBottomColor: borderInputColorTitle }}
        value={state.title}
        onFocus={() => { setBorderInputColorTitle("#FF6C00") }}
        onBlur={() => setBorderInputColorTitle("#E8E8E8")}
        onChangeText={(value) => setState((prevState) => ({ ...prevState, title: value }))} />
      <View style={{ ...styles.input, borderBottomColor: borderInputColorLocation }}>
        <MapIcon styles={styles.icon} />
        <TextInput
          placeholder="Location..."
          placeholderTextColor={"#BDBDBD"}
          style={styles.inputMap}
          value={state.location}
          onFocus={() => { setBorderInputColorLocation("#FF6C00") }}
          onBlur={() => setBorderInputColorLocation("#E8E8E8")}
          onChangeText={(value) => setState((prevState) => ({ ...prevState, location: value }))} />
      </View>
      <TouchableOpacity style={styles.button} onPress={sendPhoto}>
        <Text style={styles.btnText}>Publish</Text>
      </TouchableOpacity>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-end", paddingBottom: 34, paddingTop: 9 }}>
        <TouchableOpacity style={styles.btnTrash} onPress={resetForm}>
          <TrashIcon style={styles.trashIcon} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreatePostsScreen;