import React from "react";
import { View, Text, StyleSheet } from "react-native";

// pull in from DrawerTrigger.js
import DrawerTrigger from "./DrawerTrigger.js";

class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
        <DrawerTrigger name={this.props.name} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke"
  }
});

export default Header;
