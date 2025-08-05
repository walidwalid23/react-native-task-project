import { Image, ImageSourcePropType, Text, View } from "react-native";
import { colors, fontSizes, margins, paddings, sizes } from "../styles";

export default function Favourite({
  title,
  subtitle,
  middleComponent,
  largeImage,
  smallImage,
}: {
  title: string;
  subtitle: string;
  middleComponent: React.ReactNode;
  largeImage: ImageSourcePropType;
  smallImage: ImageSourcePropType;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 0.5,
        padding: paddings.smallPadding,
        backgroundColor: "transparent",
        borderRadius: 8,
        borderColor: colors.unSelectedCardBorderColor,
        overflow: "hidden",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Text
          style={{
            fontSize: fontSizes.xxSmallFont,
            color: colors.unSelectedCardBorderColor,
          }}
        >
          {title}
        </Text>
        <View style={{ height: margins.xxxxSmallMargin }} />
        <Text
          style={{
            fontWeight: "bold",
            fontSize: fontSizes.smallFont,
            color: "white",
          }}
        >
          {subtitle}
        </Text>
      </View>
      {middleComponent}

      <View style={{ flexDirection: "row", alignItems:"center" }}>
        <Image
          source={largeImage}
          style={{ width: sizes.largeSize, height: sizes.largeSize }}
        />
        <View style={{ width: margins.xxxxSmallMargin }} />
        <Image
          source={smallImage}
          style={{ width: sizes.mediumSize, height: sizes.mediumSize }}
        />
      </View>
    </View>
  );
}
