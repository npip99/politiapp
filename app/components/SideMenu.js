import PropTypes from "prop-types";
import React, { Component } from "react";
// import styles from "./SideMenu.style";
import { NavigationActions } from "react-navigation";
import { ScrollView, Text, View } from "react-native";
import { DrawerNavigation } from "react-navigation";
import { DrawerItems } from "react-navigation-drawer";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };

  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: "#f50057",
            height: 140,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ color: "white", fontSize: 30 }}>Header</Text>
        </View>
        <DrawerItems {...this.props} />
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
