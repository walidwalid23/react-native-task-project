import { BaseTextInputProps } from "../../molecules/base-text-input/base-text-input.type";

export type PasswordFieldProps = Omit<
  BaseTextInputProps,
  | "left"
  | "right"
  | "placeholder"
  | "isFocused"
  | "isError"
  | "onFocus"
  | "onBlur"
  | "value"
  | "onChangeText"
  | "secureTextEntry"
> & {
  // Make these specific properties required
  secureTextEntry: BaseTextInputProps["secureTextEntry"]
  left: BaseTextInputProps["left"];
  right: BaseTextInputProps["right"];
  placeholder: BaseTextInputProps["placeholder"];
  isFocused: BaseTextInputProps["isFocused"];
  isError: BaseTextInputProps["isError"];
  onFocus: BaseTextInputProps["onFocus"];
  onBlur: BaseTextInputProps["onBlur"];
  value: BaseTextInputProps["value"];
  onChangeText: BaseTextInputProps["onChangeText"];
};
