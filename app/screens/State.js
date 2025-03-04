import React from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import IOSIcon from "react-native-vector-icons/Ionicons";
import PoliticalInfo from "../components/PoliticalInfo";
import Detail from "./Detail";

const stackNav = createStackNavigator({
  Main: {
    screen: props => (
      <PoliticalInfo
        style={{ flex: 1 }}
        screenProps={{ pageName: "State", ...props }}
      />
    ),

    navigationOptions: ({ navigation }) => ({
      title: "State",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <View
            style={{
              paddingLeft: 15
            }}
          >
            <IOSIcon name="ios-menu" size={30} />
          </View>
        </TouchableOpacity>
      )
    })
  },
  Detail: {
    screen: props => (
      <Detail style={{flex: 1}} screenProps={{pageName: "", ...props}}/>
    ),
    navigationOptions: ({ navigation }) => ({
      headerBackTitle: " ",
      title: ""
    })
  }
});

export default stackNav;
