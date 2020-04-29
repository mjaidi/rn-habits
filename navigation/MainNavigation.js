import React, { Fragment } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthNavigator from "./AuthNavigator";
import TabsNavigator from "./TabsNavigator";
import StatsNavigator from "./StatsNavigator";

const { Navigator, Screen } = createStackNavigator();

const MainNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="AuthNavigation" component={AuthNavigator} />
    <Screen name="MainNavigation" component={TabsNavigator} />
    <Screen name="StatsNavigation" component={StatsNavigator} />
  </Navigator>
);
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};
export default AppNavigator;
