import { COLORS } from "@/app/constants/colors.constant";
import { SIZES } from "@/app/constants/sizes.constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  baseTextInput: {
    backgroundColor: COLORS.neutral[50],
    borderRadius: SIZES.radius.md,
    borderColor: COLORS.neutral[500],
    borderWidth: 1,
    height:48

  },
  focused: {
    borderColor: COLORS.primary[500],

  },
  error: {
    borderColor: COLORS.error,
  },
});
