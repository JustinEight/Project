import dummyData from "@assets/dummyData";
import images from "@assets/images";
import Image from "@components/Image";
import Text from "@components/Text";
import React from "react";
import { View } from "react-native";

const ProductItem = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 16,
        marginHorizontal: 25,
        backgroundColor: "#D6CEE4",
        borderRadius: 20,
      }}
    >
      <Image
        source={dummyData.categoryMenu}
        style={{ width: 100, height: '100%', borderRadius: 20 }}
      />
      <View style={{ flex: 1, marginVertical: 8, marginRight: 12 }}>
        <Text style={{ fontWeight: "700", fontSize: 15, color: "#2C333A" }}>
          hmytran
        </Text>
        <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" , marginTop: 2}}>
          Túi da thật bộ sưu tập Paris Fashion Week 2024
        </Text>
        <View
          style={{
            backgroundColor: "#4E494933",
            borderRadius: 10,
            padding: 8,
            alignSelf: "flex-end",
            marginTop: 6,
          }}
        >
          <Text>12.000.000</Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
