import React from "react";
import { Dimensions, TouchableOpacity, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import SideMenu from "./components/SideMenu";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from "react-native-vector-icons/FontAwesome5";

import State from "./screens/State";
import Local from "./screens/Local";
import Events from "./screens/Events";

const App = createDrawerNavigator(
  {
    Events: {
      screen: Events,
      navigationOptions: {
        drawerIcon: <Icon name="newspaper-o" size={21} />
      }
    },
    State: {
      screen: State,
      navigationOptions: {
        drawerIcon: <Icon name="institution" size={22} />
      }
    },
    Local: {
      screen: Local,
      navigationOptions: {
        drawerIcon: <Icon5 name="city" size={20} />
      }
    }
  },
  {
    contentComponent: SideMenu,
    drawerWidth: Dimensions.get("window").width - 120
  }
);

export default createAppContainer(App);
