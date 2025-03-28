import React from "react";
import Modal, { ModalProps } from "./index";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "@components/Text";
import {
  Asset,
  CameraOptions,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
  MediaType,
} from "react-native-image-picker";
import { PermissionPicker } from "@utils/PermissionPicker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ImagePickerModal = ({
  requestClose,
  onSaveImage,
  ...props
}: ModalProps & { onSaveImage?: (res: any) => void }) => {
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
    <Modal {...props} containerStyle={{ justifyContent: "flex-end" }}>
      <View
        style={{
          backgroundColor: "#fff",
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          paddingHorizontal: 16,
          paddingTop: 8,
          paddingBottom: bottom || 24,
        }}
      >
        <View
          style={{
            width: 40,
            height: 6,
            borderRadius: 10,
            backgroundColor: "#9F86C9",
            alignSelf: "center",
            marginBottom: 8,
          }}
        />
        <TouchableOpacity
          style={styles.item}
          onPress={openCamera}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>{"Camera"}</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: "#9F86C94D" }} />
        <TouchableOpacity
          style={styles.item}
          onPress={openLibrary}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>{"Photo Library"}</Text>
        </TouchableOpacity>
        <View style={{ height: 1, backgroundColor: "#9F86C94D" }} />
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            requestClose?.();
          }}
          activeOpacity={0.6}
        >
          <Text style={styles.text}>{"Cancel"}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  item: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  text: { textAlign: "center", color: "#8590A2" },
});

export default ImagePickerModal;
