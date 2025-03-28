import React, { Fragment, useState } from "react";

import Text from "@components/Text";
import { CheckboxIcon1, CheckboxOutlineIcon1 } from "@components/Icon";
import { Dropdown as RNDropdown } from "react-native-element-dropdown";
import { DropdownProps } from "react-native-element-dropdown/lib/typescript/components/Dropdown/model";
import { View } from "react-native";
import { useTheme } from "@hooks/useTheme";

const DropDown = ({
  label,
  data,
  selectedList = [],
  style,
  value,
  ...props
}: {
  label?: string;
  selectedList?: { label: string; value: any }[];
} & DropdownProps<any>) => {
  const { fonts } = useTheme();

  return (
    <View style={style}>
      {label ? (
        <Text
          style={{
            color: "#121b25",
            fontSize: 13,
            fontWeight: "600",
            marginBottom: 2,
          }}
        >
          {label}
        </Text>
      ) : null}
      <RNDropdown
        style={[
          {
            backgroundColor: "#fff",
            height: 52,
            borderRadius: 10,
            paddingHorizontal: 16,
            marginTop: 2,
            borderColor: "#DCDFE4",
            borderWidth: 1,
          },
        ]}
        placeholderStyle={{
          color: "#8590A2",
          fontSize: 16,
          fontFamily: fonts.Quicksand,
        }}
        value={value}
        selectedTextProps={
          value
            ? {
                style: {
                  color: "#212B36",
                  fontSize: 16,
                  fontFamily: fonts.Quicksand,
                },
              }
            : {}
        }
        activeColor="#D6CEE4"
        containerStyle={{
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        {...props}
      />
    </View>
  );
};

export default DropDown;
