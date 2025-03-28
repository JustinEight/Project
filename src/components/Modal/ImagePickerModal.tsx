import React from "react";
import Modal, { ModalProps } from "./index";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@components/Text";
import {
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from "react-native-image-picker";
import { PermissionPicker } from "@utils/PermissionPicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "@hooks/useTheme";
import { alpha, ApplicationTheme } from "@assets/theme";
import { translate } from "@localization/translate";

const ImagePickerModal = ({
  requestClose,
  onSaveImage,
  ...props
}: ModalProps & { onSaveImage?: (res: any) => void }) => {
  const theme = useTheme();
  const { colors, fonts } = theme;
  const styles = useStyles(theme);
  const imagePickerOptions: CameraOptions | ImageLibraryOptions = {
    cameraType: "back",
    saveToPhotos: false,
    mediaType: "photo",
    selectionLimit: 10,
    quality: 1,
    maxWidth: 900,
    maxHeight: 1600,
  };
  const { bottom } = useSafeAreaInsets();
  const callbackResponseImagePicker = (result: ImagePickerResponse) => {
    if (result?.didCancel || result?.errorCode) {
      return;
    }

    onSaveImage?.(result?.assets);
    requestClose?.();
  };

  const openCamera = () => {
    PermissionPicker().camera(() => {
      launchCamera(imagePickerOptions, callbackResponseImagePicker);
    });
  };

  const openLibrary = () => {
    PermissionPicker().photoLibrary(() => {
      launchImageLibrary(imagePickerOptions, callbackResponseImagePicker);
    });
  };
  return (
    <Modal
      {...props}
      containerStyle={{ justifyContent: "flex-end" }}
      requestClose={() => {
        requestClose?.();
      }}
    >
      <View style={[styles.content, { paddingBottom: bottom || 24 }]}>
        <View style={styles.indicator} />
        <TouchableOpacity
          style={styles.item}
          onPress={openCamera}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>{translate("button.camera")}</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.item}
          onPress={openLibrary}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>{translate("button.photoLibrary")}</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            requestClose?.();
          }}
          activeOpacity={0.6}
        >
          <Text style={[styles.text, { color: colors.fireBrickRed }]}>
            {translate("button.cancel")}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const useStyles = ({ colors }: ApplicationTheme) => {
  return StyleSheet.create({
    item: {
      paddingVertical: 16,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
    text: { textAlign: "center", color: colors.manateeBlue },
    content: {
      backgroundColor: colors.white,
      borderTopLeftRadius: 18,
      borderTopRightRadius: 18,
      paddingTop: 8,
    },
    indicator: {
      width: 40,
      height: 6,
      borderRadius: 10,
      backgroundColor: colors.bilobaFlowerViolet,
      alignSelf: "center",
      marginBottom: 8,
    },
    line: {
      height: 1,
      backgroundColor: colors.bilobaFlowerViolet + alpha.alpha_30,
    },
  });
};

export default ImagePickerModal;
