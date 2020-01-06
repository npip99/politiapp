import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Officials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officials: [
        {
          name: 'Rick Scott',
          position: 'Senator',
          beliefs: [
            'Believes that governments are inefficient'
          ],
        },
        {
          name: 'Marco Rubio',
          position: 'Senator',
          beliefs: [
            'speaks spanish',
          ],
        },
      ]
    }
  }

  render() {
    if (this.props.screenProps.pageName == 'Local') {
      // Do local stuff
    } else {
      // Do state stuff
    }
    return (
      <View>
        <Text>THIS IS THE LIST OF OFFICIALS</Text>
        <Button
          onPress={() =>
            this.props.screenProps.navigation.navigate("Detail", {name: "OFFICIAL"})
          }
          title="Detail Page"
        />
        <List
          data={
            this.state.officials.map(official => {
              return {
                title: official.name,
                description: official.position,
              };
            })
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

