import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { assets } from "../../assets/information";

const { width } = Dimensions.get("window");
export default function Slider() {
  const images = assets;
  return (
    <SafeAreaView style={{ flex: 0, backgroundColor: "transparent" }}>
      <ScrollView
        style={{ flex: 1, alignSelf: "stretch" }}
        pagingEnabled
        onMomentumScrollBegin={() => {}}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {images.map((x, i) => (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              width: width,
            }}
            key={x.id}
          >
            <Text style={styles.titulo}>{x.title}</Text>
            <Image
              style={{
                marginVertical: 20,
                width: width * 0.9,
                aspectRatio: 2,
                resizeMode: "contain",
              }}
              source={{ uri: x.url }}
            />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titulo: {
    marginTop: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
});
