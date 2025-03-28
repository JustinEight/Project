import React, { Fragment } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ImageList from "./ImageList";
import MultiSelect from "@components/Dropdown/MultipleSelect";
import Text from "@components/Text";
import Image from "@components/Image";
import icons from "@assets/icons";
import Button from "@components/Button";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useForm } from "react-hook-form";
import HFTextInput from "@components/HookForm/HFTextInput";
import DatePickerInput from "./DatePickerInput";
import CheckList from "./CheckList";
import DropDown from "@components/Dropdown";

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
const FoundHome = () => {
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
          style={{ marginTop: 20 }}
          onChange={(res) => {
            setValue("type", res);
          }}
        />
        <HFTextInput
          control={control}
          name={"title"}
          placeholder="Tiêu đề"
          style={{ marginTop: 20 }}
          containerContentStyle={styles.inputHeight}
          rightIcon={<Text style={styles.limitText}>0/50</Text>}
          label="Tiêu đề"
        />
        <HFTextInput
          control={control}
          name={"description"}
          placeholder="Mô tả"
          style={{ marginTop: 20 }}
          containerContentStyle={styles.textArea}
          multiline
          inputStyle={{ textAlignVertical: "top" }}
          rightIcon={
            <Text style={[styles.limitText, styles.limitTextColor]}>0/500</Text>
          }
          label="Mô tả"
        />
        <View style={styles.row}>
          <HFTextInput
            control={control}
            name={"roomArea"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>m2</Text>}
            label="Diện tích"
          />
          <HFTextInput
            control={control}
            name={"floor"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            label="Tầng"
          />
        </View>
        <View style={styles.row}>
          <HFTextInput
            control={control}
            name={"numberOfPeople"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>người</Text>}
            label="Số người"
          />
          <HFTextInput
            control={control}
            name={"numberOfRooms"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>phòng</Text>}
            label="Số phòng"
          />
        </View>
        <DatePickerInput label={"Ngày vào"} style={{ marginTop: 20 }} />
        <CheckList
          data={[
            { label: "Wifi", value: "1" },
            { label: "Chỗ để xe", value: "2" },
            { label: "Thang máy", value: "3" },
            { label: "Nóng lạnh", value: "4" },
            { label: "Đầy đủ nội thất", value: "5" },
          ]}
        />
        <View style={styles.row}>
          <HFTextInput
            control={control}
            name={"numberOfPeople"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>VND</Text>}
            label="Giá thuê"
          />
          <Text style={styles.unitText}>/</Text>
          <DropDown
            style={{ flex: 1 }}
            label="Theo"
            data={[
              { label: "năm", value: "year" },
              { label: "tháng", value: "month" },
            ]}
            value={formValue?.unit2}
            onChange={(v) => {
              setValue("unit2", v?.value);
            }}
          />
        </View>
        <View style={styles.row}>
          <HFTextInput
            control={control}
            name={"numberOfPeople"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>VND</Text>}
            label="Phí quản lý"
          />
          <Text style={styles.unitText}>/</Text>
          <DropDown
            style={{ flex: 1 }}
            label="Theo"
            data={[
              { label: "năm", value: "year" },
              { label: "tháng", value: "month" },
            ]}
            value={formValue?.unit1}
            onChange={(v) => {
              setValue("unit1", v?.value);
            }}
          />
        </View>
        <View style={styles.row}>
          <HFTextInput
            control={control}
            name={"numberOfPeople"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>VND</Text>}
            label="Giá điện (số)"
          />
          <HFTextInput
            control={control}
            name={"numberOfRooms"}
            placeholder="0"
            keyboardType="numeric"
            style={{ flex: 1 }}
            containerContentStyle={styles.inputHeight}
            rightIcon={<Text style={styles.limitTextColor}>VND</Text>}
            label="Giá nước (khối)"
          />
        </View>

        <View style={[styles.coffeBeanIconWrapper, { marginVertical: 16 }]}>
          <Image
            source={icons.coffeBeanOutlineMediumIcon}
            style={styles.coffeBeanIcon}
          />
          <Text style={styles.flexText}>Thương lượng</Text>
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
  inputHeight: { height: 52 },
  row: { flexDirection: "row", gap: 22, marginTop: 20 },
  textArea: { height: 120, padding: 16 },
  unitText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#8590A2",
    position: "absolute",
    top: 34,
    left: "49%",
  },
});

export default FoundHome;
