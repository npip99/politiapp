import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AppNavigator from "./navigation/AppNavigator";

export default function PoliticalInfo(props) {
  return (
    <View style={styles.container}>
      <AppNavigator></AppNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  overlay: {
    flex: 1,
    backgroundColor: "red"
  }
});
