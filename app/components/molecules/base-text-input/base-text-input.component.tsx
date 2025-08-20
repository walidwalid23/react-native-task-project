import { COLORS } from "@/app/constants/colors.constant";
import { TextInput } from "react-native-paper";
import { styles } from "./base-text-input.style";
import { BaseTextInputProps } from "./base-text-input.type";

export default function BaseTextInput({ ...props }: BaseTextInputProps) {
  const getInputStyle = () => {
    if (props.isError) return [styles.baseTextInput, styles.error];
    if (props.isFocused) return [styles.baseTextInput, styles.focused];
    return styles.baseTextInput;
  };

  return (
    <TextInput
      {...props}
      placeholderTextColor={COLORS.neutral[300]} // this will override prop value since its defined after {...props}
      style={getInputStyle()}
      theme={{
        colors: {
          // changes underline color on focus and indicator color |
          primary: COLORS.primary[500],
        },
      }}
    />
  );
}
