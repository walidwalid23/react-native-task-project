import AsyncStorage from "@react-native-async-storage/async-storage";
import type { Router } from "expo-router";
import { getTokenWithBiometric } from "./token_store";

export async function loginUserWithBiometrics(
  setIsFailure: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router: Router
) {
  try {
    setIsLoading(true);
    const token = await getTokenWithBiometric();
    setIsLoading(false);
    const isUserAuthenticated = token == null ? false : true;
    if (isUserAuthenticated) {
      // set loggedin flag to true
      await AsyncStorage.setItem("loggedIn", "true");
      // redirect to homepage
      router.replace("/home");

      setIsFailure(false);
    } else {
      setIsFailure(true);
    }
  } catch (error) {
    setIsLoading(false);
    setIsFailure(true);
    console.error("Error making POST request:", error);
  }
}
