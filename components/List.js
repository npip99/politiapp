import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import ListItem from "./ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
const width = "80%";
const height = "40%";

export default function List(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        {props.data.map(x => {
          return (
            <TouchableOpacity
              key={x.key}
              onPress={() => props.onPress && props.onPress(x)}
            >
              <ListItem info={x} />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%"
    // justifyContent: "center",
  }
});
