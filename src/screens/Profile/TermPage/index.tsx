import { HeaderWithBackIcon } from "@components/Header";
import React from "react";
import { View } from "react-native";
import SettingItem from "../AccountInfomation/components/SettingItem";
import Text from "@components/Text";

const TermPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <HeaderWithBackIcon title={"Điều khoản"} />
      <View style={{ gap: 11, marginTop: 38 }}>
        <SettingItem showRightIcon={false} label="Điều khoản và chính sách" />
        <SettingItem showRightIcon={false} label="Thông báo " />
        <SettingItem label="Thông tin ứng dụng" />
        <View
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 15,
            marginHorizontal: 25,
            paddingVertical: 12,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#2C333A" }}>
              Phiên bản
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
              v2025.01
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginTop: 4,
              marginBottom: 16,
            }}
          />
          <View
            style={{
              gap: 10,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#2C333A" }}>
              Cập nhật lần cuối
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
              01/01/2025
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginTop: 4,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default TermPage;
