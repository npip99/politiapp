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
      <PoliticalInfo screenProps={{ pageName: "Local", ...props }} />
    ),
    navigationOptions: ({ navigation }) => ({
      title: "Local",
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
      <Detail style={{flex: 1}} screenProps={{pageName: "Detail", ...props}}/>
    ),
    header: ({ goBack }) => ({
      left: (
        <Icon
          name={"chevron-left"}
          onPress={() => {
            goBack();
          }}
        />
      )
    }),
    navigationOptions: ({ navigation }) => ({
      title: "",
      headerBackTitle: " "
    })
  }
});

export default stackNav;
