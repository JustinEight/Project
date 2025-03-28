import dummyData from "@assets/dummyData";
import images from "@assets/images";
import Button from "@components/Button";
import Image from "@components/Image";
import Text from "@components/Text";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

const BlockedUserItem = () => {
  const renderRightActions = (progress, dragX) => {
    return (
      <Button mainColor="#9F86C9" textColor="#F7F7F9" style={{ marginLeft: 8 }}>
        Bỏ chặn
      </Button>
    );
  };
  return (
    <ReanimatedSwipeable renderRightActions={renderRightActions}>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 12,
          gap: 8,
          padding: 8,
          backgroundColor: "white",
          marginLeft: 16,
        }}
      >
        <Image
          source={dummyData.categoryMenu}
          style={{ width: 48, height: 48, borderRadius: 8, margin: 8 }}
        />
        <Text style={{ fontSize: 14, fontWeight: "700" }}>Cheyenne Botosh</Text>
      </TouchableOpacity>
    </ReanimatedSwipeable>
  );
};

export default BlockedUserItem;
