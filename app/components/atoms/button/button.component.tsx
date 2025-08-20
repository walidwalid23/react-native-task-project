import { ButtonType } from "@/app/enums";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";
import { ButtonProps } from "./button.type";

export default function Button({
  buttonText,
  buttonType,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={
        buttonType === ButtonType.Primary
          ? styles.primary
          : buttonType === ButtonType.Secondary
          ? styles.secondary
          : styles.tertiary
      }
    >
      <Text
        style={
          buttonType === ButtonType.Tertiary
            ? styles.tertiaryButtonText
            : styles.buttonText
        }
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
