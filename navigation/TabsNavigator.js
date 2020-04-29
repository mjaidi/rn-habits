import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, Icon } from "@ui-kitten/components";
import CurrentHabitsScreen from "../screens/CurrentHabitsScreen";
import AllHabitsScreen from "../screens/AllHabitsScreen";
import HabitFormScreen from "../screens/HabitFormScreen";
import colors from "../constants/colors";

const { Navigator, Screen } = createBottomTabNavigator();

const TabNavigator = () => (
  <Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName, styles, text;
        if (route.name === "CurrentHabits") {
          iconName = "home-outline";
          styles = { height: 20, width: 20 };
        } else if (route.name === "HabitForm") {
          iconName = "plus-circle";
          styles = { height: 75, width: 75, marginBottom: 40 };
          color = colors.primary;
        } else if (route.name === "AllHabits") {
          iconName = "flash-outline";
          styles = { height: 20, width: 20 };
        }

        // You can return any component that you like here!
        return <Icon name={iconName} style={styles} fill={color} text={text} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.dark,
      inactiveTintColor: colors.inactive,
      labelStyle: {
        fontWeight: "bold",
        fontSize: 11,
      },
      style: {
        borderTopWidth: 0,
      },
    }}
  >
    <Screen
      name="CurrentHabits"
      component={CurrentHabitsScreen}
      options={{
        title: "Current",
      }}
    />
    <Screen
      name="HabitForm"
      component={HabitFormScreen}
      options={{
        tabBarLabel: ({ focused }) => {
          return (
            <Text
              style={{
                color: focused ? colors.primary : colors.inactive,
                fontWeight: "bold",
                fontSize: 11,
              }}
            >
              Create New
            </Text>
          );
        },
      }}
      tabBarLabel={{
        color: colors.primary,
      }}
    />
    <Screen
      name="AllHabits"
      component={AllHabitsScreen}
      options={{
        title: "All",
      }}
    />
  </Navigator>
);

export default TabNavigator;
