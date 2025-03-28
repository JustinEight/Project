import Text from "@components/Text";
import {
  Slider as RNSlider,
  SliderProps,
} from "@miblanchard/react-native-slider";
import React from "react";
import { View } from "react-native";

const Slider = ({ ...props }: {} & SliderProps) => {
  return (
    <View style={{ backgroundColor: "#fff", paddingHorizontal: 16 }}>
      <RNSlider
        {...props}
        trackStyle={{
          height: 16,
          borderRadius: 12,
        }}
        renderMaximumTrackComponent={() => {
          return (
            <View
              style={{
                height: 16,
                backgroundColor: "#E8DEF8",
                borderRadius: 12,
                justifyContent: "flex-end",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 4,
                  width: 4,
                  backgroundColor: "#65558F",
                  right: 4,
                  borderRadius: 2,
                }}
              />
            </View>
          );
        }}
        renderMinimumTrackComponent={() => {
          return (
            <View
              style={{
                height: 16,
                backgroundColor: "#E8DEF8",
                borderRadius: 12,
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  height: 4,
                  width: 4,
                  backgroundColor: "#65558F",
                  left: 4,
                  borderRadius: 2,
                }}
              />
            </View>
          );
        }}
        renderThumbComponent={() => (
          <View style={{ alignItems: "center", zIndex: 500 }}>
            <View
              style={{
                backgroundColor: "#fff",
                paddingHorizontal: 8,
                flexDirection: "row",
                gap: 8,
              }}
            >
              <View
                style={{
                  height: 44,
                  width: 4,
                  backgroundColor: "#65558F",
                  borderRadius: 2,
                }}
              />
              <View
                style={{
                  height: 44,
                  width: 4,
                  backgroundColor: "#65558F",
                  borderRadius: 2,
                }}
              />
            </View>
            <Text
              style={{
                position: "absolute",
                top: -24,
                width: 100,
                textAlign: "center",
              }}
            >
              50.000
            </Text>
          </View>
        )}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text>0</Text>
        <Text>100.000</Text>
      </View>
    </View>
  );
};

export default Slider;
