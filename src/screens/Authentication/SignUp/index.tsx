import images from "@assets/images";
import Navigator from "@assets/Modules/Modules";
import { alpha, ApplicationTheme } from "@assets/theme";
import Button from "@components/Button";
import HFTextInput from "@components/HookForm/HFTextInput";
import { PlusOutlineIcon } from "@components/Icon";
import Image from "@components/Image";
import ImagePickerModal from "@components/Modal/ImagePickerModal";
import Text from "@components/Text";
import { ToastType } from "@components/Toast/ToastType";
import { EMAIL_REGEX, PASSWORD_REGEX } from "@constants/index";
import { useTheme } from "@hooks/useTheme";
import { translate } from "@localization/translate";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import useAuthActions from "@redux/useActions/useAuthActions";
import React, { useCallback, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SignUpScreen = () => {
  const theme = useTheme();
  const { colors } = theme;
  const { bottom } = useSafeAreaInsets();
  const { register } = useAuthActions();
  const styles = useStyles(theme);
  const [visiblePicker, setVisiblePicker] = useState(false);

  const { control, watch, handleSubmit, setError, clearErrors, setValue } =
    useForm();
  const formValue = watch();
  const formDisabled =
    !formValue?.email?.trim() ||
    !formValue?.password?.trim() ||
    !formValue?.confirmPassword?.trim();

  const onRegister = useCallback(
    ({ email, password, confirmPassword }: FieldValues) => {
      Navigator.showLoading();
      register({
        data: { email, password, confirmPassword },
        callback: ({ error, data }) => {
          if (error) {
            Navigator?.showToastMsg({
              type: ToastType.ERROR,
              message: error?.responseException?.exceptionMessage,
            });
          } else if (data) {
            navigate(StackName.GetOTPScreen, { user: email });
          }
          Navigator.showLoading();
        },
      });
    },
    []
  );

  const onChangeImage = (images: Array<any>) => {
    setValue("images", images[0]);
  };
  return (
    <View style={styles.container}>
      <Image source={images.signUpBackground} style={styles.imageBackground} />
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}
      >
        <View style={styles.logoAppContainer}>
          <Text style={styles.logoText}>{translate("common.titleApp")}</Text>
          <Text style={styles.logoText2}>{translate("common.titleApp")}</Text>
        </View>
        <Text style={styles.title}>{translate("signUp.title")}</Text>
        <TouchableOpacity
          style={{ alignSelf: "center" }}
          onPress={() => {
            setVisiblePicker(true);
          }}
        >
          <Image
            style={styles.avatar}
            source={
              formValue?.images?.uri
                ? { uri: formValue?.images?.uri }
                : images.avatarDefault
            }
          />
          <PlusOutlineIcon fill={colors.transparent} style={styles.plusIcon} />
        </TouchableOpacity>
        <HFTextInput
          placeholder={translate("signUp.email")}
          bottomBorder
          control={control}
          name={"email"}
          rules={{
            pattern: {
              value: EMAIL_REGEX,
              message: translate("validation.invalidEmail"),
            },
          }}
        />
        <HFTextInput
          placeholder={translate("signUp.password")}
          bottomBorder
          control={control}
          name={"password"}
          note={"*" + translate("validation.passwordValid")}
          noteColor={colors.white}
          secureTextEntry
          rules={{
            pattern: {
              value: PASSWORD_REGEX,
              message: translate("validation.passwordValid"),
            },
            validate: (value: string) => {
              if (
                value !== formValue?.confirmPassword &&
                formValue?.confirmPassword
              ) {
                setError("confirmPassword", {
                  message: translate("validation.passwordNotMatch"),
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
          placeholder={translate("signUp.confirmPassword")}
          bottomBorder
          control={control}
          name={"confirmPassword"}
          note={"*" + translate("validation.passwordValid")}
          noteColor={colors.white}
          secureTextEntry
          rules={{
            validate: (value: string) => {
              if (value !== formValue?.password) {
                return translate("validation.passwordNotMatch");
              }
            },
          }}
        />
        <Button
          mainColor={colors.black + alpha.alpha_75}
          textColor={colors.white}
          style={styles.signUpButton}
          disabled={formDisabled}
          onPress={handleSubmit(onRegister)}
        >
          {translate("button.signUp")}
        </Button>
        <View
          style={{
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 24 + bottom,
          }}
        >
          <Text style={styles.termText}>
            {`Bằng việc Đăng kí / Đăng nhập, bạn đã đồng ý với\n `}
            <Text style={{ fontWeight: "700", fontSize: 12, color: "white" }}>
              Điều khoản và Điều kiện{" "}
            </Text>{" "}
            của chúng tôi.
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <ImagePickerModal
        visible={visiblePicker}
        requestClose={() => {
          setVisiblePicker(false);
        }}
        onSaveImage={(res) => {
          if (res?.length) {
            onChangeImage?.(res);
          }
        }}
      />
    </View>
  );
};

const useStyles = ({ colors, fonts }: ApplicationTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    imageBackground: {
      ...StyleSheet.absoluteFillObject,
      width: "100%",
      height: "100%",
    },
    scrollView: { marginHorizontal: 24, flex: 1 },
    logoAppContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginTop: "40%",
    },
    logoText: { fontSize: 70, color: colors.norwayGreen },
    logoText2: {
      fontFamily: fonts.MTDPortraitScriptBounceRegular,
      position: "absolute",
      fontSize: 70,
      color: colors.white,
    },
    title: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 16,
      marginTop: "20%",
      color: colors.white,
    },
    avatar: { height: 74, width: 74, borderRadius: 40 },
    plusIcon: { position: "absolute", bottom: 0, right: 0 },
    signUpButton: { borderRadius: 70, marginTop: 38 },
    termText: {
      textAlign: "center",
      fontSize: 12,
      color: colors.white,
    },
  });
};

export default SignUpScreen;
