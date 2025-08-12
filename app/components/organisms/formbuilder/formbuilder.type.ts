import React from "react";
import { UseFormReturn } from "react-hook-form";
import { KeyboardTypeOptions } from "react-native";

interface FormField {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  leading?: React.ReactNode,
  trailing?: React.ReactNode
  rules: object;
}

export interface FormBuilderProps {
  fields: FormField[];
  onSubmit: () => void;
  control: UseFormReturn["control"];
  errors: any;
}
