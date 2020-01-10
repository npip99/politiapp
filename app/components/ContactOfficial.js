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
  TextInput,
  Platform
} from "react-native";

import Button from "./Button";
import Config from "../Config";

import { AsyncStorage } from "react-native";

export default class ContactOfficial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      text: ""
    };
    this.initKey();
  }

  initKey = async () => {
    try {
      let key = await AsyncStorage.getItem("key");
      if (key === null) {
        key = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        await AsyncStorage.setItem("key", key);
      }
    } catch(err) {
      console.log(err);
    }
  }

  toggleModal(visible) {
    this.setState({ modalVisible: visible, submitted: false });
  }

  handleAlert = () => {
    Alert.alert("Submitted!!");
  };

  postContact = async (official, content) => {
    const key = await AsyncStorage.getItem("key");
    fetch(Config.hostname + "/contact", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        key: key,
        official: official,
        content: content
      })
    })
    .then(res => res.json())
    .then(resJSON => {
      console.log("Contact response: ", resJSON);
    })
    .catch(err => console.log(err));
  };

  render() {
    let headerStyle = {...styles.header};
    if (Platform.OS == 'ios') {
      headerStyle.marginTop = 60;
    }
    return (
      <ScrollView keyboardShouldPersistTaps="handled">
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
        >
          <View style={styles.modal}>
            <View style={headerStyle}>
              <Text style={styles.text}>
                To: {this.props.officialInfo.title}
              </Text>
              <View style={styles.closeCircle}>
                <Icon
                  name="closecircleo"
                  size={30}
                  color="#147EFB"
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
              style={styles.message}
              placeholder="Write a message"
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
            />
            <Button
              title="Submit"
              onPress={async () => {
                this.setState({ submitted: true });
                Keyboard.dismiss();
                this.postContact(
                  this.props.officialInfo.title,
                  this.state.text
                );
                setTimeout(() => {
                  //... open your alert here https://github.com/facebook/react-native/issues/17356
                  Alert.alert("Your message has been sent!", null, [
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
            />
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

const styles = StyleSheet.create({
  header: {
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
    color: "#5FC9F8",
    marginTop: -25,
    marginLeft: -15
  },
  modal: {
    flex: 1,
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
  },
  message: {
    marginBottom: 10,
    marginHorizontal: 20,
  },
});

