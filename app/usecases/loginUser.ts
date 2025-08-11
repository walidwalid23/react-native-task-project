import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Router } from "expo-router";
import { storeToken, storeTokenWithBiometric } from "./token_store";

export async function loginUser(
  username: string,
  password: string,
  setIsFailure: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router: Router,
  isBiometricAvailable: boolean
) {
  try {
    console.log("login user called");
    setIsLoading(true);
    const response = await fetch("http://10.0.2.2:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    if (!response.ok) {
      setIsLoading(false);
      setIsFailure(true);
      throw new Error(`error status: ${response.status}`);
    }

    const data = await response.json();
    // console.log("Response data:", data);
    const jwtToken = data.token;
    if (isBiometricAvailable) {
      await storeTokenWithBiometric(jwtToken);
    } else {
      await storeToken(jwtToken);
    }
    // set loggedin flag to true
    await AsyncStorage.setItem("loggedIn", "true");

    // redirect to homepage
    router.replace("/home");

    setIsLoading(false);
    setIsFailure(false);
  } catch (error) {
    setIsLoading(false);
    setIsFailure(true);
    console.error("Error: ", error);
  }
}
