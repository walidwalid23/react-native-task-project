import { UseFormReturn } from "react-hook-form";


interface FormField {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
  rules: object;
}


export interface FormBuilderProps {
  fields: FormField[];
  onSubmit: () => void;
  control: UseFormReturn["control"];
  errors: any;
}