import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(async () => {
 
      const isLoggedIn = await AsyncStorage.getItem('loggedIn');

      if (isLoggedIn) {
        router.replace("/home");
      } else {
        router.replace("/login");
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}
