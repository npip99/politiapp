import React from "react";
import { View, StyleSheet, Text } from "react-native";

// pull in header with DrawerTrigger
import Header from "../components/Header.js";
import StackNavigator from "../navigation/StackNavigator.js";
import MainTabNavigator from "../navigation/MainTabNavigator";
export default class ScreenOne extends React.Component {
  // we won't need to configure navigationOptions just yet
  static navigationOptions = {};

  render() {
    return (
      <React.Fragment>
        {/* <Header name="One"></Header> */}
        <MainTabNavigator></MainTabNavigator>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
