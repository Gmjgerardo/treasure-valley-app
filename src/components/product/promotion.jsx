import React from "react";
import { View, Text, Image } from "react-native";

export default function Promotion() {
  return (
    <View
      style={{
        backgroundColor: "#947257",
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden",
        paddingVertical: 12,
        paddingLeft: 25,
        borderRadius: 15,
        width: "100%",
      }}
    >
      <View id="leftSide" style={{ width: "75%", zIndex: 1 }}>
        <Text
          style={{
            backgroundColor: "#ed5151",
            fontSize: 16,
            color: "#FFF",
            alignSelf: "flex-start",
            borderRadius: 5,
            fontWeight: 600,
            paddingVertical: 3,
            paddingHorizontal: 8,
            marginBottom: 5,
          }}
        >
          Promo
        </Text>
        <Text
          style={{
            color: "#FFF",
            fontSize: 37,
            fontWeight: 600,
            textShadowColor: "black",
            textShadowRadius: 20,
            textShadowOffset: { width: 0, height: 8 },
          }}
        >
          Buy one get one FREE
        </Text>
      </View>
      <Image
        source={require("@assets/img/promo.png")}
        style={{
          width: "40%",
          resizeMode: "contain",
          aspectRatio: 1,
          position: "absolute",
          right: -10,
        }}
      />
    </View>
  );
}
