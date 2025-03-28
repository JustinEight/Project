import Text from "@components/Text";
import React from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import TimePickerInput from "./TimePickerInput";
import { ClockIcon } from "@components/Icon";
const weeks = [
  { label: "T2", fullName: "Monday" },
  { label: "T3", fullName: "Tuesday" },
  { label: "T4", fullName: "Wednesday" },
  { label: "T5", fullName: "Thursday" },
  { label: "T6", fullName: "Friday" },
  { label: "T7", fullName: "Saturday" },
  { label: "CN", fullName: "Sunday" },
];
const TimeWorkPicker = ({
  label,
  style,
  dayValues = [],
  onChangDay,
  startTime,
  onChangStartTime,
  onChangEndTime,
  endTime,
}: {
  label: string;
  style?: ViewStyle;
  dayValues?: any[];
  onChangDay?: (v) => void;
  startTime: Date;
  onChangStartTime?: (v: Date) => void;
  onChangEndTime?: (v: Date) => void;
  endTime: Date;
}) => {
  return (
    <View style={style}>
      <View
        style={{
          borderRadius: 10,
          borderWidth: 2,
          borderColor: "#B4AEBD",
          padding: 16,
          backgroundColor: "#fff",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {weeks?.map((item, index) => {
            const selected =
              dayValues?.findIndex((obj) => obj === item?.fullName) >= 0;

            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 35,
                  width: 35,
                  backgroundColor: selected ? "#D6CEE4" : "#EDECF0",
                  borderRadius: 20,
                  borderColor: selected ? "#9F86C9" : "#B4AEBD",
                  borderWidth: 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  if (selected) {
                    onChangDay?.(
                      dayValues?.filter((obj) => obj !== item?.fullName)
                    );
                  } else {
                    onChangDay?.(dayValues?.concat([item?.fullName]));
                  }
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "700",
                    color: selected ? "#9F86C9" : "#8590A2",
                  }}
                >
                  {item?.label}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
            marginTop: 16,
          }}
        >
          <ClockIcon
            fill={"#B3AEBD"}
            height={30}
            width={30}
            style={{ marginRight: 16 }}
          />
          <TimePickerInput
            onChangeValue={onChangStartTime}
            value={startTime}
            style={{ width: 100 }}
          />
          <Text style={{ color: "#B3AEBD", fontSize: 16, fontWeight: "700" }}>
            {" "}
            ~{" "}
          </Text>
          <TimePickerInput
            onChangeValue={onChangEndTime}
            value={endTime}
            style={{ width: 100 }}
          />
        </View>
        <View
          style={{
            position: "absolute",
            left: 16,
            top: -8,
            borderRadius: 5,
            backgroundColor: "#D9D9D9",
            paddingHorizontal: 8,
            paddingVertical: 2,
          }}
        >
          <Text style={{ color: "#000", fontSize: 10 }}>{label}</Text>
        </View>
      </View>
    </View>
  );
};
export default TimeWorkPicker;
