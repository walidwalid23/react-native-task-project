import React from "react";
import { Controller } from "react-hook-form";
import { Text, View } from "react-native";
import Button from "../../atoms/button/button.component";
import TextField from "./../../atoms/textfield/textfield.component";
import { FormBuilderProps } from "./formbuilder.type";

export default function FormBuilder({
  fields,
  onSubmit,
  control,
  errors,
}: FormBuilderProps) {
  return (
    <View>
      {fields.map((field) => (
        <View key={field.name} style={{ marginBottom: 16 }}>
          <Controller
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { onChange, value } }) => (
              <TextField
                placeholder={field.placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={field.secureTextEntry}
                keyboardType={field.keyboardType}
                left = {field.leading}
                right= {field.trailing}
                
               
                
              
              />
            )}
          />
          {errors[field.name] && (
            <Text style={{ color: "red" }}>{errors[field.name]?.message}</Text>
          )}
        </View>
      ))}
      <View style={{ height: 24 }} />
      <Button buttonText="Submit" onPress={onSubmit} />
    </View>
  );
}
