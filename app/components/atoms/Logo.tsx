import { Image } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";

export default function Logo({width, height}:{
    width:Double, height: Double
}){

    return (  <Image
        source={require("../../../assets/images/appbar_logo.png")}
        style={{ width, height }}
      />);
}