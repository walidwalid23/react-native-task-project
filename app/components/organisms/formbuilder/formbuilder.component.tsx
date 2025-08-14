import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import Button from "../../atoms/button/button.component";

import { SPACING } from "@/app/constants/spacing";
import DropDownModalSheet from "../../atoms/drop-down-modal/drop-down-modal.component";
import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
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
                case "text":
                  return (
                    <BaseTextInput
                      isFocused={focusedFieldIndex === currentIndex}
                      isError={errors[field.name] ? true : false}
                      onFocus={() => setFocusedFieldIndex(currentIndex)}
                      onBlur={() => setFocusedFieldIndex(null)}
                      placeholder={field.placeholder}
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={field.secureTextEntry}
                      keyboardType={field.keyboardType}
                      left={field.leading}
                      right={field.trailing}
                      disabled={field.isDisabled}
                    />
                  );
                case "dropdown":
                  return (
                  <DropDownModalSheet errors={errors} field={field} onChange={onChange} value={value} />
                  );
                default:
                  return (
                    <BaseTextInput
                      isFocused={focusedFieldIndex === currentIndex}
                      isError={errors[field.name] ? true : false}
                      onFocus={() => setFocusedFieldIndex(currentIndex)}
                      onBlur={() => setFocusedFieldIndex(null)}
                      placeholder={field.placeholder}
                      value={value}
                      onChangeText={onChange}
                      secureTextEntry={field.secureTextEntry}
                      keyboardType={field.keyboardType}
                      left={field.leading}
                      right={field.trailing}
                      disabled={field.isDisabled}
                    />
                  );
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
        onPress={handleSubmit((data) => {
          console.log("submit called");
          onSubmit(data);
        })}
      />
    </View>
  );
}
