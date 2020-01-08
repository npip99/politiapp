import PropTypes from "prop-types";
import React, { Component } from "react";
// import styles from "./SideMenu.style";
import { NavigationActions } from "react-navigation";

import About from "./About";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight
} from "react-native";
import { DrawerNavigation } from "react-navigation";
import { DrawerItems } from "react-navigation-drawer";

class SideMenu extends Component {
  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  };
  state = {
    modalVisible: false
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Politiapp</Text>
        </View>
        <DrawerItems style={styles.drawer} {...this.props} />

        <View style={styles.footer}>
          <View style={styles.footerInner}>
            <About></About>
            <Text>{"\u00A9"} 2020 Politiapp</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },

  modal: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f7021a",
    padding: 100
  },
  text: {
    color: "#3f2949",
    marginTop: 10
  },
  titleContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  drawer: { width: "100%" },
  title: {
    fontSize: 25,
    marginTop: 45
  },
  footer: {
    flex: 1,
    fontSize: 25,
    marginBottom: 20
  },
  footerInner: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignSelf: "center",
    fontSize: 25
  }
});

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
