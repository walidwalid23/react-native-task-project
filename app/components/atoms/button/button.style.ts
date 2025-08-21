import { COLORS } from "@/app/constants/colors.constant";
import { SIZES } from "@/app/constants/sizes.constant";
import { TYPOGRAPHY } from "@/app/constants/typography.constant";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius.full,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: COLORS.primary[500],
  },
  secondary: {
    borderWidth: 1,
    borderColor: COLORS.neutral[500],
  },
  tertiary: {},
  success: {
    backgroundColor: COLORS.success,
  },
  error: {
    backgroundColor: COLORS.error,
  },
  warning: {
    backgroundColor: COLORS.warning,
  },
  disabled: {
    backgroundColor: COLORS.neutral[200],
  },
  buttonText: {
    color: COLORS.neutral[500], // You can adjust the text color here
    fontWeight: TYPOGRAPHY.fontWeights.bold,
  },
  tertiaryButtonText: {
    color: COLORS.primary[500],
    fontWeight: TYPOGRAPHY.fontWeights.bold,
  },
  lightButtonText:{
    color: COLORS.neutral[50],
    fontWeight: TYPOGRAPHY.fontWeights.bold,
  }
});
