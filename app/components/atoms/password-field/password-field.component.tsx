import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
import { PasswordFieldProps } from "./password-field.type";

export default function PasswordField({ ...restProps }: PasswordFieldProps) {
  return <BaseTextInput {...restProps}  />;
}
