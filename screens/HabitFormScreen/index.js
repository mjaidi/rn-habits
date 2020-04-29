import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import { Layout, Text, TopNavigation, Divider } from "@ui-kitten/components";
import HeaderTitle from "../../components/UI/HeaderTitle";

const HabitFormScreen = () => (
  <View style={{ flex: 1 }}>
    <TopNavigation
      style={Platform.OS === "android" ? { marginTop: 25 } : {}}
      alignment="center"
      title={(props) => <HeaderTitle {...props} title="Habit Form" />}
    />
    <Divider />
    <Layout style={styles.layout}>
      <Text category="h1">Habit Form Screen</Text>
    </Layout>
  </View>
);

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HabitFormScreen;
