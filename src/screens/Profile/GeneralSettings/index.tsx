import { HeaderWithBackIcon } from "@components/Header";
import React from "react";
import { View } from "react-native";
import SettingItemWithSwitch from "./components/SettingItemWithSwitch";
import SettingItem from "../AccountInfomation/components/SettingItem";

const GeneralSettings = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <HeaderWithBackIcon title={"Cài đặt chung"} />
      <View style={{ gap: 10, marginTop: 38 }}>
        <SettingItemWithSwitch label="Thông báo tin nhắn mới" />
        <SettingItemWithSwitch label="Thông báo người quan tâm" />
        <SettingItemWithSwitch label="Thông báo về sản phẩm" />
        <SettingItemWithSwitch label="Hiển thị tối màu" />
        <SettingItem label="Xoá bộ nhớ cache" showRightIcon={false} />
      </View>
    </View>
  );
};
export default GeneralSettings;
