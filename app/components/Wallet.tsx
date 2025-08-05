import { Image, ImageSourcePropType, Text, View } from "react-native";
import { colors, fontSizes, margins, paddings, sizes } from "../styles";

export default function Wallet({
  iconImage,
  title,
  amount,
}: {
  iconImage: ImageSourcePropType;
  title: string;
  amount: string;
}) {

    return (
         <View
              style={{
                flexDirection: "column",
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start",
                backgroundColor: 'transparent',
                padding: paddings.smallPadding,
                borderWidth:0.5,
                borderRadius: 16,
                borderColor:'#8F8F8F',
               
              }}
            >
              <Image
                       source={iconImage}
                       style={{ width: sizes.mediumSize, height: sizes.mediumSize }}
                     />
               <View style={{ height: margins.xxxxSmallMargin }} />
              <Text
                style={{
                    fontWeight: 'bold',
                  fontSize: fontSizes.smallFont,
                  color: 'white',
                }}
              >
                {title}
              </Text>
              <View style={{ height: margins.xxxxSmallMargin }} />
              <Text
                style={{  fontSize: fontSizes.smallFont, color: colors.lightGreyColor }}
              >
                {amount}
              </Text>
            
             
            </View>
    );
}
