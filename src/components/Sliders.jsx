import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { assets } from "../../assets/information";

const { width } = Dimensions.get("window");
export default function () {
  const images = assets;
  return (
    <SafeAreaView style={{ flex: 0, backgroundColor: "transparent" }}>
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1, alignSelf: "stretch" }}
          pagingEnabled
          onMomentumScrollBegin={() => {}}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          {images.map((x, i) => (
            <View style={{ flex: 1 }} key={x.id}>
              <View style={styles.headerContent}>
                <Text>{x.title}</Text>
                <View style={styles.imageContent}></View>
                <Image
                  style={{ width: 275, height: 275, resizeMode: "contain" }}
                  source={{ uri: x.url }}
                />
              </View>
              <View style={styles.footerContent}></View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  headerContent: {
    height: "auto",
    width,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignContent: "center",
    margin: 20,
  },
  imageContent: {
    width,
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 15,
  },
  footerContent: {
    height: 200,
    width,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
