import icons from "@assets/icons";
import Image from "@components/Image";
import Text from "@components/Text";
import React, { useCallback, useState } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

const DatePickerInput = ({
  value = new Date(),
  onChangeValue,
  label,
  style,
}: {
  value: Date;
  onChangeValue?: (v: Date) => void;
  label: string;
  style?: ViewStyle;
}) => {
  const [visible, setVisible] = useState(false);
  const onConfirm = useCallback((date) => {
    onChangeValue?.(date);
    setVisible(false);
  }, []);
  const onCancel = useCallback(() => {
    setVisible(false);
  }, []);
  return (
    <View style={style}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
        <View
          style={{
            flex: 1,
            borderRadius: 10,
            height: 50,
            borderWidth: 2,
            backgroundColor: "#fff",
            borderColor: "#B4AEBD",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, color: "#8590A2", textAlign: "center" }}>
            {dayjs(value).format("DD/MM/YYYY")}
          </Text>
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
        <TouchableOpacity
          onPress={() => {
            setVisible(true);
          }}
        >
          <Image
            source={icons.calendarIcon}
            style={{ height: 30, width: 30 }}
          />
        </TouchableOpacity>
      </View>
      <DateTimePickerModal
        isVisible={visible}
        mode="date"
        date={value}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </View>
  );
};

export default DatePickerInput;
