import images from "@assets/images";
import Button from "@components/Button";
import HFTextInput from "@components/HookForm/HFTextInput";
import Image from "@components/Image";
import Text from "@components/Text";
import { useTheme } from "@hooks/useTheme";
import { navigate, reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useStyles } from "./hook/useStyles";

import {
  AppleIcon,
  CheckboxIcon,
  CheckboxOutlineIcon,
  FacebookIcon,
  GoogleIcon,
} from "@components/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useAuthActions from "@redux/useActions/useAuthActions";
import Navigator from "@assets/Modules/Modules";
import { ToastType } from "@components/Toast/ToastType";
import { EMAIL_REGEX } from "@constants/index";

const SignInScreen = () => {
  const { colors, fonts } = useTheme();
  const styles = useStyles();
  const { bottom } = useSafeAreaInsets();
  const { login, forgotPassword } = useAuthActions();

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = useForm();

  const formValue = watch();

  const formDisabled =
    !formValue?.email?.trim() && !formValue?.password?.trim();

  const onSubmit = handleSubmit(({ email, password, signInStatus }) => {
    Navigator.showLoading();
    login({
      data: {
        username: email,
        password: password,
        isRememberMe: !!signInStatus,
      },
      callback: ({ error, data }) => {
        if (error) {
          Navigator?.showToastMsg({
            type: ToastType.ERROR,
            message: error?.responseException?.exceptionMessage,
          });
        } else {
          navigate(StackName.GetOTPScreen, { user: email });
        }
        Navigator.hideLoading();
      },
    });
  });

  return (
    <View style={styles.container}>
      <Image
        source={images.signInBackground}
        style={[
          StyleSheet.absoluteFillObject,
          { width: "100%", height: "100%" },
        ]}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 123,
          }}
        >
          <Text style={{ fontSize: 70, color: "#A2B17B" }}>decaf&</Text>
          <Text
            style={{
              fontFamily: fonts.MTDPortraitScriptBounceRegular,
              position: "absolute",
              fontSize: 70,
              color: "#FFFFFF",
            }}
          >
            decaf&
          </Text>
        </View>
        <Text style={styles.title}>Đăng nhập</Text>
        <View style={styles.formContainer}>
          <HFTextInput
            control={control}
            name="email"
            placeholder="Tên người dùng/Email"
            bottomBorder
          />
          <HFTextInput
            control={control}
            name={"password"}
            placeholder="Mật khẩu"
            bottomBorder
            secureTextEntry
            clearError={() => {
              clearErrors("email");
            }}
            rules={{
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid Email Address",
              },
            }}
            rightIcon={
              <Text
                style={{
                  textDecorationLine: "underline",
                  color: "white",
                  fontSize: 14,
                  marginBottom: -18,
                }}
                onPress={() => {
                  if (formValue?.email) {
                    forgotPassword({
                      data: { username: formValue?.email },
                      callback: ({ data, error }) => {
                        if (data) {
                          navigate(StackName.GetOTPScreen, {
                            user: formValue?.email,
                            isResetPassword: true,
                          });
                        }
                        if (error) {
                        }
                      },
                    });
                  } else {
                    setError("email", { message: "Nhập email để tiếp tục!" });
                  }
                }}
              >
                Quên mật khẩu
              </Text>
            }
          />
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 10,
            gap: 4,
          }}
          activeOpacity={1}
          onPress={() => {
            setValue("signInStatus", !formValue?.signInStatus);
          }}
        >
          {formValue?.signInStatus ? (
            <CheckboxIcon fill={"#fff"} />
          ) : (
            <CheckboxOutlineIcon fill={"#fff"} />
          )}
          <Text style={{ fontSize: 14, fontWeight: "400", color: "#fff" }}>
            Duy trì đăng nhập
          </Text>
        </TouchableOpacity>
        <Button
          mainColor={"#000000BF"}
          textColor={colors.white}
          disabled={formDisabled}
          style={{ borderRadius: 70, marginTop: 32, height: 44 }}
          onPress={onSubmit}
        >
          Đăng nhập
        </Button>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 24,
            marginTop: 31,
          }}
        >
          <View style={{ height: 1, flex: 1, backgroundColor: "#B3B9C4" }} />
          <Text style={{ color: "white", fontSize: 14 }}>
            HOẶC ĐĂNG NHẬP BẰNG
          </Text>
          <View style={{ height: 1, flex: 1, backgroundColor: "#B3B9C4" }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            marginTop: 24,
          }}
        >
          <TouchableOpacity
            style={{
              width: 52,
              height: 53,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <GoogleIcon fill={"#FFFFFF"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              height: 53,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <FacebookIcon fill={"#FFFFFF"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 52,
              height: 53,
              justifyContent: "center",
              borderRadius: 30,
              alignItems: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <AppleIcon fill={"#FFFFFF"} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 24 + bottom,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "white",
            }}
          >
            {`Bằng việc Đăng kí / Đăng nhập, bạn đã đồng ý với\n `}
            <Text style={{ fontWeight: "700", fontSize: 12, color: "white" }}>
              Điều khoản và Điều kiện{" "}
            </Text>{" "}
            của chúng tôi.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignInScreen;
