import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button.style";
import { ButtonProps } from "./button.type";

export default function Button({
  buttonText,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      {...props}
      style={styles.button}
    >
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
