import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Event(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.body}>{props.info.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontSize: 18,
    margin: 25,
  },
  body: {
    marginHorizontal: 25,
  },
});

