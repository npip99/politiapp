import * as WebBrowser from "expo-web-browser";
import React from "react";
import List from "./List";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import StackNavigator from "../navigation/StackNavigator";

export default function Officials() {
  const OfficialsList = [
    { id: 0, photo: null, title: "Cynthia", description: "first cynthia " },
    { id: 1, photo: null, title: "alice", description: "first alice " },
    { id: 2, photo: null, title: "bob", description: " bob description " },
    { id: 3, photo: null, title: "Cynthia", description: "first cynthia " },
    { id: 4, photo: null, title: "alice", description: "first alice " },
    { id: 5, photo: null, title: "bob", description: " bob description " },
    { id: 6, photo: null, title: "Cynthia", description: "first cynthia " },
    { id: 7, photo: null, title: "alice", description: "first alice " },
    { id: 8, photo: null, title: "bob", description: " bob description " },
    { id: 9, photo: null, title: "Cynthia", description: "first cynthia " },
    { id: 10, photo: null, title: "alice", description: "first alice " },
    { id: 11, photo: null, title: "bob", description: " bob description " },
    { id: 12, photo: null, title: "Cynthia", description: "first cynthia " },
    { id: 13, photo: null, title: "alice", description: "first alice " },
    { id: 14, photo: null, title: "bob", description: " bob description " }
  ];
  return (
    // <View style={styles.container}>
    //   <List data={OfficialsList}></List>
    // </View>
    <StackNavigator></StackNavigator>
  );
}

Officials.navigationOptions = {
  title: "State"
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
