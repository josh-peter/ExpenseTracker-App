import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES, icons, FONTS } from "../constants";
import categoriesData from "./Data";

const CategoriesHeaderSect = ({viewMode, setViewMode}) => {
  const [categories, setCategories] = useState(categoriesData);

  return (
    <View style={styles.categoriesHeader}>
      <View>
        <Text style={styles.title}>CATEGORIES</Text>
        <Text style={styles.titles}>{categories.length} Total</Text>
      </View>
      <View style={styles.btn}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "chart" ? COLORS.secondary : null,
            height: 50,
            width: 50,
            borderRadius: 25,
          }}
          onPress={() => setViewMode("chart")}
        >
          <Image
            style={[
              styles.image,
              {
                tintColor: viewMode == "chart" ? COLORS.white : COLORS.darkgray,
              },
            ]}
            source={icons.chart}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: viewMode == "list" ? COLORS.secondary : null,
            height: 50,
            width: 50,
            borderRadius: 25,
            marginLeft: SIZES.base,
          }}
          onPress={() => setViewMode("list")}
        >
          <Image
            style={[
              styles.image,
              {
                tintColor: viewMode == "list" ? COLORS.white : COLORS.darkgray,
              },
            ]}
            source={icons.menu}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CategoriesHeaderSect;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: 20,
    height: 20,
  },
  categoriesHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: SIZES.padding,
  },
  btn: {
    flexDirection: "row",
  },
  title: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: "bold",
  },
  titles: {
    color: COLORS.darkgray,
    fontSize: 14,
    fontWeight: "bold",
  },
  btns: {},
});
