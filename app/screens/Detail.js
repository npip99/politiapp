import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Official from "../components/Official";
import Event from "../components/Event";

export default function Detail(props) {
  const params = props.screenProps.navigation.state.params;

  return params.official ? (
    <Official style={styles.container} info={params.info}/>
  ) : (
    <Event style={styles.container} info={params.info}/>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

