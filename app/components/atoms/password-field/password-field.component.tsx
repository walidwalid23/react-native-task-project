import { COLORS } from "@/app/constants/colors.constant";
import { SIZES } from "@/app/constants/sizes.constant";
import { useState } from "react";
import { TextInput } from "react-native-paper";
import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
import Icon from "../Icon/icon.component";
import { PasswordFieldProps } from "./password-field.type";

export default function PasswordField({ ...props }: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseTextInput
      secureTextEntry = {showPassword?false:true}
      left={
        <TextInput.Icon
          icon={() => (
            <Icon
              name="lock"
              color={COLORS.neutral[400]}
              size={SIZES.icon.md}
            />
          )}
        />
      }
      right={
        <TextInput.Icon
          icon={() => (
            <Icon
              name={showPassword ? "eye" : "eye-blocked"}
              color={COLORS.neutral[400]}
              size={SIZES.icon.md}
            />
          )}
          onPress={() => setShowPassword(!showPassword)}
        />
      }
      {...props}
    />
  );
}
