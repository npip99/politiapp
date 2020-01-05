import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Header from "../components/Header.js";

export default class ScreenTwo extends React.Component {
  static navigationOptions = {};

  render() {
    return (
      <React.Fragment>
        <Header />
        <View style={styles.container}>
          <Text> 'Screen Two'</Text>
        </View>
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
