import { useRouter } from "expo-router";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import Button from "./components/atoms/Button";
import Logo from "./components/atoms/Logo";
import TextField from "./components/atoms/TextField";
import { loginUser } from "./usecases/loginUser";
import { loginUserWithBiometrics } from "./usecases/LoginUserWithBiometrics";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000ff",
        padding: 24,

        alignItems: "center",
      }}
    >
      <Logo width={251.61} height={113.22} />
      <View style={{ height: 32 }} />
      <Controller
        control={control}
        rules={{
          required: "Username field is required",
          minLength: {
            value: 2,
            message: "Username must be atleast 2 characters.",
          },
        }}
        name="username"
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              placeholder="Username"
              value={value}
              onChangeText={onChange}
              secureText={false}
            />
          );
        }}
      />

      {typeof errors.username?.message === "string" ? (
        <Text style={{ color: "red" }}>{errors.username.message}</Text>
      ) : null}

      <View style={{ height: 16 }} />
      <Controller
        control={control}
        rules={{
          required: "Password field is required",
          minLength: {
            value: 3,
            message: "Password must be atleast 3 characters.",
          },
        }}
        name="password"
        render={({ field: { onChange, value } }) => {
          return (
            <TextField
              placeholder="Password"
              value={value}
              onChangeText={onChange}
              secureText={true}
            />
          );
        }}
      />
      {typeof errors.password?.message === "string" ? (
        <Text style={{ color: "red" }}>{errors.password.message}</Text>
      ) : null}

      <View style={{ height: 24 }} />
      <Button
        buttonText="Login"
        onPress={handleSubmit((data) => {
          loginUser(
            data.username,
            data.password,
            setIsFailure,
            setIsLoading,
            router
          );
        })}
      />
      <View style={{ height: 24 }} />
      <Button
        buttonText="Login with biometric"
        onPress={() => {
          loginUserWithBiometrics(setIsFailure, setIsLoading, router);
        }}
      />

      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      {isFailure ? (
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
          Login Failed
        </Text>
      ) : null}
    </SafeAreaView>
  );
}
