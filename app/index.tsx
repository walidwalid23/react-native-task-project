import { useRouter } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { useSelector } from 'react-redux';
import { RootState } from './store/store';



export default function Index() {
  const router = useRouter();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);


  useEffect(() => {
    const timer = setTimeout(async () => {
 
      //const isLoggedIn = await AsyncStorage.getItem('loggedIn');

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
