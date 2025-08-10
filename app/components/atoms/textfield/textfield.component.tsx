import { TextInput } from "react-native";
import { styles } from "./textfield.style";
import { TextFieldProps } from "./textfield.type";

export default function TextField({
  ...props
}: TextFieldProps) {
  return (
    <TextInput
      {...props}
      placeholderTextColor="#abaaaaff" // default color if no color is passed as a prop from the parent (TextField)
      style={styles.textField}

    />
  );
}
