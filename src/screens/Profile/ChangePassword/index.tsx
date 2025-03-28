import Button from "@components/Button";
import { HeaderWithBackIcon } from "@components/Header";
import HFTextInput from "@components/HookForm/HFTextInput";
import React from "react";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ChangePasswordPage = () => {
  const { control } = useForm();
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <HeaderWithBackIcon title={"Đổi mật khẩu"} />
      <View style={{ flex: 1, marginHorizontal: 16, gap: 16 }}>
        <HFTextInput
          name={"oldPassword"}
          control={control}
          placeholder="Mật khẩu cũ"
          label="Mật khẩu cũ"
          secureTextEntry
        />
        <HFTextInput
          name={"newPassword"}
          control={control}
          placeholder="Mật khẩu mới"
          label="Mật khẩu mới"
          note="* Mật khẩu từ 6-12 kí tự & có ít nhất 1 kí tự viết hoa"
          secureTextEntry
        />
        <HFTextInput
          name={"confirmNewPassword"}
          control={control}
          placeholder="Xác nhận mật khẩu mới"
          label="Xác nhận mật khẩu mới"
          secureTextEntry
        />
      </View>
      <Button
        textColor="#F7F7F9"
        mainColor="#9F86C9"
        style={{ height: 52, marginHorizontal: 16, marginBottom: bottom + 20 }}
      >
        Cập nhật
      </Button>
    </View>
  );
};
export default ChangePasswordPage;
