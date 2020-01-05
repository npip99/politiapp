import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ListItem(props) {
  //info.title
  //info.description
  return (
    <View style={styles.box}>
      <View style={styles.picture}></View>
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.description}>{props.info.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  picture: {
    left: 20,
    top: 20,
    width: 40,
    height: 40,
    backgroundColor: "blue"
  },
  title: {
    width: 200,
    left: 80,
    top: -20,
    height: 20,
    backgroundColor: "yellow"
  },
  description: {
    left: 80,
    width: 200,
    height: 80,
    backgroundColor: "orange"
  },
  box: {
    flex: 1,
    flexDirection: "column",
    width: "80%",
    height: 150,
    backgroundColor: "#F3D1B0",
    margin: 10,
    borderRadius: 5
  }
});
