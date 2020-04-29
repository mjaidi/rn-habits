import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Text } from "@ui-kitten/components";
import colors from "../../constants/colors";

export default StatsIcon = (props) => (
  <TouchableOpacity style={styles.wrapper}>
    <Icon {...props} fill={colors.primary} name="bar-chart-outline" />
    <Text style={styles.text}>Stats</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: colors.primaryLight,
    padding: 12,
  },
  text: {
    marginLeft: 10,
  },
});
