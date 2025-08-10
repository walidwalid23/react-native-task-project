import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

export default function Button({buttonText, onPress}:{
    buttonText: string,
    onPress: (event: GestureResponderEvent) => void
}){

    return (
        <TouchableOpacity
                onPress={onPress}
                style={{
                  borderRadius: 2222,
                  backgroundColor: "#D6D3FF",
                  width: "100%",
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text>{buttonText}</Text>
              </TouchableOpacity>
    );
}