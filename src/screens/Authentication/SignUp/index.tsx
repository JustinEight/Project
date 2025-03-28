import images from "@assets/images";
import Button from "@components/Button";
import DropDown from "@components/Dropdown";
import HFTextInput from "@components/HookForm/HFTextInput";
import { PlusOutlineIcon, RadioCheckIcon } from "@components/Icon";
import Image from "@components/Image";
import Text from "@components/Text";
import TextInput from "@components/TextInput";
import { EMAIL_REGEX } from "@constants/index";
import { useTheme } from "@hooks/useTheme";
import { navigate, reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import useAuthActions from "@redux/useActions/useAuthActions";
import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const { colors, fonts } = useTheme();
  const { bottom } = useSafeAreaInsets();
  const { register } = useAuthActions();

  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
  } = useForm();
  const [formError, setFormError] = useState("");

  const formValue = watch();
  const formDisabled =
    (!formValue?.email?.trim() &&
      !formValue?.password?.trim() &&
      !formValue?.confirmPassword?.trim()) ||
    Object.keys(errors)?.length;

  const onRegister = useCallback(({ email, password, confirmPassword }) => {
    register({
      data: { email, password, confirmPassword },
      callback: ({ error, data }) => {
        if (error) {
          setFormError(error?.responseException?.exceptionMessage || "");
        } else {
          setFormError("");
        }
        if (data) {
          console.log(data);

          navigate(StackName.GetOTPScreen, { user: email });
        }
      },
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}
    >
      <Image
        source={images.signUpBackground}
        style={[
          StyleSheet.absoluteFillObject,
          { width: "100%", height: "100%" },
        ]}
      />
      <View style={{ marginHorizontal: 24 }}>
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
        <Text
          style={{
            fontSize: 20,
            fontWeight: 700,
            marginBottom: 16,
            marginTop: "20%",
            color: colors.white,
          }}
        >
          Tài Khoản Mới
        </Text>
        <TouchableOpacity style={{ alignSelf: "center" }}>
          <Image
            style={{ height: 74, width: 74, borderRadius: 40 }}
            source={images.avatarDefault}
          />
          <PlusOutlineIcon
            fill={colors.transparent}
            style={{ position: "absolute", bottom: 0, right: 0 }}
          />
        </TouchableOpacity>
        <HFTextInput
          placeholder="Tên đăng ký"
          bottomBorder
          control={control}
          name={"email"}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: "invalid",
            },
          }}
        />
        <HFTextInput
          placeholder="Mật khẩu"
          bottomBorder
          control={control}
          name={"password"}
          note="* Mật khẩu từ 6-12 kí tự & có ít nhất 1 kí tự viết hoa"
          noteColor="#FFFFFF"
          secureTextEntry
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: "invalid",
            },
            validate: (value: string) => {
              if (
                value !== formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                setError("confirmPassword", {
                  message: "Your password does not match",
                });
              } else if (
                value === formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                clearErrors("confirmPassword");
              }
              return true;
            },
          }}
        />
        <HFTextInput
          placeholder="Xác nhận lại mật khẩu"
          bottomBorder
          control={control}
          name={"confirmPassword"}
          note="* Mật khẩu từ 6-12 kí tự & có ít nhất 1 kí tự viết hoa"
          noteColor="#FFFFFF"
          secureTextEntry
          rules={{
            validate: (value: string) => {
              if (value !== formValue?.password) {
                return "Your password does not match";
              }
            },
          }}
        />
        <Button
          mainColor={"#000000BF"}
          textColor={colors.white}
          style={{ borderRadius: 70, marginTop: 38 }}
          disabled={formDisabled}
          onPress={handleSubmit(onRegister)}
        >
          Tạo tài khoản
        </Button>
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

export default SignUpScreen;
