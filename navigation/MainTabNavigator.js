import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import Officials from "../components/Officials";
import Budget from "../components/Budget";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: Officials
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Officials",
  tabBarIcon: null
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: Budget
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Budget",
  tabBarIcon: null
};

LinksStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    LinksStack
    // SettingsStack
  },
  {}
);

tabNavigator.path = "";

export default createAppContainer(tabNavigator);
