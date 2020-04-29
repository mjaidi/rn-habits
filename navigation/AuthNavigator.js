import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthScreen from "../screens/AuthScreen";

const { Navigator, Screen } = createStackNavigator();

const AuthNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Authentication" component={AuthScreen} />
  </Navigator>
);

export default AuthNavigator;
