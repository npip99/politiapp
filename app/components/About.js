import PropTypes from "prop-types";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/AntDesign";

import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button
} from "react-native";

export default class About extends Component {
  //   navigateToScreen = route => () => {
  //     const navigateAction = NavigationActions.navigate({
  //       routeName: route
  //     });
  //     this.props.navigation.dispatch(navigateAction);
  //   };
  state = {
    modalVisible: false
  };

  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View style={styles.modal}>
            <Text style={styles.text}>
              Version 1.0.0
              {"\n"}
            </Text>
            <Text style={styles.text}>
              Contact us at info@politiapp.com{"\n"}
            </Text>
            <Text style={styles.text}>{"\u00A9"} 2020 Politiapp</Text>

            <TouchableHighlight>
              <Button
                title="Close"
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              />
            </TouchableHighlight>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Button
            title="About"
            onPress={() => {
              this.toggleModal(true);
            }}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  closeCircle: {
    left: "50%",
    top: "-45%",
    marginLeft: -75
  },
  modal: {
    flex: 1,
    // paddingTop: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    color: "#3f2949",
    // marginTop: 10,
    alignItems: "center",
    justifyContent: "center"
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
  }
});
