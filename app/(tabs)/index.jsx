import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Promotion from "@components/product/promotion";
import ProductCategory from "@components/product/productCategory";
import Card from "@components/product/card";
import Icon from "@expo/vector-icons/FontAwesome6";
import data from "../../assets/data/coffees.js";

const Header = () => (
  <>
    <View id="header" style={styles.header}>
      <Text style={{ color: "#DDD", marginTop: 50, fontSize: 15 }}>
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
    <ScrollView
      style={{ margin: 20 }}
      contentContainerStyle={{ gap: 20 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <ProductCategory categoryName="All Coffee" selected />
      <ProductCategory categoryName="Machiato" />
      <ProductCategory categoryName="Latte" />
      <ProductCategory categoryName="Americano" />
    </ScrollView>
  </>
);

export default function Tab() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#31313180" style="inverted" />
      <FlatList
        ListHeaderComponent={Header}
        numColumns={2}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card {...item} />}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 20,
          gap: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  header: {
    backgroundColor: "#313131",
    paddingTop: 10,
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
