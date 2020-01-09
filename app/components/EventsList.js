import React from "react";
import { View, Text, StyleSheet } from "react-native";
import List from "./List";

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
    this.updateEvents();
  }

  async updateEvents() {
    fetch("http://localhost:3000/county/099/events")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({
          events: resJSON
        });
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
                body: event.body,
              };
            })}
            onPress={x => {
              this.props.screenProps.navigation.navigate("Detail", {
                event: true,
                body: x.body,
                name: "OFFICIAL" + x.title
              })
            }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    backgroundColor: "whitesmoke"
  }
});

export default Events;
