import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import {
  Divider,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";

import StatsIcon from "../../components/UI/StatsIcon";
import HeaderTitle from "../../components/UI/HeaderTitle";
import NoHabits from "../../components/UI/NoHabits";

const CurrentHabits = ({ navigation }) => {
  const renderRightAction = () => (
    <TopNavigationAction
      icon={StatsIcon}
      onPress={() => navigation.navigate("StatsNavigation")}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation
        style={Platform.OS === "android" ? { marginTop: 25 } : {}}
        alignment="start"
        title={(props) => (
          <HeaderTitle {...props} title="Current Habits" large />
        )}
        accessoryRight={renderRightAction}
      />
      <Divider />
      <Layout style={styles.layout}>
        <NoHabits />
      </Layout>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CurrentHabits;
