import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideMenu from "./components/SideMenu";
import IOSIcon from "react-native-vector-icons/Ionicons";
import State from "./screens/State";
import Local from "./screens/Local";
import Events from "./screens/Events";

const App = createDrawerNavigator(
  {
    Events: {
      screen: Events
    },
    State: {
      screen: State
    },
    Local: {
      screen: Local
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 120
  }
);

export default createAppContainer(App);

