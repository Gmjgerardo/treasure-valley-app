import { Text, StyleSheet } from "react-native";

export default function productCategory(props) {
  const { categoryName, selected } = props;
  return (
    <Text style={[styles.category, selected && styles.selected]}>
      {categoryName}
    </Text>
  );
}

const styles = StyleSheet.create({
  category: {
    fontSize: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#EDEDED",
    color: "#313131",
  },
  selected: {
    backgroundColor: "#C67C4E",
    color: "#FFF",
    fontWeight: "700",
  },
});
