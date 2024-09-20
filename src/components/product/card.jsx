import { View, Text, Image } from "react-native";
import IconF6 from "@expo/vector-icons/FontAwesome6";
import IconF from "@expo/vector-icons/FontAwesome";

export default function Card() {
  return (
    <View
      style={{
        rowGap: 3,
        backgroundColor: "#FFF",
        padding: 5,
        borderRadius: 15,
      }}
    >
      <View
        style={{
          position: "absolute",
          right: 5,
          top: 5,
          zIndex: 1,
          flexDirection: "row",
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 12,
          backgroundColor: "#00000040",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 3,
        }}
      >
        <IconF name="star" style={{ fontSize: 12, color: "#EAAA00" }} />
        <Text style={{ fontWeight: 500, color: "#FFF" }}>4.8</Text>
      </View>
      <Image
        source={require("../../../assets/img/cardImage.png")}
        style={{
          width: 120,
          height: 120,
          resizeMode: "contain",
          borderRadius: 15,
        }}
      />
      <Text style={{ fontWeight: "600", fontSize: 16 }}>Caffe Mocha</Text>
      <Text style={{ fontWeight: "600", opacity: 0.5 }}>Deep Foam</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 20 }}>$ 4.53</Text>
        <IconF6
          name="plus"
          style={{
            fontSize: 16,
            color: "#FFF",
            backgroundColor: "#C67C4E",
            textAlignVertical: "center",
            paddingVertical: 10,
            paddingHorizontal: 11,
            borderRadius: 8,
          }}
        />
      </View>
    </View>
  );
}
