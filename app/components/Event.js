import React from "react";
import { StyleSheet, ScrollView, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Event(props) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.date}>{props.info.date}</Text>
      <Text style={styles.body}>{props.info.body}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 25,
  },
  title: {
    fontSize: 18,
  },
  date: {
    fontSize: 12,
    color: "#aaa",
  },
  body: {
    marginTop: 15,
  },
});

