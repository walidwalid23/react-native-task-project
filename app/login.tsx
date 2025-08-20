import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View
} from "react-native";
import * as Keychain from "react-native-keychain";
import { TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import Button from "./components/atoms/button/button.component";
import Icon from "./components/atoms/Icon/icon.component";
import Logo from "./components/atoms/logo/logo.component";
import FormBuilder from "./components/organisms/formbuilder/formbuilder.component";
import { FormField } from "./components/organisms/formbuilder/formbuilder.type";
import { COLORS } from "./constants/colors.constant";
import { SIZES } from "./constants/sizes.constant";
import { SPACING } from "./constants/spacing.constant";
import { TYPOGRAPHY } from "./constants/typography.constant";
import { ButtonType, FieldType } from "./enums";
import { AppDispatch } from "./store/store";
import { loginUser } from "./usecases/loginUser";
import { loginUserWithBiometrics } from "./usecases/LoginUserWithBiometrics";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const textFieldsData: FormField[] = [
    {
      fieldType: FieldType.Text,
      name: "username",
      placeholder: "Enter Username",
      leading: (
       <TextInput.Icon icon={()=> <Icon name="chrome" color={COLORS.neutral[400]} size={SIZES.icon.md} />} />
      ),
      rules: {
        required: "Username field is required",
        minLength: {
          value: 2,
          message: "Username must be at least 2 characters.",
        },
      },
    },
    {
      fieldType: FieldType.Password,
      name: "password",
      placeholder: "Enter Password",
      secureTextEntry: showPassword ? false : true,
      leading: (
        <TextInput.Icon
          icon="lock"
          color={COLORS.neutral[400]}
          size={SIZES.icon.md}
        />
      ),
      trailing: (
        <TextInput.Icon
          icon={showPassword ? "eye-off" : "eye"}
          color={COLORS.neutral[400]}
          size={SIZES.icon.md}
          onPress={() => setShowPassword(!showPassword)}
        />
      ),
      rules: {
        required: "Password field is required",
        minLength: {
          value: 3,
          message: "Password must be at least 3 characters.",
        },
      },
    },
    {
      fieldType: FieldType.Number,
      name: "number",
      placeholder: "Enter Number",
      rules: {
        required: "Number field is required",
        pattern: {
          value: /^\d*$/, // Only numeric input
          message: "Only numbers are allowed",
        },
      },
    },
    {
      fieldType: FieldType.Dropdown,
      name: "options",
      placeholder: "Select option",
      rules: {
        required: "Please select an option",
      },
    },
  ];
  const [isBiometricAvailable, setIsBiometricAvailable] = useState(false);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const checkBiometric = async () => {
      try {
        const biometricAvailable = await Keychain.getSupportedBiometryType();
        if (biometricAvailable) {
          setIsBiometricAvailable(true);
        }
      } catch (error) {
        console.error("Failed to check biometric availability:", error);
        setIsBiometricAvailable(false);
      }
    };
    checkBiometric();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.neutral[100],
        padding: SPACING.lg,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Logo width={251.61} height={113.22} />
      <View style={{ height: SPACING.xl }} />
      <FormBuilder
        fields={textFieldsData}
        onSubmit={(data) => {
          loginUser(
            data.username,
            data.password,
            setIsFailure,
            setIsLoading,
            router,
            isBiometricAvailable,
            dispatch
          );
        }}
      />
      <View style={{ height: SPACING.md }} />
      {isBiometricAvailable ? (
        <Button
          buttonText="Login with biometric"
          buttonType={ButtonType.Secondary}
          onPress={() => {
            loginUserWithBiometrics(
              setIsFailure,
              setIsLoading,
              router,
              dispatch
            );
          }}
        />
      ) : null}

      {isLoading ? (
        <ActivityIndicator size={SIZES.icon.lg} color={COLORS.primary[500]} />
      ) : null}
      {isFailure ? (
        <Text
          style={{
            fontSize: TYPOGRAPHY.fontSizes.body,
            fontWeight: TYPOGRAPHY.fontWeights.medium,
            color: COLORS.error,
          }}
        >
          Login Failed
        </Text>
      ) : null}
    </View>
  );
}
