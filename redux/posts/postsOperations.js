import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

const addPost = ({title, locationName, photoUrl, userId, login, userAvatar, location}) => async (dispatch, getState) => {
  try {
    // Add post to firestore
    await addDoc(collection(db, "posts"), {
      userId,
      login,
      userAvatar,
      title,
      locationName,
      location,
      photoUrl,
    });
  } catch (error) {
    alert(error.message);
  }
};

const postsOperations = {
  addPost
};

export default postsOperations;