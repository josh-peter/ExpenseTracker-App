import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const Header = () => {
  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.title}>My Expenses</Text>
        <Text>Summary (Private)</Text>
      </View>

      <View style={styles.headerRight}>
        <View style={styles.headerRightItem}>
          <Image source={icons.calendar} style={styles.headerRightItemIcon} />
        </View>

        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={styles.headerRightItemText}>11 Aug, 2022</Text>
          <Text>18% more than last month</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  title: {
    color: COLORS.primary,
    fontSize: 20,
    fontWeight: "500",
  },
  headerRight: {
    flexDirection: "row",
    marginTop: SIZES.padding,
    alignItems: "center",
  },
  headerRightItem: {
    width: 50,
    height: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  headerRightItemIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightBlue,
  },
  headerRightItemText: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: "bold",
  },
});
