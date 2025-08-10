import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { colors, fontSizes, margins, paddings } from "../styles";

export default function IconTextButton({buttonIconName,text, iconSize}:{
    buttonIconName:string,
    text:string,
    iconSize: Double
}){

    return  <TouchableOpacity
        style={{
          backgroundColor:'transparent',
          borderWidth: 1,
          borderColor: colors.mediumGreyColor,
          borderRadius: 2222,
          padding: paddings.xxxSmallPadding,
          paddingLeft: paddings.xxxSmallPadding,
          paddingRight: paddings.xxxSmallPadding,
          alignItems:'center'
      
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name={buttonIconName as any}
            size={iconSize}
            color='white'
          />
          <View style={{ width: margins.xxxSmallMargin }} />
          <Text
            style={{
              fontSize: fontSizes.xSmallFont,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
}