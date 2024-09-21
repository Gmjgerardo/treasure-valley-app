import { View, Text, Image, StyleSheet } from "react-native";
import IconF6 from "@expo/vector-icons/FontAwesome6";
import IconF from "@expo/vector-icons/FontAwesome";

export default function Card(props) {
  const { name, servido, price, rating, image } = props;

  return (
    <View style={styles.cardContainer}>
      <View style={styles.ratingContainer}>
        <IconF name="star" style={{ fontSize: 12, color: "#EAAA00" }} />
        <Text style={{ fontWeight: 500, color: "#FFF" }}>{rating}</Text>
      </View>
      <Image source={image} style={styles.image} />
      <Text style={{ fontWeight: "600", fontSize: 16 }}>{name}</Text>
      <Text style={{ fontWeight: "600", opacity: 0.5 }}>{servido}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontWeight: 700, fontSize: 20 }}>$ {price}</Text>
        <IconF6 name="plus" style={styles.addToCartButton} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    rowGap: 3,
    backgroundColor: "#FFF",
    padding: 5,
    borderRadius: 15,
    marginBottom: 25,
    width: "48%",
  },
  ratingContainer: {
    position: "absolute",
    right: 5,
    top: 5,
    zIndex: 1,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 30,
    backgroundColor: "#00000040",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 3,
  },
  image: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    resizeMode: "contain",
    borderRadius: 15,
  },
  addToCartButton: {
    fontSize: 16,
    color: "#FFF",
    backgroundColor: "#C67C4E",
    textAlignVertical: "center",
    paddingVertical: 10,
    paddingHorizontal: 11,
    borderRadius: 8,
  },
});
