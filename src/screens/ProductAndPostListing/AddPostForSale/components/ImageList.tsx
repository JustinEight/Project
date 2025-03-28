import dummyData from "@assets/dummyData";
import { AddProductImageIcon, XCircleFilled } from "@components/Icon";
import Image from "@components/Image";
import ImagePickerModal from "@components/Modal/ImagePickerModal";
import Text from "@components/Text";
import React, { Fragment, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

const ImageList = ({
  imageList = [],
  style,
  onChangeImage,
}: {
  imageList: Array<{ uri: string }>;
  style?: ViewStyle;
  onChangeImage?: (res: any) => void;
}) => {
  const [visiblePicker, setVisiblePicker] = useState(false);

  if (!imageList?.length) {
    return (
      <Fragment>
        <View style={style}>
          <TouchableOpacity
            style={{ alignSelf: "center" }}
            onPress={() => {
              setVisiblePicker(true);
            }}
          >
            <AddProductImageIcon width={72} height={72} />
          </TouchableOpacity>
        </View>
        <ImagePickerModal
          visible={visiblePicker}
          requestClose={() => {
            setVisiblePicker(false);
          }}
          onSaveImage={(res) => {
            if (res?.length) {
              onChangeImage?.(imageList?.concat(res));
            }
          }}
        />
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <View style={style}>
          <FlatList
            contentContainerStyle={{ gap: 12, paddingTop: 10 }}
            data={imageList}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={<View style={{ width: 16 }} />}
            ListHeaderComponent={
              <TouchableOpacity
                onPress={() => {
                  setVisiblePicker(true);
                }}
              >
                <AddProductImageIcon
                  width={72}
                  height={72}
                  style={{ marginLeft: 25 }}
                />
              </TouchableOpacity>
            }
            renderItem={({ item, index }) => {
              return (
                <View>
                  <Image style={styles.imageItem} source={{ uri: item?.uri }} />
                  {index === 0 ? (
                    <View style={styles.coverPhotoContainer}>
                      <Text style={styles.coverPhotoText}>Ảnh bìa</Text>
                    </View>
                  ) : null}
                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={() => {
                      imageList?.splice(index, 1);
                      onChangeImage?.([...imageList]);
                    }}
                  >
                    <XCircleFilled width={20} height={20} />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <ImagePickerModal
          visible={visiblePicker}
          requestClose={() => {
            setVisiblePicker(false);
          }}
          onSaveImage={(res) => {
            if (res?.length) {
              onChangeImage?.(imageList?.concat(res));
            }
          }}
        />
      </Fragment>
    );
  }
};

const styles = StyleSheet.create({
  coverPhotoContainer: {
    backgroundColor: "#000000B2",
    borderRadius: 10,
    paddingVertical: 2,
    paddingHorizontal: 6,
    position: "absolute",
    left: 4,
    bottom: 4,
  },
  coverPhotoText: { fontSize: 10, fontWeight: "600", color: "#fff" },
  closeButton: {
    position: "absolute",
    right: -10,
    top: -10,
    padding: 4,
  },
  imageItem: { height: 72, width: 72, borderRadius: 10 },
});

export default ImageList;
