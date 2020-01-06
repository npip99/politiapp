import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default class Officials extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>THIS IS THE LIST OF OFFICIALS</Text>
        <Button
          onPress={() =>
            this.props.screenProps.navigation.navigate("Detail", {name: "OFFICIAL"})
          }
          title="Detail Page"
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

