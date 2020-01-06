import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import List from "./List";

export default class Officials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officials: [
        {
          id: 1,
          name: "Rick Scott",
          position: "Senator",
          beliefs: ["Believes that governments are inefficient"]
        },
        {
          id: 2,
          name: "Marco Rubio",
          position: "Senator",
          beliefs: ["speaks spanish"]
        }
      ]
    };
  }

  render() {
    if (this.props.screenProps.pageName == "Local") {
      // Do local stuff
    } else {
      // Do state stuff
    }
    return (
      <View>
        <Text>THIS IS THE LIST OF OFFICIALS</Text>
        <List
          data={this.state.officials.map(official => {
            return {
              key: official.id,
              title: official.name,
              description: official.position
            };
          })}
          onPress={key =>
            this.props.screenProps.navigation.navigate("Detail", {
              name: "OFFICIAL" + key
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
