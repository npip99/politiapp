import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Official from "../components/Official";
import Event from "../components/Event";

export default function Detail(props) {
  const params = props.navigation.state.params;

  return params.official ? (
    <Official info={params.info}/>
  ) : (
    <Event info={params.info}/>
  );
}
