import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import StatsScreen from "../screens/StatsScreen";
import CurrentHabitsScreen from "../screens/CurrentHabitsScreen";
import AllHabitsScreen from "../screens/AllHabitsScreen";

const { Navigator, Screen } = createStackNavigator();

const StatsNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Stats" component={StatsScreen} />
    <Screen name="CurrentHabits" component={CurrentHabitsScreen} />
    <Screen name="AllHabits" component={AllHabitsScreen} />
  </Navigator>
);

export default StatsNavigator;
