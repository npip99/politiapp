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
export default function Detail(props) {
  //info.title
  //info.description
  const info = props.navigation.state.params.info;
  console.log("info", info);
  const listData = info.beliefs.map(belief => {
    return {
      title: belief.belief,
      description: ""
    };
  });
  return (
    <View style={styles.box}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: info.image }} />
      </View>
      <Text style={styles.title}>{info.title}</Text>
      <Text style={styles.description}>{info.description}</Text>
      <List data={listData} />
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    left: 20,
    top: 20,
    width: 100,
    height: 100
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15
  },
  title: {
    width: "60%",
    left: 130,
    top: -80,
    height: 20,
    backgroundColor: "yellow"
  },
  description: {
    left: 130,
    top: -70,
    width: "60%",
    height: 80,
    backgroundColor: "orange"
  },
  box: {
    flex: 1,
    width: "100%",
    height: 50,
    backgroundColor: "#F3D1B0",
    borderRadius: 5
  }
});
