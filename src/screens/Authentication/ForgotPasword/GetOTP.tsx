import images from "@assets/images";
import Button from "@components/Button";
import { BackIcon } from "@components/Icon";
import Image from "@components/Image";
import OTPInput from "@components/OTPInput";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { goBack, reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import { useRoute } from "@react-navigation/native";
import useAuthActions from "@redux/useActions/useAuthActions";
import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Storage from "@utils/Store";
import { setApiToken } from "@services/app/axiosClient";

const GetOTPScreen = () => {
  const { colors } = useTheme();
  const route = useRoute();
  const user = route?.params?.user || "";
  const isResetPassword = route?.params?.isResetPassword || false;
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorCode, setErrorCode] = useState("");
  const [otp, setOtp] = useState("");
  const { resendOtp, verifyOtp } = useAuthActions();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: colors.white,
      }}
    >
      <Image
        source={images.signInBackground1}
        style={[
          StyleSheet.absoluteFillObject,
          { width: "100%", height: "100%" },
        ]}
      />
      <View
        style={{
          backgroundColor: "#88888880",
          borderRadius: 25,
          padding: 24,
          marginHorizontal: 24,
        }}
      >
        <View style={{ flexDirection: "row", gap: 24 }}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <BackIcon fill={"#FFFFFF"} />
          </TouchableOpacity>

          <Text style={{ color: "white" }}>Nhập mã xác nhận</Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: colors.white,
            marginTop: 24,
          }}
        >
          Mã OTP đã được gửi đến email
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            color: colors.white,
            fontWeight: "700",
            marginBottom: 14,
          }}
        >
          {user || "example@gmail.com"}
        </Text>
        <OTPInput
          onResendOtp={({ onSuccess }) => {
            resendOtp({
              data: { username: user },
              callback: ({ data, error }) => {
                if (data) {
                  onSuccess?.();
                  console.log(data, "<<<");
                }
                if (error) {
                  console.log(error, "<<<<");
                }
              },
            });
          }}
          onFilled={(code) => {
            setOtp(code);
          }}
          onTextChange={() => {
            setIsInvalid(false);
            setErrorCode("");
          }}
          onCodeFilled
        >
          {isInvalid && !!errorCode && (
            <Text
              style={{
                fontSize: 12,
                color: "#E0434D",
                textAlign: "center",
                marginTop: 8,
              }}
            >
              {errorCode || "fdgfdg"}
            </Text>
          )}
          <Button
            mainColor={colors.black}
            textColor={colors.white}
            style={{ borderRadius: 70, marginTop: 24 }}
            onPress={() => {
              verifyOtp({
                data: { username: user, otp: otp },
                callback: ({ data, error }) => {
                  if (data && data?.result) {
                    if (isResetPassword) {
                      reset(StackName.NewPasswordScreen, { otp, user });
                    } else {
                      Storage.setData(Storage.key.authToken, data?.result);
                      setApiToken(data?.accessToken);
                      reset(StackName.HomeBottomTab);
                    }
                  }
                },
              });
            }}
          >
            Xác Nhận
          </Button>
        </OTPInput>
        <Text style={{ color: colors.white, fontSize: 12, marginTop: 54 }}>
          Kiểm tra thêm Hòm thư rác nếu không thấy OTP.
        </Text>
      </View>
    </View>
  );
};

export default GetOTPScreen;
