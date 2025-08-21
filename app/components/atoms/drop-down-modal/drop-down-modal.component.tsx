import { COLORS } from "@/app/constants/colors.constant";
import { SIZES } from "@/app/constants/sizes.constant";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetModalMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import React, { useMemo, useRef, useState } from "react";
import { FlatList, Keyboard, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-paper";
import BaseTextInput from "../../molecules/base-text-input/base-text-input.component";
import Icon from "../Icon/icon.component";
import { styles } from "./drop-down-modal.style";
import { DropDownModalSheetType } from "./drop-down-modal.type";
export default function DropDownModalSheet({
  field,
  onChange,
  value,
  errors,
}: DropDownModalSheetType) {
  const modalRef = useRef<BottomSheetModalMethods>(null);
  const snapPoints = useMemo(() => ["25%"], []);

  const openDropDownModal = () => {
    modalRef.current?.present();
  };
  const closeDropDownModal = () => {
    if (modalRef.current) {
      modalRef.current.dismiss();
      setIsFocused(false);
    }
  };

  const selectOption = (option: string) => {
    onChange(option);
    closeDropDownModal();
  };

  const options = ["Option 1", "Option 2", "Option 3"];
  const [isFocused, setIsFocused] = useState(false);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          console.log("Input pressed!");
          openDropDownModal();
          Keyboard.dismiss();
          setIsFocused(true);
        }}
      >
        <BaseTextInput
          isError={errors[field.name] ? true : false}
          placeholder={field.placeholder}
          value={value}
          secureTextEntry={field.secureTextEntry}
          keyboardType={field.keyboardType}
          right={
            <TextInput.Icon
              icon={() => (
                          <Icon
                            name="arrow-down2"
                            color={COLORS.neutral[400]}
                            size={SIZES.icon.md}
                          />
                        )}
              onPress={openDropDownModal}
            />
          }
          editable={false}
          isFocused={isFocused}
        />
      </TouchableOpacity>

      <BottomSheetModal
        ref={modalRef}
        index={0}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        {/*  You must use BottomSheetView instead of view*/}
        <BottomSheetView style={styles.sheetContent}>
          <FlatList
            data={options}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.option}
                onPress={() => {
                  console.log("selecting option");
                  selectOption(item);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
}
