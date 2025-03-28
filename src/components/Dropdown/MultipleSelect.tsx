import React, { Fragment, useState } from "react";

import Text from "@components/Text";
import { CheckboxIcon1, CheckboxOutlineIcon1 } from "@components/Icon";
import { MultiSelect as RNMultiSelect } from "react-native-element-dropdown";
import { MultiSelectProps } from "react-native-element-dropdown/lib/typescript/components/MultiSelect/model";
import { View } from "react-native";
import { useTheme } from "@hooks/useTheme";

const MultiSelect = ({
  label,
  data,
  selectedList = [],
  style,
  ...props
}: {
  label?: string;
  selectedList?: { label: string; value: any }[];
} & MultiSelectProps<any>) => {
  const [value, setValue] = useState(null);
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
      <RNMultiSelect
        style={[
          {
            backgroundColor: "#fff",
            minHeight: 52,
            borderRadius: 10,
            paddingHorizontal: 16,
            marginTop: 2,
            borderColor: "#DCDFE4",
            borderWidth: 1,
          },
        ]}
        placeholderStyle={
          value?.length
            ? {
                color: "#212B36",
                fontSize: 16,
                fontFamily: fonts.Quicksand,
                flex: 1,
              }
            : {
                color: "#8590A2",
                fontSize: 16,
                fontFamily: fonts.Quicksand,
              }
        }
        value={value}
        renderItem={(item, selected) => {
          return (
            <View
              style={{
                marginHorizontal: 16,
                paddingHorizontal: 10,
                paddingVertical: 6,
                backgroundColor: selected ? "#9F86C94D" : "#fff",
                borderRadius: 5,
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              {selected ? <CheckboxIcon1 /> : <CheckboxOutlineIcon1 />}
              <Text style={{ fontSize: 15, color: "#8590A2" }}>
                {item?.label}
              </Text>
            </View>
          );
        }}
        containerStyle={{
          paddingVertical: 6,
          gap: 6,
          backgroundColor: "#fff",
          borderRadius: 10,
        }}
        data={data}
        maxHeight={300}
        {...props}
        labelField="label"
        valueField="value"
      />
    </View>
  );
};

export default MultiSelect;
