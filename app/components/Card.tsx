import { Text, View } from "react-native";
import { colors, fontSizes, margins, paddings } from "../styles";

export default function Card({
  name,
  title,
  isActive,
}: {
  name: string;
  title: string;
  isActive: boolean
}) {
  return (isActive)?(
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "flex-start",
        borderWidth:1,
        padding: paddings.smallPadding,
        backgroundColor:'transparent',
        borderRadius: 16,
        borderColor:'#4F5509',
        overflow: 'hidden'
      }}
    >
     
      <Text
        style={{
          fontSize: fontSizes.xxSmallFont,
          color: colors.selectedColor,
        }}
      >
        {name}
      </Text>
      <View style={{ height: margins.xxxxSmallMargin }} />
      <Text
        style={{ fontWeight:'bold', fontSize: fontSizes.smallFont, color: 'white' }}
      >
        {title}
      </Text>
    
     
    </View>
  ): 
  (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: 'transparent',
        padding: paddings.smallPadding,
        borderWidth:0.5,
        borderRadius: 16,
        borderColor:'#8F8F8F',
        overflow: 'hidden'
      }}
    >
     
      <Text
        style={{
          fontSize: fontSizes.xxSmallFont,
          color: colors.unSelectedCardBorderColor,
        }}
      >
        {name}
      </Text>
      <View style={{ height: margins.xxxxSmallMargin }} />
      <Text
        style={{ fontWeight:'bold', fontSize: fontSizes.smallFont, color: 'white' }}
      >
        {title}
      </Text>
    
     
    </View>
  )
 
    
     
   ;
}
