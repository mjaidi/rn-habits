import React from "react";
import { View, StyleSheet, Platform } from "react-native";
import {
  Layout,
  Text,
  Button,
  TopNavigation,
  Divider,
} from "@ui-kitten/components";
import HeaderTitle from "../../components/UI/HeaderTitle";

const AuthScreen = ({ navigation }) => {
  const navigateCurrent = () => {
    navigation.navigate("MainNavigation");
  };
  return (
    <View style={{ flex: 1 }}>
      <TopNavigation
        style={Platform.OS === "android" ? { marginTop: 25 } : {}}
        title={(props) => <HeaderTitle {...props} title="Authentication" />}
        alignment="center"
      />
      <Divider />
      <Layout style={styles.layout}>
        <Text category="h1">Auth Screen</Text>
        <Button onPress={navigateCurrent}>Login</Button>
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

export default AuthScreen;
