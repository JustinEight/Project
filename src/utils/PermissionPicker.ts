import { Alert, PermissionsAndroid, Platform } from "react-native";
import {
  openSettings,
  PERMISSIONS,
  request,
  requestNotifications,
  RESULTS,
  check,
  requestMultiple,
} from "react-native-permissions";

export const PermissionPicker = () => {
  async function camera(callback?: () => void) {
    if (Platform.OS === "ios") {
      request(PERMISSIONS.IOS.CAMERA).then((result) => {
        if (result === RESULTS.GRANTED) {
          callback && callback();
        } else {
          Alert.alert(
            "Notice",
            "Please accept application for camera to continue",
            [
              { text: "Cancel" },
              {
                text: "OK",
                onPress: () => {
                  openSettings();
                },
              },
            ]
          );
        }
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          callback && callback();
        } else {
          Alert.alert(
            "Notice",
            "Please accept application for camera to continue",
            [
              { text: "Cancel" },
              {
                text: "OK",
                onPress: () => {
                  openSettings();
                },
              },
            ]
          );
        }
      } catch (err) {}
    }
  }
  // ******** PhotoLibrary ******** //
  function photoLibrary(callback?: () => void) {
    check(
      Platform.OS === "ios"
        ? PERMISSIONS.IOS.PHOTO_LIBRARY
        : PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    ).then((per) => {
      if (per === RESULTS.GRANTED) {
        callback && callback();
      } else {
        if (Platform.OS === "ios") {
          request(PERMISSIONS.IOS.PHOTO_LIBRARY).then((result) => {
            if (result === RESULTS.GRANTED) {
              callback && callback();
            } else {
              Alert.alert(
                "Notice",
                "Please accept application for photo library to continue",
                [
                  { text: "Cancel" },
                  {
                    text: "OK",
                    onPress: () => {
                      openSettings();
                    },
                  },
                ]
              );
            }
          });
        } else {
          try {
            requestMultiple([
              PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
              PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
            ]).then((result) => {
              if (
                result[PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE] ===
                  RESULTS.GRANTED ||
                result[PERMISSIONS.ANDROID.READ_MEDIA_IMAGES] ===
                  RESULTS.GRANTED
              ) {
                callback && callback();
              } else {
                Alert.alert(
                  "Notice",
                  "Please accept application for photo library to continue",
                  [
                    { text: "Cancel" },
                    {
                      text: "OK",
                      onPress: () => {
                        openSettings();
                      },
                    },
                  ]
                );
              }
            });
          } catch (err) {}
        }
      }
    });
  }
  // ******** Microphone ******** //

  async function microphone(callback?: () => void) {
    if (Platform.OS === "ios") {
      request(PERMISSIONS.IOS.MICROPHONE).then((result) => {
        if (result === RESULTS.GRANTED) {
          callback && callback();
        } else {
          Alert.alert(
            "Notice",
            "Please accept application for microphone to continue",
            [
              { text: "Cancel" },
              {
                text: "OK",
                onPress: () => {
                  openSettings();
                },
              },
            ]
          );
        }
      });
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          callback && callback();
        }
      } catch (err) {}
    }
  }

  return { camera, microphone, photoLibrary };
};
