import React from "react";
import { StyleSheet, View, Platform } from "react-native";
import {
  Layout,
  Text,
  TopNavigation,
  Divider,
  Icon,
  TopNavigationAction,
} from "@ui-kitten/components";
import colors from "../../constants/colors";
import HeaderTitle from "../../components/UI/HeaderTitle";

const BackIcon = (props) => (
  <Icon {...props} fill={colors.primary} name="arrow-back" />
);

const StatsScreen = ({ navigation }) => {
  const renderLeftAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  return (
    <View style={{ flex: 1 }}>
      <TopNavigation
        style={Platform.OS === "android" ? { marginTop: 25 } : {}}
        alignment="center"
        title={(props) => <HeaderTitle {...props} title="Statistics" />}
        accessoryLeft={renderLeftAction}
      />
      <Divider />
      <Layout style={styles.layout}>
        <Text category="h1">Stats Screen</Text>
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

export default StatsScreen;
