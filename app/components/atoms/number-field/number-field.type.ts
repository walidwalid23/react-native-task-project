import { BaseTextInputProps } from "../../molecules/base-text-input/base-text-input.type";

export type NumberFieldProps = Omit<
  BaseTextInputProps,
  | "left"
  | "placeholder"
  | "isFocused"
  | "isError"
  | "onFocus"
  | "onBlur"
  | "value"
  | "onChangeText"
  | "keyboardType"
> & {
  // Make these specific properties required
  // we didn't add the keyboard type here cause we will give it a constant value
  left: BaseTextInputProps["left"];
  placeholder: BaseTextInputProps["placeholder"];
  isFocused: BaseTextInputProps["isFocused"];
  isError: BaseTextInputProps["isError"];
  onFocus: BaseTextInputProps["onFocus"];
  onBlur: BaseTextInputProps["onBlur"];
  value: BaseTextInputProps["value"];
  onChangeText: BaseTextInputProps["onChangeText"];
};
