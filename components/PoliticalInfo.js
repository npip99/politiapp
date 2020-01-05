import React from "react";
import { StyleSheet, View, Text } from "react-native";

import AppNavigator from "../navigation/AppNavigator";

export default function PoliticalInfo(props) {
  return (
    <View style={styles.container}>
      <Text>Blah blah blah</Text>
      {/* {Platform.OS === "ios" && <StatusBar barStyle="default" />} */}
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    flex: 1,
    left: "50%",
    backgroundColor: "#fff"
  }
});
