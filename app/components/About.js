import PropTypes from "prop-types";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/AntDesign";

// import styles from "./SideMenu.style";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button
} from "react-native";
class SideMenu extends Component {
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
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
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
            <View style={styles.closeCircle}>
              <Icon
                name="closecircleo"
                size={30}
                color="#900"
                onPress={() => {
                  this.toggleModal(!this.state.modalVisible);
                }}
              />
            </View>
            <TouchableHighlight>
              <Text style={styles.text}>
                <Button
                  title="Close modal"
                  onPress={() => {
                    this.toggleModal(!this.state.modalVisible);
                  }}
                />
              </Text>
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
          {/* <Text style={styles.text}></Text> */}
        </TouchableHighlight>
      </View>
    );
  }
}
export default SideMenu;

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
