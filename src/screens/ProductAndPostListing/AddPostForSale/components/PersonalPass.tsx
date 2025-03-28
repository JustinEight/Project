import React, { Fragment } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImageList from "./ImageList";
import MultiSelect from "@components/Dropdown/MultipleSelect";
import TextInput from "@components/TextInput";
import Text from "@components/Text";
import Image from "@components/Image";
import icons from "@assets/icons";
import Button from "@components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import HFTextInput from "@components/HookForm/HFTextInput";

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];
const PersonalPass = () => {
  const { bottom } = useSafeAreaInsets();

  const { watch, setValue, control } = useForm();

  const formValue = watch();

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <ImageList
        imageList={formValue?.imageList}
        style={{ marginTop: 18 }}
        onChangeImage={(res) => {
          setValue("imageList", res);
        }}
      />
      <View style={{ marginHorizontal: 16 }}>
        <MultiSelect
          label={"Phân loại"}
          data={data}
          placeholder="Phân loại"
          style={{ marginTop: 18 }}
          onChange={(res) => {
            setValue("type", res);
          }}
        />
        <HFTextInput
          control={control}
          name={"title"}
          placeholder="Tiêu đề"
          style={{ marginTop: 20 }}
          containerContentStyle={{ height: 52 }}
          rightIcon={<Text style={styles.limitText}>0/50</Text>}
          label="Tiêu đề"
        />
        <HFTextInput
          control={control}
          name={"description"}
          placeholder="Mô tả"
          style={{ marginTop: 20 }}
          containerContentStyle={{ height: 120, padding: 16 }}
          multiline
          inputStyle={{ textAlignVertical: "top" }}
          rightIcon={
            <Text style={[styles.limitText, styles.limitTextColor]}>0/500</Text>
          }
          label="Mô tả"
        />
        <HFTextInput
          control={control}
          name={"price"}
          placeholder="0"
          keyboardType="numeric"
          style={{ marginTop: 20 }}
          containerContentStyle={{ height: 52 }}
          rightIcon={<Text style={styles.limitTextColor}>VND</Text>}
          label="Giá bán"
        />
        <View style={[styles.coffeBeanIconWrapper, { marginTop: 16 }]}>
          <Image
            source={icons.coffeBeanOutlineMediumIcon}
            style={styles.coffeBeanIcon}
          />
          <Text style={styles.flexText}>Nhận trả giá</Text>
        </View>
        <View style={[styles.coffeBeanIconWrapper, { marginVertical: 16 }]}>
          <Image
            source={icons.coffeBeanOutlineMediumIcon}
            style={styles.coffeBeanIcon}
          />
          <Text style={styles.flexText}>Tặng miễn phí</Text>
        </View>
        <Button
          textColor="#F7F7F9"
          mainColor="#9F86C9"
          style={{ marginBottom: bottom || 24 }}
        >
          Đăng tải
        </Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  limitTextColor: { color: "#8590A2" },
  limitText: { fontSize: 13 },
  coffeBeanIconWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#9F86C94D",
    paddingHorizontal: 16,
    height: 52,
    gap: 8,
  },
  coffeBeanIcon: { height: 25, width: 25 },
  flexText: { color: "#000000", flex: 1 },
});
export default PersonalPass;
