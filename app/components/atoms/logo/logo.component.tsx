import { Image } from "react-native";
import { styles } from "./logo.style";
import { LogoProps } from "./logo.type";

export default function Logo({width, height, ...props}:LogoProps){

    return (  <Image
        {...props}
        source={require("../../../../assets/images/logo-black.png")}
        style={[styles.logo,{ width, height }]}
      />);
}