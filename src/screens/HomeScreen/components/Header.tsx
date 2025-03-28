import {
  BellIcon,
  FilterIcon,
  LocationIcon,
  RightArrow1,
  SearchIcon,
} from "@components/Icon";
import TextInput from "@components/TextInput";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView
      edges={["top", "right", "left"]}
      style={{
        backgroundColor: "#D8D1E5",
        paddingLeft: 20,
        paddingRight: 12,
        paddingBottom: 16,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        gap: 8,
      }}
    >
      <TextInput
        leftIcon={<LocationIcon fill={"#000000"} width={20} height={20} />}
        // rightIcon={<RightArrow1 fill={"#000000"} width={20} height={20} />}
        containerContentStyle={{
          backgroundColor: "#F7F8F9",
          borderRadius: 100,
          height: 36,
          marginTop: 16,
        }}
        inputStyle={{ fontSize: 13 }}
        placeholder="Mễ Trì, Nam Từ Liêm, Hà  Nội"
      />
      <View style={{ flexDirection: "row", gap: 4 }}>
        <TextInput
          leftIcon={<SearchIcon fill={"#B3B9C4"} width={16} height={16} />}
          inputStyle={{ fontSize: 13 }}
          containerContentStyle={{
            backgroundColor: "#F7F8F9",
            borderRadius: 100,
            height: 36,
          }}
          style={{
            flex: 1,
          }}
          placeholder="Tìm kiếm"
        />
        <TouchableOpacity
          style={{
            width: 36,
            height: 36,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7F7F9",
          }}
        >
          <FilterIcon fill={"#1D1825"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 36,
            height: 36,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F7F7F9",
          }}
        >
          <BellIcon fill={"#1D1825"} fill1={"transparent"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Header;
