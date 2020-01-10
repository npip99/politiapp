import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function ListItemImage(props) {
  if (props.image) {
    return (
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
    );
  } else if (props.color) {
    return (
      <View style={styles.imageContainer}>
        <View
          style={{ ...styles.colorContainer, backgroundColor: props.color }}
        ></View>
      </View>
    );
  } else {
    return null;
  }
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

export default function ListItem(props) {
  let titleStyle = {...styles.title};
  if (props.info.title.split(" ").length > 5) {
    titleStyle.fontSize = 18;
  }
  return (
    <View style={styles.container}>
      <ListItemImage image={props.info.image} color={props.info.color} />
      <View style={styles.infoContainer}>
        <Text style={titleStyle}>{props.info.title}</Text>
        <Text style={styles.description}>{props.info.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: "#fff",

    ...elevationShadowStyle(3)
  },
  imageContainer: {
    width: 60,
    height: 60,
    marginVertical: 16,
    marginLeft: 25,
    marginRight: 5
  },
  colorContainer: {
    height: "100%",
    width: "100%",
    borderRadius: 50
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  title: {
    fontSize: 22,
    marginTop: 15,
    marginHorizontal: 20
  },
  description: {
    marginTop: 5,
    marginHorizontal: 20
  }
});
