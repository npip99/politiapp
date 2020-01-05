// import * as WebBrowser from "expo-web-browser";

// import List from "./List";
// // import {
// //   Image,
// //   Platform,
// //   ScrollView,
// //   StyleSheet,
// //   Text,
// //   TouchableOpacity,
// //   View
// // } from "react-native";
// // import StackNavigator from "../navigation/StackNavigator";

// // export default function Officials() {
// //   const OfficialsList = [
// //     { id: 0, photo: null, title: "Cynthia", description: "first cynthia " },
// //     { id: 1, photo: null, title: "alice", description: "first alice " },
// //     { id: 2, photo: null, title: "bob", description: " bob description " },
// //     { id: 3, photo: null, title: "Cynthia", description: "first cynthia " },
// //     { id: 4, photo: null, title: "alice", description: "first alice " },
// //     { id: 5, photo: null, title: "bob", description: " bob description " },
// //     { id: 6, photo: null, title: "Cynthia", description: "first cynthia " },
// //     { id: 7, photo: null, title: "alice", description: "first alice " },
// //     { id: 8, photo: null, title: "bob", description: " bob description " },
// //     { id: 9, photo: null, title: "Cynthia", description: "first cynthia " },
// //     { id: 10, photo: null, title: "alice", description: "first alice " },
// //     { id: 11, photo: null, title: "bob", description: " bob description " },
// //     { id: 12, photo: null, title: "Cynthia", description: "first cynthia " },
// //     { id: 13, photo: null, title: "alice", description: "first alice " },
// //     { id: 14, photo: null, title: "bob", description: " bob description " }
// //   ];
// //   return (
// //     // <View style={styles.container}>
// //     //   <List data={OfficialsList}></List>
// //     // </View>
// //     <StackNavigator></StackNavigator>
// //   );
// // }

// // Officials.navigationOptions = {
// //   title: "State"
// // };
// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#fff"
// //   }
// // });
import * as React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListItem from "./ListItem";
class OfficialsScreen extends React.Component {
  OfficialsList = [
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
  render() {
    return (
      <View style={styles.container}>
        {/* <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { name: "a" })
          }
        /> */}
        <ScrollView>
          <View style={styles.container}>
            <Text>List</Text>
            {this.OfficialsList.map(x => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("Details", { info: x })
                  }
                >
                  <ListItem info={x}></ListItem>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
      // <StackNavigator></StackNavigator>
    );
  }
}
OfficialsScreen.navigationOptions = {
  header: null
};
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>{this.props.navigation.getParam("info", -1).title}</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Officials: OfficialsScreen,
    Details: DetailsScreen
  },
  {
    // initialRouteName: "Officials"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Officials extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

// import React from "react";
// import { StyleSheet, View, Text, Button } from "react-native";
// import StackNavigator from "../navigation/StackNavigator";
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer, createSwitchNavigator } from "react-navigation";
// import Header from "./Header";
// class OfficialsScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header></Header>
//         <Button
//           title="Go to Details"
//           onPress={() =>
//             this.props.navigation.navigate("Details", { name: "a" })
//           }
//         />
//         <Text>LinksScreen</Text>
//       </View>
//     );
//   }
// }

// OfficialsScreen.navigationOptions = {
//   title: "HI"
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });

// class DetailsScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Text>{this.props.navigation.getParam("info", -1).title}</Text>
//       </View>
//     );
//   }
// }

// const RootStack = createStackNavigator(
//   {
//     Officials: OfficialsScreen,
//     Details: DetailsScreen
//   },
//   {
//     headerMode: "none"
//     // initialRouteName: "Officials"
//   }
// );

// export default createAppContainer(RootStack);
