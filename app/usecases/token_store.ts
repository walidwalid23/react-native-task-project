import * as Keychain from "react-native-keychain";

const TOKEN_KEY = "jwt";

export async function storeToken(token: string) {
  try {
    const isTokenStored = await Keychain.setGenericPassword(TOKEN_KEY, token);
    if (isTokenStored) {
      console.log("JWT saved successfully with biometric access control");
    } else {
      console.log("Couldn't store the JWT");
    }
  } catch (error) {
    console.error("Failed to save credentials", error);
  }
}

export async function storeTokenWithBiometric(token: string) {
  try {
    console.log("store token with biometrics called");
    const isTokenStored = await Keychain.setGenericPassword(TOKEN_KEY, token, {
      accessControl: Keychain.ACCESS_CONTROL.BIOMETRY_ANY,
      //securityLevel: Keychain.SECURITY_LEVEL.SECURE_HARDWARE,
      securityLevel: Keychain.SECURITY_LEVEL.SECURE_SOFTWARE,
    });
    if (isTokenStored) {
      console.log("JWT saved successfully with biometric access control");
    } else {
      throw new Error("Couldn't store the JWT");
    }
  } catch (error) {
    console.error("Failed to save credentials", error);
    throw new Error("Couldn't authenticate biometric");
  }
}

export async function getTokenWithBiometric(): Promise<string | null> {
  try {
    console.log("get token with biometric called");
    // The authenticationPrompt only triggers a biometric prompt if the token was stored with biometric access
    const credentials = await Keychain.getGenericPassword({
      authenticationPrompt: {
        title: "Authenticate to Login",
        subtitle: "Biometric login",
        description: "Use your fingerprint",
        cancel: "Cancel",
      },
    });
    if (credentials) {
      if (credentials.username === TOKEN_KEY) {
        console.log("credentials exist");
        return credentials.password;
      }
    }
    return null;
  } catch (error) {
    console.error("Authentication failed", error);
    return null;
  }
}

// we will not use deleteToken when we are using biometrics cause the token must be stored
// so we be able to log in with fingerprint only
export async function deleteToken() {
  if ((await Keychain.resetGenericPassword()) === true) {
    console.log("Token deleted successfully");
  } else {
    console.error("Failed to delete token");
  }
}
