import type { Router } from 'expo-router';
import { storeToken } from "./token_store";

export async function loginUser(
  username: string,
  password: string,
  setIsFailure: React.Dispatch<React.SetStateAction<boolean>>,
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>,
  router:Router
) {
  try {
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
    console.log("Response data:", data);
    const jwtToken = data.token;

    await storeToken(jwtToken);

    // redirect to homepage
    router.replace('/home')

    setIsLoading(false);
    setIsFailure(false);
    
  } catch (error) {
    setIsLoading(false);
    setIsFailure(true);
    console.error("Error making POST request:", error);
  }
}
