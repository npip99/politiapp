import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import List from "./List";
import { local, state } from "../officialsList";
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
    var officials = [];
    if (this.props.screenProps.pageName == "Local") {
      officials = local;
    } else {
      officials = state;
    }
    return (
      <View style={styles.container}>
        <List
          data={officials.map(official => {
            return {
              key: official.id,
              title: official.name,
              description: official.position,
              image: official.image,
              beliefs: official.beliefs
            };
          })}
          onPress={x => {
            this.props.screenProps.navigation.navigate("Detail", {
              info: x,
              name: "OFFICIAL" + x.title
            });
          }}
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
