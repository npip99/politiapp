import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Official from "../components/Official.js";

export default function Detail(props) {
  return props.official ? (
    <Official info={props.navigation.state.params.info}/>
  ) : (
    <View>
      <Text>{props.navigations.state.params.body}</Text>
    </View>
  );
}

