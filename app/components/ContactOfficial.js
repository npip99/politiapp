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
  Button,
  TextInput
} from "react-native";
class SideMenu extends Component {
  state = {
    modalVisible: false,
    text: ""
  };
  toggleModal(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log("OFFICIAL INFO", this.props.officialInfo);
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
            <Text style={styles.text}>{this.props.officialInfo.title}</Text>
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
            <View style={{ padding: 10, width: "100%" }}>
              <TextInput
                multiline={true}
                style={{
                  height: "45%",
                  width: "100%",
                  borderColor: "gray",
                  borderWidth: 1
                }}
                placeholder="Type here to translate!"
                onChangeText={text => this.setState({ text })}
                value={this.state.text}
              />
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.toggleModal(true);
          }}
        >
          <Button
            title="Contact"
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
    backgroundColor: "yellow",
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
