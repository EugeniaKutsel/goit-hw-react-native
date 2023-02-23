import { addDoc, collection, doc} from "firebase/firestore";
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

const addCommentByPostID =
  (postId, commentData) => async (dispatch, getState) => {
    try {
      // Get data from state
      const { login, userId, userAvatar } = getState().auth.user;

      // Create comment
      const comment = {
        comment: commentData,
        authorName: login,
        authorId: userId,
        authorAvatar: userAvatar,
        postId: postId,
      };

      // Get ref to post by postId
      const docRef = doc(db, "posts", postId);

      // Add comment to collection
      await addDoc(collection(docRef, "comments"), { ...comment });
    } catch (error) {
      alert(error.message);
    }
  };



const postsOperations = {
  addPost,
  addCommentByPostID,
};

export default postsOperations;