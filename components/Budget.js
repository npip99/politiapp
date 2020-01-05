import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Budget() {
  return (
    <View style={styles.container}>
      <Text>LinksScreen</Text>
    </View>
  );
}

Budget.navigationOptions = {
  title: "State"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
