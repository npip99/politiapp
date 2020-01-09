
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
import Detail from "./Detail";
import PoliticalInfo from "../components/PoliticalInfo";
import EventsList from "../components/EventsList";

const stackNav = createStackNavigator({
  Main: {
    screen: props => (
      <EventsList screenProps={{ pageName: "Events", ...props }} />
    ),
    navigationOptions: ({ navigation }) => ({
      title: "Events",
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
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: "Current Event"
    })
  }
});

export default stackNav;

