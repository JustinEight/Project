import { CheckboxIcon1, CheckboxOutlineIcon1 } from "@components/Icon";
import Text from "@components/Text";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

const CheckItem = ({ selected, item, onChange }) => {
  return (
    <TouchableOpacity
      style={{
        minWidth: "50%",
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        flex: 1,
      }}
      onPress={() => {
        onChange?.(item);
      }}
    >
      {selected ? <CheckboxIcon1 /> : <CheckboxOutlineIcon1 />}
      <Text style={{ fontSize: 15, color: "#8590A2", flex: 1 }}>
        {item?.label}
      </Text>
    </TouchableOpacity>
  );
};
const CheckList = ({ data = [] }: { data: Array<any> }) => {
  const [selectionList, setSelectionList] = useState([]);
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {data?.map((item, index) => {
        const selected =
          selectionList?.findIndex((obj) => obj?.value === item?.value) >= 0;

        return (
          <CheckItem
            key={index}
            item={item}
            selected={selected}
            onChange={(v) => {
              if (selected) {
                setSelectionList(
                  selectionList?.filter((obj) => obj?.value !== v?.value)
                );
              } else {
                setSelectionList(selectionList?.concat([v]));
              }
            }}
          />
        );
      })}
    </View>
  );
};

export default CheckList;
