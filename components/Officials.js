// import * as React from "react";
// import {
//   Button,
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   TouchableOpacity
// } from "react-native";
// import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
// import ListItem from "./ListItem";
// class OfficialsScreen extends React.Component {
//   OfficialsList = [
//     { id: 0, photo: null, title: "Cynthia", description: "first cynthia " },
//     { id: 1, photo: null, title: "alice", description: "first alice " },
//     { id: 2, photo: null, title: "bob", description: " bob description " },
//     { id: 3, photo: null, title: "Cynthia", description: "first cynthia " },
//     { id: 4, photo: null, title: "alice", description: "first alice " },
//     { id: 5, photo: null, title: "bob", description: " bob description " },
//     { id: 6, photo: null, title: "Cynthia", description: "first cynthia " },
//     { id: 7, photo: null, title: "alice", description: "first alice " },
//     { id: 8, photo: null, title: "bob", description: " bob description " },
//     { id: 9, photo: null, title: "Cynthia", description: "first cynthia " },
//     { id: 10, photo: null, title: "alice", description: "first alice " },
//     { id: 11, photo: null, title: "bob", description: " bob description " },
//     { id: 12, photo: null, title: "Cynthia", description: "first cynthia " },
//     { id: 13, photo: null, title: "alice", description: "first alice " },
//     { id: 14, photo: null, title: "bob", description: " bob description " }
//   ];
//   render() {
//     return (
//       <View style={styles.container}>
//         {/* <Button
//           title="Go to Details"
//           onPress={() =>
//             this.props.navigation.navigate("Details", { name: "a" })
//           }
//         /> */}
//         <ScrollView>
//           <View style={styles.container}>
//             <Text>List</Text>
//             {this.OfficialsList.map(x => {
//               return (
//                 <TouchableOpacity
//                   onPress={() =>
//                     this.props.navigation.navigate("Details", { info: x })
//                   }
//                 >
//                   <ListItem info={x}></ListItem>
//                 </TouchableOpacity>
//               );
//             })}
//           </View>
//         </ScrollView>
//       </View>
//       // <StackNavigator></StackNavigator>
//     );
//   }
// }
// OfficialsScreen.navigationOptions = {
//   header: null
// };
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
//     // initialRouteName: "Officials"
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class Officials extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   }
// });

import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Header from "./Header";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

class OfficialsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate("Details", { name: "a" })
          }
        />
        <Text>LinksScreen</Text>
      </View>
    );
  }
}

OfficialsScreen.navigationOptions = {
  headerLeft: () => (
    <Button
      onPress={() => alert("This is a button!")}
      title="Info"
      color="#fff"
    />
  )
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
    header: null,
    headerLeft: () => (
      <Button
        onPress={() => alert("This is a top button!")}
        title="Info"
        color="#fff"
      />
    )
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
// import { StyleSheet, View, Text } from "react-native";

// export default function Officials() {
//   return (
//     <View style={styles.container}>
//       <Text>LinksScreen</Text>
//     </View>
//   );
// }

// Officials.navigationOptions = {
//   header: null
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center"
//   }
// });
