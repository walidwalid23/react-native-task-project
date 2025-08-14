import { FieldErrors, FieldValues } from "react-hook-form";
import { FormField } from "../../organisms/formbuilder/formbuilder.type";

export interface DropDownModalSheetType {
  field: FormField;
  onChange: (value: string) => void;
  value: any;
  errors: FieldErrors<FieldValues>;
}
