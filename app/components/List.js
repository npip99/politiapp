import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import ListItem from "./ListItem";
import { TouchableOpacity } from "react-native-gesture-handler";
export default function List(props) {
  return (
    <ScrollView style={styles.container}>
      <View>
        {props.data.map(x => {
          return props.type ? (
            <View key={x.key} onPress={() => props.onPress && props.onPress(x)}>
              <ListItem info={x} />
            </View>
          ) : (
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
