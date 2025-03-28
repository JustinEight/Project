import { HeaderWithBackIcon } from "@components/Header";
import React from "react";
import { ScrollView, View } from "react-native";
import SettingItem from "./components/SettingItem";
import Text from "@components/Text";
import Image from "@components/Image";
import icons from "@assets/icons";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";

const AccountInfomationMenu = [
  {
    label: "Quản lý đánh giá",
    onPress: () => {},
  },
  { label: "Tài khoản yêu thích" },
  {
    label: "Tài khoản đã chặn",
    onPress: () => {
      navigate(StackName.BlockedUserPage);
    },
  },
  {
    label: "Đổi mật khẩu",
    onPress: () => {
      navigate(StackName.ChangePasswordPage);
    },
  },
  { label: "Cài đặt khác" },
];
const AccountInfomation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <HeaderWithBackIcon title="Thông tin tài khoản" />
      <ScrollView style={{ flex: 1 }}>
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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ gap: 10, flex: 1 }}>
              <Text style={{ fontSize: 12, fontWeight: "500" }}>
                Tên hiển thị
              </Text>
              <Text
                style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}
              >
                Soo Ah
              </Text>
            </View>
            <View style={{ gap: 10 }}>
              <Text style={{ fontSize: 12, fontWeight: "500" }}>Sinh nhật</Text>
              <Text
                style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}
              >
                {"/   /"}
              </Text>
            </View>
            <Image
              source={icons.calendarIcon}
              style={{
                height: 20,
                width: 20,
                alignSelf: "flex-end",
                marginLeft: 24,
              }}
            />
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginVertical: 2,
            }}
          />
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              Tài khoản / Email
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
              sooah@gmail.com
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginVertical: 2,
            }}
          />
          <View style={{ gap: 10, marginBottom: 2 }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              Số điện thoại
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
              +84 123 456 789
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginVertical: 2,
            }}
          />
          <View style={{ gap: 10 }}>
            <Text style={{ fontSize: 12, fontWeight: "500" }}>
              Địa chỉ chính
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
              Đỗ Đức Dục, Mễ Trì, Nam Từ Liêm, Hà Nội
            </Text>
          </View>
          <View
            style={{
              height: 1,
              backgroundColor: "#8590A280",
              marginBottom: 2,
            }}
          />
          {/* <Text style={{ fontSize: 12, fontWeight: "500" }}> </Text>
          <Text style={{ fontSize: 10, fontWeight: "500" }}></Text> */}
        </View>
        <View style={{ gap: 12, marginTop: 19 }}>
          {AccountInfomationMenu?.map((item, index) => {
            return (
              <SettingItem
                label={item?.label}
                key={index}
                onPress={item?.onPress}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default AccountInfomation;
