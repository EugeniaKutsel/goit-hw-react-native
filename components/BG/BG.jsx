import { ImageBackground } from "react-native";

import styles from "./BG.styled";

const imageBG = require("../../assets/images/Photo_BG.png");

const BG = ({children}) => {
  return (
    <ImageBackground source={imageBG} style={styles.imageBG}>
      {children}
    </ImageBackground>
  )
}

export default BG;