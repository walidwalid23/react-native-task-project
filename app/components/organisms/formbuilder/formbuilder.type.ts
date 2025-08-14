import React from "react";
import { FieldValues } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

export interface FormField {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  leading?: React.ReactElement,
  trailing?: React.ReactElement
  rules: object;
  isDisabled?: boolean,
  fieldType: string

}

export interface FormBuilderProps {
  fields: FormField[];
  onSubmit: (data: FieldValues) => void;
}
