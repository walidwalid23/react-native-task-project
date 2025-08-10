import { TextInput } from "react-native";

export default function TextField({
  value,
  placeholder,
  secureText,
  onChangeText,
}: {
  value: string;
  placeholder: string;
  secureText: boolean;
  onChangeText: (value: string) => void;
}) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor="#abaaaaff"
      style={{
        backgroundColor: "#4D4D4D",
        borderRadius: 8,
        width: "100%",
        color: "white",
      }}
      secureTextEntry={secureText}
    />
  );
}
