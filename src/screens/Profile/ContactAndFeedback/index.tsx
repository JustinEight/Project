import { HeaderWithBackIcon } from "@components/Header";
import Text from "@components/Text";
import React from "react";
import { View } from "react-native";

const ContactAndFeedbackPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#EDECF0" }}>
      <HeaderWithBackIcon title={"Liên hệ và góp ý"} />
      <View
        style={{
          backgroundColor: "#ffffff",
          borderRadius: 15,
          marginHorizontal: 25,
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 38,
        }}
      >
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#2C333A" }}>
            Email
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
            decafand.cs@gmail.com
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#8590A280",
            marginTop: 4,
            marginBottom: 16,
          }}
        />
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#2C333A" }}>
            Hotline
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
            +84 123 456 789
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#8590A280",
            marginTop: 4,
            marginBottom: 16,
          }}
        />
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#2C333A" }}>
            Facebook{" "}
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
            DECAF&
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#8590A280",
            marginTop: 4,
            marginBottom: 16,
          }}
        />
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#2C333A" }}>
            Instagram
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
            decafand
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#8590A280",
            marginTop: 4,
            marginBottom: 16,
          }}
        />
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 13, fontWeight: "500", color: "#2C333A" }}>
            Zalo
          </Text>
          <Text style={{ fontSize: 10, fontWeight: "500", color: "#8590A2" }}>
            +84 123 456 789
          </Text>
        </View>
        <View
          style={{
            height: 1,
            backgroundColor: "#8590A280",
            marginTop: 4,
          }}
        />
      </View>
    </View>
  );
};

export default ContactAndFeedbackPage;
