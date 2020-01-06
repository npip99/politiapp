import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListItem from "./ListItem";
const width = "80%";
const height = "40%";

export default function List(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>List</Text>
        {props.data.map(x => {
          return <ListItem info={x}/>;
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 50,
    alignItems: "center"
    // justifyContent: "center",
  }
});
