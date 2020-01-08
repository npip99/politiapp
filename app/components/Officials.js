import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import List from "./List";
import { localOfficials, stateOfficials } from "../../api/officialsList";

export default class Officials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {
        fl: {
          officials: [],
          budget: []
        }
      },
      local: {
        "099": {
          officials: [],
          budget: []
        }
      }
    };
  }

  async updateOfficialsInformation() {
    fetch("http://localhost/state/fl")
      .then(res => res.json())
      .then(resJSON => {
        console.log(resJSON);
      });
  }

  render() {
    var officials = [];
    if (this.props.screenProps.pageName == "Local") {
      officials = this.state.local;
    } else {
      officials = this.state.state;
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
