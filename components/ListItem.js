import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function ListItemImage(props) {
  if (props.image) {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
    );
  } else {
    return (
      <View
        style={{ ...styles.colorContainer, backgroundColor: props.color }}
      ></View>
    );
  }
}

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

export default function ListItem(props) {
  //info.title
  //info.description
  return (
    <View style={styles.container}>
      <ListItemImage image={props.info.image} color={props.info.color} />
      <Text style={styles.title}>{props.info.title}</Text>
      <Text style={styles.description}>{props.info.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
//    backgroundColor: "#F3D1B0",
    marginVertical: 5,
    marginHorizontal: 10,

    ...elevationShadowStyle(3),
    backgroundColor: "#fff",
  },
  imageContainer: {
    left: 20,
    top: 20,
    width: 50,
    height: 50
  },
  colorContainer: {
    left: 20,
    top: 20,
    width: 50,
    height: 50,
    borderRadius: 50
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  title: {
    top: -25,
    fontSize: 22,
    marginLeft: 100,
    marginRight: 10,
   // backgroundColor: "yellow"
  },
  description: {
    margin: 10,
  //  backgroundColor: "orange"
  },
});
