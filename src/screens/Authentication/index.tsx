import images from "@assets/images";
import Button from "@components/Button";
import Image from "@components/Image";
import Text from "@components/Text";
import { reset } from "@navigation/index";
import { StackName } from "@navigation/StackName";
import React from "react";
import { StyleSheet, View } from "react-native";

const HomePage = () => {
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={[
          StyleSheet.absoluteFillObject,
          { width: "100%", height: "100%" },
        ]}
        source={images.splashScreen}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          paddingHorizontal: "10%",
        }}
      >
        <View style={{ width: "100%" }}>
          <Text
            style={{
              color: "#A2B17B",
              fontSize: 70,
              fontWeight: "700",
              marginBottom: 46,
              textAlign: "center",
            }}
          >
            decaf&
          </Text>
          <Button
            mainColor="#889663"
            textColor="#fff"
            style={{ marginBottom: 16, height: 42, borderRadius: 70 }}
            onPress={() => {
              reset(StackName.SignInScreen);
            }}
          >
            Đăng nhập
          </Button>
          <Button
            mainColor="#000000BF"
            textColor="#fff"
            style={{ height: 42, borderRadius: 70 }}
            onPress={() => {
              reset(StackName.SignUpScreen);
            }}
          >
            Đăng ký
          </Button>
        </View>
      </View>
    </View>
  );
};

export default HomePage;
