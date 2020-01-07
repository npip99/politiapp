// import React, { Component } from "react";
// import { Text, View, StyleSheet } from "react-native";

// class Detail extends Component {
//   render() {
//     //this.props.navigation.state.params.info: title, description
//     return (
//       <View style={styles.container}>
//         {/* image */}
//         <View style={styles.image}>
//           <Text>Image</Text>
//         </View>
//         <View style={styles.name}>
//           <Text>{this.props.navigation.state.params.info.title}</Text>
//         </View>
//         <Text>{this.props.navigation.state.params.name}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//     // flex: 1
//   },
//   image: {
//     left: 20,
//     top: 10,
//     width: 150,
//     height: 150,
//     backgroundColor: "blue"
//   },
//   name: {
//     left: 180,
//     top: 10,
//     width: 150,
//     height: 50,
//     backgroundColor: "orange"
//   }
// });

// export default Detail;
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import List from "../components/List";
import ExpandableList from "../components/ExpandableList";
export default function Detail(props) {
  //info.title
  //info.description
  const info = props.navigation.state.params.info;
  const listData = info.beliefs.map(belief => {
    return {
      title: belief.belief,
      description:
        "HAHA Description HAHA DescriptionHAHA DescriptionHAHA DescriptionHAHA DescriptionHAHA DescriptionHAHA DescriptionHAHA Description"
    };
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: info.image }} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{info.title}</Text>
          <Text style={styles.description}>{info.description}</Text>
        </View>
      </View>

      <ExpandableList info={listData}></ExpandableList>
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
    flexDirection: "row"
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
