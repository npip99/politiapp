import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import List from "./List";
import Config from '../Config';

export default class Officials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {
        officials: [],
        budget: []
      },
      local: {
        officials: [],
        budget: []
      }
    };
    this.updateOfficialsInformation();
  }

  async updateOfficialsInformation() {
    fetch(Config.hostname + "/state/fl/officials")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ state: { ...this.state.state, officials: resJSON } });
      })
      .catch(err => {
        console.log(err);
      });
    fetch(Config.hostname + "/county/099/officials")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ local: { ...this.state.local, officials: resJSON } });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    var officials = [];
    if (this.props.screenProps.pageName == "Local") {
      officials = this.state.local.officials;
    } else {
      officials = this.state.state.officials;
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
              official: true,
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
    flex: 1,
    marginVertical: 5,
  }
});
