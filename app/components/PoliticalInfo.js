import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Officials from "./Officials";
import Budget from "./Budget";
import Icon from "react-native-vector-icons/Ionicons";

const TabNavigator = createBottomTabNavigator(
  {
    Officials: {
      screen: Officials,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-people" color={tintColor} size={27} />
        )
      }
    },
    Budget: {
      screen: Budget,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cash" color={tintColor} size={27} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      inactiveTintColor: "#aaa",
      activeTintColor: "#222",
      labelStyle: {
        fontSize: 12
      }
    }
  }
);

export default createAppContainer(TabNavigator);
