import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Official from "../components/Official.js";

export default function Detail(props) {
  return <Official info={props.navigation.state.params.info} />;
}
