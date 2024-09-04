import { View, Text, StyleSheet } from "react-native";
import Sliders from "../../src/components/Sliders";

export default function Tab() {
  return (
    <View style={styles.container}>
      <Sliders></Sliders>
      <Text>Tab [Home]</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
