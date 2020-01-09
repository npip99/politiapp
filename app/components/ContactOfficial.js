import PropTypes from "prop-types";
import React, { Component } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import {
  Keyboard,
  ScrollView,
  Alert,
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
  componentDidMount() {
    console.log("mounting the component");
  }
  toggleModal(visible) {
    this.setState({ modalVisible: visible, submitted: false });
  }
  handleAlert = () => {
    Alert.alert("Submitted!!");
  };
  render() {
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
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
            <TextInput
              autoFocus={this.state.submitted ? false : true}
              multiline={true}
              ref={input => (this.input = input)}
              style={{
                height: 100,
                width: "100%",
                borderColor: "gray",
                backgroundColor: "blue",
                borderWidth: 1
              }}
              placeholder="Write a message"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              title="Submit"
              onPress={() => {
                console.log(
                  "submit this.refs.input.isfocused",
                  this.input.isFocused()
                );
                this.setState({ text: "", submitted: true });
                Keyboard.dismiss();
                setTimeout(() => {
                  //... open your alert here https://github.com/facebook/react-native/issues/17356
                  Alert.alert("sub", "My Alert Msg", [
                    {
                      text: "Ok",
                      onPress: () => {
                        Keyboard.dismiss();
                        this.toggleModal(!this.state.modalVisible);
                      }
                    }
                  ]);
                }, 50);
              }}
            ></Button>
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
        </TouchableHighlight>
      </ScrollView>
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
    top: "-15%",
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
