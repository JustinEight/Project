import { ChevronLeftIcon } from "@components/Icon";

import React from "react";
import { TouchableOpacity, View } from "react-native";

import Header from "@screens/HomeScreen/components/Header";
import { goBack } from "@navigation/index";
import FindJob from "./components/FindJob";

const AddPostForSale = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <TouchableOpacity
        style={{
          height: 44,
          width: 44,
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => {
          goBack();
        }}
      >
        <ChevronLeftIcon fill={"#8696A7"} />
      </TouchableOpacity>
      <FindJob/>
    </View>
  );
};

export default AddPostForSale;
