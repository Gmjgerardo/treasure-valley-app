import { ScrollView, View, Text, StyleSheet, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Icon from "@expo/vector-icons/FontAwesome6";
import Promotion from "@components/product/promotion";
import Sliders from "../../src/components/Sliders";

export default function Tab() {
  return (
    <ScrollView id="container" style={styles.container}>
      <View id="header" style={styles.header}>
        <Text style={{ color: "#DDD", marginTop: 20, fontSize: 15 }}>
          Location
        </Text>
        <Text
          style={{
            color: "#FFF",
            marginTop: 10,
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          Bilzen, Tanjuangbalai
        </Text>
        <View id="searchView" style={styles.searchView}>
          <LinearGradient
            colors={["#313131", "#404040"]}
            start={{ x: 0.0, y: 0.2 }}
            end={{ x: 1, y: 0.2 }}
            style={styles.searchInputContainer}
          >
            <Icon
              name="magnifying-glass"
              size={20}
              color={"#FFF"}
              style={{ marginRight: 10 }}
            />
            <TextInput
              style={{
                fontSize: 20,
                color: "#AAA",
              }}
              placeholder="Search coffee"
              placeholderTextColor={"#777777"}
            />
          </LinearGradient>
          <Icon.Button
            name="sliders"
            size={25}
            backgroundColor="#c67c4e"
            borderRadius={8}
            iconStyle={{ marginRight: 0, padding: 5 }}
          />
        </View>
      </View>
      <LinearGradient
        id="PromoView"
        colors={["#313131", "transparent"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0.5, 0]}
        style={{ paddingHorizontal: 20 }}
      >
        <Promotion />
      </LinearGradient>
      <Sliders />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "#313131",
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  searchView: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  searchInputContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
});
