//Adapted from https://moduscreate.com/blog/expanding-and-collapsing-elements-using-animations-in-react-native/
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Animated
} from "react-native";

class ExpandableListItem extends Component {
  constructor(props) {
    super(props);

    // this.icons = {
    //     'up'    : require('./images/Arrowhead-01-128.png'),
    //     'down'  : require('./images/Arrowhead-Down-01-128.png')
    // };
    this.state = {
      title: props.title,
      expanded: false,
      animation: new Animated.Value(40)
    };
    this.state.animation.addListener(({ value }) => (this._value = value));
  }
  componentDidMount() {
    console.log("Component did mount", this.state);
  }

  toggle() {
    let initialValue = this.state.expanded
        ? this.state.maxHeight + this.state.minHeight
        : this.state.minHeight,
      finalValue = this.state.expanded
        ? this.state.minHeight
        : this.state.maxHeight + this.state.minHeight;
    console.log(
      "toggle",
      this.state.expanded,
      this.state.animation,
      initialValue,
      finalValue
    );
    this.setState({
      expanded: !this.state.expanded
    });

    this.state.animation.setValue(initialValue);
    Animated.spring(this.state.animation, {
      toValue: finalValue
    }).start();
  }

  _setMaxHeight(event) {
    console.log("setMaxHeight");
    this.setState({
      maxHeight: event.nativeEvent.layout.height
    });
  }

  _setMinHeight(event) {
    console.log("setMinHeight", event.nativeEvent.layout.height);
    if (this.state.animation._value == 0) {
      this.state.animation.setValue(event.nativeEvent.layout.height);
    }
    this.setState({
      minHeight: event.nativeEvent.layout.height
    });
  }

  render() {
    // let icon = this.icons['down'];

    // if(this.state.expanded){
    //     icon = this.icons['up'];
    // }
    console.log(
      "animation value",
      this.state.animation._value,
      this.state.animation._value == 40
    );
    return (
      <Animated.View
        style={[styles.container, { height: this.state.animation }]}
      >
        <View
          style={styles.titleContainer}
          onLayout={this._setMinHeight.bind(this)}
        >
          <Text style={styles.title}>{this.state.title}</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggle.bind(this)}
            underlayColor="#f1f1f1"
          >
            <Text>Hi</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.body} onLayout={this._setMaxHeight.bind(this)}>
          {this.props.children}
        </View>
      </Animated.View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    overflow: "hidden"
  },
  titleContainer: {
    flexDirection: "row"
  },
  title: {
    flex: 1,
    padding: 10,
    color: "#2a2f43",
    fontWeight: "bold"
  },
  button: {
    backgroundColor: "red"
  },
  // buttonImage : {
  //     width   : 30,
  //     height  : 25
  // },
  body: {
    padding: 10,
    paddingTop: 0
  }
});

export default ExpandableListItem;
