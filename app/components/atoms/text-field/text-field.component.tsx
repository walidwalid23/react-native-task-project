import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
import { TextFieldProps } from "./text-field.type";

export default function TextField({ ...restProps }: TextFieldProps) {
  return <BaseTextInput {...restProps} />;
}
