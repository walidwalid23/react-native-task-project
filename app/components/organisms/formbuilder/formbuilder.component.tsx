import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import Button from "../../atoms/button/button.component";

import { SPACING } from "@/app/constants/spacing.constant";
import { ButtonType, FieldType } from "@/app/enums";
import DropDownModalSheet from "../../atoms/drop-down-modal/drop-down-modal.component";
import NumberField from "../../atoms/number-field/number-field.component";
import PasswordField from "../../atoms/password-field/password-field.component";
import TextField from "../../atoms/text-field/text-field.component";
import { FormBuilderProps } from "./formbuilder.type";

export default function FormBuilder({ fields, onSubmit }: FormBuilderProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [focusedFieldIndex, setFocusedFieldIndex] = useState<number | null>(
    null
  );

  return (
    <View>
      {fields.map((field, currentIndex) => (
        <View key={field.name} style={{ marginBottom: SPACING.md }}>
          <Controller
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { onChange, value } }) => {
              switch (field.fieldType) {
                case FieldType.Text:
                  return (
                    <TextField
                      isFocused={focusedFieldIndex === currentIndex}
                      isError={errors[field.name] ? true : false}
                      onFocus={() => setFocusedFieldIndex(currentIndex)}
                      onBlur={() => setFocusedFieldIndex(null)}
                      placeholder={field.placeholder}
                      value={value}
                      onChangeText={onChange}
                      left={field.leading}
                    />
                  );
                case FieldType.Password:
                  return (
                    <PasswordField
                      secureTextEntry={field.secureTextEntry}
                      isFocused={focusedFieldIndex === currentIndex}
                      isError={errors[field.name] ? true : false}
                      onFocus={() => setFocusedFieldIndex(currentIndex)}
                      onBlur={() => setFocusedFieldIndex(null)}
                      placeholder={field.placeholder}
                      value={value}
                      onChangeText={onChange}
                      left={field.leading}
                      right={field.trailing}
                    />
                  );
                  case FieldType.Number:
                  return (
                    <NumberField
                      secureTextEntry={field.secureTextEntry}
                      isFocused={focusedFieldIndex === currentIndex}
                      isError={errors[field.name] ? true : false}
                      onFocus={() => setFocusedFieldIndex(currentIndex)}
                      onBlur={() => setFocusedFieldIndex(null)}
                      placeholder={field.placeholder}
                      value={value}
                      onChangeText={onChange}
                      left={field.leading}
                      right={field.trailing}
                    />
                  );
                case FieldType.Dropdown:
                  return (
                    <DropDownModalSheet
                      errors={errors}
                      field={field}
                      onChange={onChange}
                      value={value}
                    />
                  );
                default:
                  return <View />;
              }
            }}
          />
          {errors[field.name] && (
            <Text style={{ color: "red" }}>
              {errors[field.name]?.message as string}
            </Text>
          )}
        </View>
      ))}
      <View style={{ height: SPACING.md }} />
      <Button
        buttonText="Submit"
        buttonType= {ButtonType.Primary}
        onPress={handleSubmit((data) => {
          //console.log("submit called:");
          //console.log(data);
          onSubmit(data);
        })}
      />
    </View>
  );
}
