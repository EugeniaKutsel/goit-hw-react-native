import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './UserAvatar.styled';

import AddUserAvatar from "../../assets/icons/addUserAvatar";
import DeleteAvatarIcon from '../../assets/icons/deleteAvatar';

const UserAvatar = ({avatar, setAvatar}) => {

  const addAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })
    if (!result.canceled) {
      setAvatar(result.assets[0].uri);
    }
  };

   const deleteAvatar = () => {
    setAvatar(null);
  };

  return (
    <View style={styles.imageWrapper}>
      {avatar &&
        (<Image source={{ uri: avatar }} style={{ width: "100%", height: "100%", borderRadius: 16 }} />)}
      {avatar ?
        <View style={styles.userDeleteAvatar}>
          <TouchableOpacity onPress={deleteAvatar}>
            <DeleteAvatarIcon />
          </TouchableOpacity>
        </View>
        : <View style={styles.userAddAvatar}>
          <TouchableOpacity onPress={addAvatar}>
            <AddUserAvatar/>
          </TouchableOpacity>
        </View>}
    </View>
  )
}

export default UserAvatar;