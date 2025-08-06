import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { loginUser } from "./usecases/loginUser";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isFailure, setIsFailure] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
      <Image
        source={require("../assets/images/appbar_logo.png")}
        style={{ width: 250, height: 113 }}
      />
      <View style={{ height: 32 }} />
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        placeholderTextColor="#abaaaaff"
        style={{
          backgroundColor: "#4D4D4D",
          width: "100%",
          borderRadius: 8,
          color: "white",
        }}
      />
      <View style={{ height: 16 }} />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#abaaaaff"
        style={{
          backgroundColor: "#4D4D4D",
          borderRadius: 8,
          width: "100%",
          color: "white",
        }}
      />
      <View style={{ height: 24 }} />
      <TouchableOpacity
        onPress={() => {
          loginUser(username, password, setIsFailure, setIsLoading, router);
        }}
        style={{
          borderRadius: 2222,
          backgroundColor: "#D6D3FF",
          width: "100%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Login</Text>
      </TouchableOpacity>
      {isLoading ? <ActivityIndicator size="large" color="#0000ff" /> : null}
      {isFailure ? (
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
          Login Failed
        </Text>
      ) : null}
    </SafeAreaView>
  );
}
