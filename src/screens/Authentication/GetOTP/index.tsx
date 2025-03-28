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
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Storage from "@utils/Store";
import { setApiToken } from "@services/app/axiosClient";
import Navigator from "@assets/Modules/Modules";
import { ToastType } from "@components/Toast/ToastType";
import { ApplicationTheme } from "@assets/theme";
import { translate } from "@localization/translate";

const GetOTPScreen = () => {
  const theme = useTheme();
  const { colors } = theme;

  const route = useRoute();
  const user = route?.params?.user || "";
  const isResetPassword = route?.params?.isResetPassword || false;
  const [otp, setOtp] = useState("");
  const { resendOtp, verifyOtp } = useAuthActions();

  const styles = useStyles(theme);

  const handleResendOtp = ({ onSuccess }) => {
    Navigator.showLoading();
    resendOtp({
      data: { username: user },
      callback: ({ data, error }) => {
        if (data) {
          onSuccess?.();
        } else if (error) {
          Navigator?.showToastMsg({
            type: ToastType.ERROR,
            message: error?.responseException?.exceptionMessage,
          });
        }
        Navigator.hideLoading();
      },
    });
  };

  const handleSubmit = () => {
    Navigator.showLoading();
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
        } else if (error) {
          Navigator?.showToastMsg({
            type: ToastType.ERROR,
            message: error?.responseException?.exceptionMessage,
          });
        }
        Navigator.hideLoading();
      },
    });
  };

  return (
    <View style={styles.container}>
      <Image source={images.signInBackground1} style={styles.imageBackground} />
      <View style={styles.content}>
        <View style={styles.backWrapper}>
          <TouchableOpacity
            onPress={() => {
              goBack();
            }}
          >
            <BackIcon fill={colors.white} />
          </TouchableOpacity>
          <Text style={styles.title}>{translate("getOTP.title")}</Text>
        </View>
        <Text style={styles.sendTitle}>{translate("getOTP.sendEmail")}</Text>
        <Text style={styles.email}>{user}</Text>
        <OTPInput
          onResendOtp={handleResendOtp}
          onFilled={(code) => {
            setOtp(code);
          }}
        >
          <Button
            mainColor={colors.black}
            textColor={colors.white}
            style={styles.submitButton}
            onPress={handleSubmit}
          >
            {translate("button.confirm")}
          </Button>
        </OTPInput>
        <Text style={{ color: colors.white, fontSize: 12, marginTop: 54 }}>
          {translate("getOTP.checkEmail")}
        </Text>
      </View>
    </View>
  );
};

const useStyles = ({ colors, alpha }: ApplicationTheme) => {
  return StyleSheet.create({
    content: {
      backgroundColor: colors.suvaGrey + alpha.alpha_50,
      borderRadius: 25,
      padding: 24,
      marginHorizontal: 24,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: colors.white,
    },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
    },
    title: { color: colors.white },
    sendTitle: {
      textAlign: "center",
      fontSize: 14,
      color: colors.white,
      marginTop: 24,
    },
    email: {
      textAlign: "center",
      fontSize: 14,
      color: colors.white,
      fontWeight: "700",
      marginBottom: 14,
    },
    submitButton: { borderRadius: 70, marginTop: 24 },
    backWrapper: { flexDirection: "row", gap: 24 },
  });
};
export default GetOTPScreen;
