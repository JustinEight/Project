import Text from "@components/Text";
import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import dayjs from "dayjs";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const TimePickerInput = ({
  value = new Date(),
  onChangeValue,
  style,
}: {
  style?: ViewStyle;
  value?: Date;
  onChangeValue?: (v: Date) => void;
}) => {
  const [visible, setVisible] = useState(false);
  const onConfirm = useCallback((date) => {
    console.log(date, ">>>>>date");

    onChangeValue?.(date);
    setVisible(false);
  }, []);
  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setVisible(true);
        }}
        style={[
          {
            borderRadius: 10,
            height: 40,
            borderWidth: 1,
            borderColor: "#B4AEBD",
            justifyContent: "center",
            paddingHorizontal: 8,
          },
          style,
        ]}
      >
        <Text style={{ fontSize: 20, color: "#8590A2", textAlign: "center" }}>
          {dayjs(value).format("HH:mm")}
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={visible}
        mode="time"
        date={value}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
};

export default TimePickerInput;
