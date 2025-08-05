import { Image, ImageSourcePropType, Text, View } from "react-native";
import { Double } from "react-native/Libraries/Types/CodegenTypes";
import { colors, fontSizes, margins, paddings, sizes } from "../styles";

export default function Goal({
  goalImage,
  text,
  amount,
  percentage,
}: {
  goalImage: ImageSourcePropType;
  text: string;
  amount: Double;
  percentage: Double;
}) {
  return (
    <View
      style={{
        flexDirection: "column",
        flex: 1,
        alignItems: "flex-start",
        backgroundColor: colors.lightBlackColor,
        padding: paddings.smallPadding,
        borderRadius: 8
      }}
    >
      <Image
        source={goalImage}
        style={{ width: sizes.extraLargeSize, height: sizes.extraLargeSize }}
      />
      <View style={{ height: margins.xSmallMargin }} />
      <Text
        style={{
          fontWeight: "bold",
          fontSize: fontSizes.smallFont,
          color: "white",
        }}
      >
        {text}
      </Text>
      <View style={{ height: margins.xSmallMargin }} />
      <Text
        style={{ fontSize: fontSizes.mediumFont, color: colors.lightGreyColor }}
      >
        ${amount}
      </Text>
      <View style={{ height: margins.xxSmallMargin }} />
      <View
        style={{
          flexDirection: "row",
          flex:1,
          height: 6,
          borderRadius: 8,
          overflow: "hidden",
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: colors.selectedColor,
          }}
        />
        <View
          style={{
            flex: percentage,
            backgroundColor: colors.fadedTextColor,
          }}
        />
      </View>
    </View>
  );
}
