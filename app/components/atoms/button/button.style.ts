import { COLORS } from "@/app/constants/colors.constant";
import { SIZES } from "@/app/constants/sizes.constant";
import { TYPOGRAPHY } from "@/app/constants/typography.constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  primary: {
    borderRadius: SIZES.radius.full,
    backgroundColor: COLORS.primary[500],
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  secondary: {
    borderRadius: SIZES.radius.full,
    borderColor: COLORS.neutral[500],
    borderWidth: 1,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  tertiary: {
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.neutral[500], // You can adjust the text color here
  },
  tertiaryButtonText:{
    color: COLORS.primary[500],
    fontWeight: TYPOGRAPHY.fontWeights.bold
  }
});
