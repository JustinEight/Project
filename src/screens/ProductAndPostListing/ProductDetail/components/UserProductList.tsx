import dummyData from "@assets/dummyData";
import images from "@assets/images";
import Image from "@components/Image";
import Text from "@components/Text";
import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";

const UserProductList = ({ title, data = new Array(5).fill(0) }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          marginHorizontal: 16,
          marginBottom: 8,
          marginTop: 24,
        }}
      >
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<View style={{ width: 16 }} />}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={{
                width: 98,
                height: 130,
                borderRadius: 15,
              }}
            >
              <Image
                style={{ height: "100%", width: "100%", borderRadius: 15 }}
                source={dummyData.categoryMenu}
              />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ gap: 8 }}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<View style={{ width: 16 }} />}
      />
    </View>
  );
};
export default UserProductList;
