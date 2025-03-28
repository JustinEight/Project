import dummyData from "@assets/dummyData";
import icons from "@assets/icons";
import { screenWidth } from "@assets/size";
import Image from "@components/Image";
import Text from "@components/Text";
import { navigate } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { TouchableOpacity, View } from "react-native";

const CategoryItem2 = () => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        borderRadius: 10,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        gap: 11,
      }}
      onPress={() => navigate(StackName.ProductDetailScreen)}
    >
      <Image
        source={dummyData.category1}
        style={{ width: 130, height: "100%", borderRadius: 10 }}
      />
      <View style={{ flex: 1, paddingVertical: 8, marginRight: 24 }}>
        <Text style={{ fontSize: 13, fontWeight: "700" }}>Macbook Air M4</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 8,
          }}
        >
          <Text style={{ fontSize: 8, fontWeight: "700", color: "#A0AF7A" }}>
            Candy Corner
          </Text>
          <Text style={{ fontSize: 8 }}>Nguyễn Trãi</Text>
          <Text style={{ fontSize: 8 }}>30 phút</Text>
        </View>
        <Text style={{ fontSize: 10, color: "#444444" }}>
          Macbook Air M4 15inch hàng chính hãng giá rẻ
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
            marginTop: 8,
          }}
        >
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text style={{ fontSize: 8 }}>30</Text>
            <Image
              source={icons.coffeBeanIcon}
              style={{ width: 10, height: 10 }}
            />
          </View>
          <View style={{ flexDirection: "row", gap: 2 }}>
            <Text style={{ fontSize: 8 }}>30</Text>
            <Image
              source={icons.messageIcon}
              style={{ width: 10, height: 10 }}
            />
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#D9D9D94D",
            borderRadius: 5,
            paddingHorizontal: 20,
            alignSelf: "flex-start",
            paddingVertical: 8,
            marginTop: 8,
          }}
        >
          <Text style={{ fontSize: 15, color: "#A0AF7A" }}>5.000.00</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem2;
