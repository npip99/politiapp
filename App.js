import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { DrawerContent } from "./components/DrawerContent";
import SideMenu from "./components/SideMenu";
import IOSIcon from "react-native-vector-icons/Ionicons";
import State from "./screens/State";
import Local from "./screens/Local";

const App = createDrawerNavigator(
  {
    State: {
      screen: State
    },
    Local: {
      screen: Local
    }
  },
  {
    contentComponent: SideMenu,
    // contentComponent: DrawerContent,
    drawerWidth: Dimensions.get("window").width - 120
  }
);

export default createAppContainer(App);
