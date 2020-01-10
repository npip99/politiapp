import React from "react";
import { StyleSheet, ScrollView, Text, Button, TouchableOpacity } from "react-native";

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.button}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: "center",
  },
  button: {
    color: "#147EFB"
  }
});
