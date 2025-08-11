import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native";
import * as Keychain from "react-native-keychain";
import Button from "./components/atoms/button/button.component";
import Logo from "./components/atoms/logo/logo.component";
import FormBuilder from "./components/organisms/formbuilder/formbuilder.component";
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

  const textFieldsData = [
    {
      name: "username",
      placeholder: "Enter Username",
      rules: {
        required: "Username field is required",
        minLength: {
          value: 2,
          message: "Username must be at least 2 characters.",
        },
      },
    },
    {
      name: "password",
      placeholder: "Enter Password",
      secureTextEntry: true,
      rules: {
        required: "Password field is required",
        minLength: {
          value: 3,
          message: "Password must be at least 3 characters.",
        },
      },
    },
  ];
   const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);

  useEffect(() => {
    const checkBiometric = async () => {
      try {
        const biometricAvailable = await Keychain.getSupportedBiometryType();
        if(biometricAvailable){
        setIsBiometricAvailable(true);
        } 

      } catch (error) {
        console.error("Failed to check biometric availability:", error);
        setIsBiometricAvailable(false); 
      };
    }
       checkBiometric();
  }
    ,[]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000000ff",
        padding: 24,
        flexDirection:'column',
         justifyContent:'center'
       
      }}
    >
      <Logo width={251.61} height={113.22} />
      <View style={{ height: 32 }} />
      <FormBuilder
        fields={textFieldsData}
        control={control}
        errors={errors}
        onSubmit={handleSubmit((data) => {
          console.log("submit called");
          loginUser(
            data.username,
            data.password,
            setIsFailure,
            setIsLoading,
            router,
            isBiometricAvailable
          );
        })}
      />

      <View style={{ height: 24 }} />
      {
        
        (isBiometricAvailable)? <Button
        buttonText="Login with biometric"
        onPress={() => {
          loginUserWithBiometrics(setIsFailure, setIsLoading, router);
        }}
      />:null
      }
     

      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      {isFailure ? (
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
          Login Failed
        </Text>
      ) : null}
    </SafeAreaView>
  );
}
