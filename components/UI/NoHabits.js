import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SvgXml } from "react-native-svg";

import { Text } from "@ui-kitten/components";
import draw from "../../assets/draw.js";
import arrow from "../../assets/arrow.js";

const NoHabits = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.imageWrapper}>
        <SvgXml
          width={Dimensions.get("window").width * 0.75}
          height={Dimensions.get("window").height / 4}
          xml={draw}
        />
      </View>
      <Text category="h5" style={styles.text}>
        Create a New Habit Now!
      </Text>
      <View style={styles.wrapper}>
        <SvgXml
          width={Dimensions.get("window").width * 0.75}
          height={Dimensions.get("window").height / 3}
          xml={arrow}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "70%",
    justifyContent: "space-between",
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
  },
});

export default NoHabits;
