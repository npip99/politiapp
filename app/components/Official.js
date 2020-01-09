import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import List from "../components/List";
import ExpandableList from "../components/ExpandableList";
import ContactOfficial from "./ContactOfficial";

export default function Official(props) {
  const listData = props.info.beliefs.map(belief => {
    return {
      title: belief.belief,
      subsections: [
        {
          id: 1,
          val: belief.pros
        },
        {
          id: 2,
          val: belief.cons
        },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.info.image }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{props.info.title}</Text>
          <Text style={styles.description}>{props.info.description}</Text>
        </View>
      </View>

      <ExpandableList
        beliefs={listData}
        officialInfo={props.info}
      ></ExpandableList>
    </View>
  );
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#f3f3f3",
    flexDirection: "row",
    ...elevationShadowStyle(3)
  },
  imageContainer: {
    margin: 20,
    width: 100,
    height: 100,
    ...elevationShadowStyle(3)
  },
  titleContainer: {
    flex: 1,
    margin: 20
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  title: {
    width: "60%",
    fontSize: 24
  },
  description: {
    fontSize: 16,
    marginTop: 15
  },
  container: {
    flex: 1,
    width: "100%",
    borderRadius: 5
  }
});
