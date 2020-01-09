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
  toggleModal(visible) {
    this.setState({ modalVisible: visible, submitted: false });
  }
  handleAlert = () => {
    Alert.alert("Submitted!!");
  };

  postContact = (official, content) => {
    fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        a: "abc",
        official: official,
        content: content
      })
    })
      .then(res => res.json())
      .then(resJSON => {});
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
            <View style={styles.header}>
              <Text style={styles.text}>
                To: {this.props.officialInfo.title}
              </Text>
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
            </View>

            <TextInput
              autoFocus={this.state.submitted ? false : true}
              multiline={true}
              ref={input => (this.input = input)}
              style={{
                marginLeft: 20,
                marginRight: 20
              }}
              placeholder="Write a message"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              title="Submit"
              onPress={() => {
                this.setState({ submitted: true });
                Keyboard.dismiss();
                this.postContact(
                  this.props.officialInfo.title,
                  this.state.text
                );
                setTimeout(() => {
                  //... open your alert here https://github.com/facebook/react-native/issues/17356
                  Alert.alert("Your message has been sent!", "", [
                    {
                      text: "Ok",
                      onPress: () => {
                        Keyboard.dismiss();
                        this.setState({ text: "" });
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
  header: {
    marginTop: 60,
    height: 90,
    padding: 25,
    width: "100%"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  closeCircle: {
    left: "100%",
    marginTop: -25,
    marginLeft: -15
  },
  modal: {
    flex: 1
  },
  text: {},
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
