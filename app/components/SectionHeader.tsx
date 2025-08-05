import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { colors, fontSizes, margins, paddings, sizes } from "../styles";

export default function SectionHeader({
  title,
  hasIncrease,
  buttonIconName,
  buttonText,
}: {
  title: string;
  hasIncrease: boolean;
  buttonIconName: string;
  buttonText: string;
}) {
  return (
    <View
      style={{ flexDirection: "row", flex: 1, 
        alignItems:"center",justifyContent: "space-between" }}
    >
      {hasIncrease ? (
        <View style={{ flexDirection: "row", alignItems:"center"}}>
          <Text
            style={{
              fontSize: fontSizes.largeFont,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {title}
          </Text>
          <View style={{ width: margins.xxSmallMargin }} />
          <FontAwesome
            name="arrow-up"
            size={sizes.xxSmallSize}
            color={colors.moneyArrowColor}
          />
          <View style={{ width: margins.xxxSmallMargin }} />
          <Text
            style={{
              fontSize: fontSizes.smallFont,
              color: colors.greyIconColor,
            }}
          >
            $224.09
          </Text>
        </View>
      ) : (
        <Text
          style={{
            fontSize: fontSizes.largeFont,
            fontWeight: "bold",
            color: "white",
          }}
        >
          {title}
        </Text>
      )}

      <TouchableOpacity
        style={{
          backgroundColor:'transparent',
          borderWidth: 1,
          borderColor: colors.mediumGreyColor,
          borderRadius: 2222,
          padding: paddings.xxxSmallPadding,
          paddingLeft: paddings.xxSmallPadding,
          paddingRight: paddings.xxSmallPadding,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome
            name={buttonIconName as any}
            size={sizes.xSmallSize}
            color='white'
          />
          <View style={{ width: margins.xxxSmallMargin }} />
          <Text
            style={{
              fontSize: fontSizes.xxSmallFont,
              fontWeight: "bold",
              color: "white",
            }}
          >
            {buttonText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
