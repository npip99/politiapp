import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "./List";
import Config from '../Config';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.updateEvents();
  }

  async updateEvents() {
    fetch(Config.hostname + "/county/099/events")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({
          events: resJSON
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <List
          data={this.state.events.map(event => {
              return {
                key: event.id,
                title: event.title,
                event: event,
              };
            })}
            onPress={x => {
              this.props.screenProps.navigation.navigate("Detail", {
                event: true,
                info: x.event,
              })
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke"
  }
});

export default EventsList;

