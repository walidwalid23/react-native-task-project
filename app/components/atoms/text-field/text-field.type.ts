import { BaseTextInputProps } from "../../molecules/base-text-input/base-text-input.type";

export type TextFieldProps = Omit<
  BaseTextInputProps,
  | "left"
  | "placeholder"
  | "isFocused"
  | "isError"
  | "onFocus"
  | "onBlur"
  | "value"
  | "onChangeText"
> & {
  // Make these specific properties required
  left: BaseTextInputProps["left"];
  placeholder: BaseTextInputProps["placeholder"];
  isFocused: BaseTextInputProps["isFocused"];
  isError: BaseTextInputProps["isError"];
  onFocus: BaseTextInputProps["onFocus"];
  onBlur: BaseTextInputProps["onBlur"];
  value: BaseTextInputProps["value"];
  onChangeText: BaseTextInputProps["onChangeText"];
};
