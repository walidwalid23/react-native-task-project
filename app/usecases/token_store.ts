
import * as Keychain from 'react-native-keychain';

const TOKEN_KEY = 'jwt';

export async function storeToken(token: string) {
  try {
    await Keychain.setGenericPassword(TOKEN_KEY, token);
    console.log('JWT saved successfully');
  } catch (error) {
    console.error('Failed to save the token', error);
  }
}

export async function getToken(): Promise<string | null> {
  try {
    const credentials = await Keychain.getGenericPassword();
    if (credentials && credentials.username === TOKEN_KEY) {
      return credentials.password;
    }
    return null;
  } catch (error) {
    console.error('Failed to retrieve token', error);
    return null;
  }
}

export async function deleteToken() {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token deleted successfully');
  } catch (error) {
    console.error('Failed to delete token', error);
  }
}
