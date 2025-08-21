import { ButtonState, ButtonType } from "@/app/enums";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";
import { ButtonProps } from "./button.type";

export default function Button({
  buttonText,
  buttonType,
  buttonState,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.button,
        buttonState === ButtonState.Default
          ? styles[buttonType]
          : styles[buttonState],
      ]}
    >
      <Text
        style={
          buttonType === ButtonType.Tertiary
            ? styles.tertiaryButtonText
            : buttonState === ButtonState.Error ||
              buttonState === ButtonState.Success
            ? styles.lightButtonText
            : styles.buttonText
        }
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
}
