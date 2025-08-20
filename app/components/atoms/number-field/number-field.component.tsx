import { KeyboardTypeOptions } from "react-native";
import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
import { NumberFieldProps } from "./number-field.type";

export default function NumberField({ ...props }: NumberFieldProps) {
  // add the value of the constant omitted(removed) keyboardtype prop
  return <BaseTextInput {...props}  keyboardType={"numeric" as KeyboardTypeOptions}/>;
}
