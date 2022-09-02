import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, SIZES, icons } from "../constants";

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={{ justifyContent: "center", width: 50 }}
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Image source={icons.back_arrow} style={styles.backArrow} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.title}
        onPress={() => {
          console.log("pressed");
        }}
      >
        <Image source={icons.more} style={styles.more} />
      </TouchableOpacity>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    height: 35,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  backArrow: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
  title: {
    justifyContent: "center",
    alignItems: "flex-end",
    width: 50,
  },
  more: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },
});
