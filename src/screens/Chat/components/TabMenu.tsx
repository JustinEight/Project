import { ChatIconAll } from "@components/Icon";
import Text from "@components/Text";
import React, { useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";

const TabMenu = ({
  style,
  currentIndex,
  setCurrentIndex,
}: {
  style?: ViewStyle;
  currentIndex: number;
  setCurrentIndex: (v: number) => void;
}) => {
  const data = [
    {
      label: "Tất cả",
      icon: (color: string) => <ChatIconAll stroke={color} />,
    },
    { label: "Người mua" },
    { label: "Người bán" },
  ];
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          gap: 8,
          marginHorizontal: 16,
        },
        style,
      ]}
    >
      {data?.map((item, index) => {
        const selected = currentIndex === index;
        const Icon = item?.icon
          ? item?.icon(selected ? "#3A304B" : "#738496")
          : null;

        if (selected) {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentIndex(index);
              }}
              style={{
                height: 36,
                borderRadius: 100,
                backgroundColor: "#D8D1E5",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: 12,
                gap: 4,
                borderColor: "#D8D1E5",
                borderWidth: 1,
              }}
            >
              {Icon}
              <Text>{item?.label}</Text>
            </TouchableOpacity>
          );
        }

        return (
          <TouchableOpacity
            onPress={() => {
              setCurrentIndex(index);
            }}
            style={{
              height: 36,
              gap: 4,
              borderRadius: 100,
              paddingHorizontal: 12,
              flexDirection: "row",
              borderColor: "#B3B9C4",
              borderWidth: 1,
              alignItems: "center",
            }}
          >
            {Icon}
            <Text style={{ color: "#738496" }}>{item?.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabMenu;
