import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useMemo, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./drop-down-modal.type";

export default function DropdownModal() {
  const modalRef = useRef<BottomSheetModalMethods>(null);
  const snapPoints = useMemo(() => ["25%"], []);

  const [selected, setSelected] = useState("Select Option");

  const openModal = () => {
    modalRef.current?.present();
  };

  const selectOption = (option: React.SetStateAction<string>) => {
    setSelected(option);
    modalRef.current?.dismiss();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("clicked");
          openModal();
        }}
      >
        <Text style={styles.buttonText}>{selected}</Text>
      </TouchableOpacity>

      <BottomSheetModal
        ref={modalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        {/*  You must use BottomSheetView instead of view*/}
        <BottomSheetView style={styles.sheetContent}>
          {["Option 1", "Option 2", "Option 3"].map((option) => (
            <TouchableOpacity
              key={option}
              style={styles.option}
              onPress={() => {
                console.log("selecting option");
                selectOption(option);
              }}
            >
              <Text>{option}</Text>
            </TouchableOpacity>
          ))}
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
