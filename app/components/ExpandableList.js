/*Example of Expandable ListView in React Native*/
import React, { Component } from "react";
import ContactOfficial from "./ContactOfficial";
//import react in our project
import {
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform
} from "react-native";

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

class ExpandableItemComponent extends Component {
  //Custom Component for the Expandable List
  constructor() {
    super();
    this.state = {
      layoutHeight: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.isExpanded) {
      this.setState(() => {
        return {
          layoutHeight: null
        };
      });
    } else {
      this.setState(() => {
        return {
          layoutHeight: 0
        };
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layoutHeight !== nextState.layoutHeight) {
      return true;
    }
    return false;
  }

  render() {
    console.log(this.props);
    return (
      <View style={{ zIndex: 3 }}>
        {/*Header of the Expandable List Item*/}
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={this.props.onClickFunction}
          style={styles.header}
        >
          <Text style={styles.headerText}>{this.props.item.category_name}</Text>
        </TouchableOpacity>
        <View
          style={{
            height: this.state.layoutHeight,
            overflow: "hidden",
            backgroundColor: "blue"
          }}
        >
          {/*Content under the header of the Expandable List Item*/}
          {this.props.item.subcategory.map((item, key) => (
            <View
              key={key}
              style={styles.content}
              // onPress={() => alert("Id: " + item.id + " val: " + item.val)}
            >
              <Text style={styles.text}>{item.val}</Text>
              <View style={styles.separator} />
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default class ExpandableList extends Component {
  //Main View defined under this Class
  constructor(props) {
    super();
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    console.log("info expandable list", props);
    this.state = {
      listDataSource: props.beliefs.map(item => ({
        isExpanded: false,
        category_name: item.title,
        subcategory: [
          {
            id: "Pros",
            val:
              "Pros - Governments have no competitive pressure like a private company does. If a private company or citizen can do the same thing for cheaper, he will compete with other private companies and force lower prices."
          },
          {
            id: "Cons",
            val:
              "Cons - Large Instutions like Social Security are known to have very low administrative costs, on the order of 0.8%. This is commonly lower than the administrative costs of many smaller enterprises, and is lower than the profit margin of any private company."
          }
        ]
      }))
    };
  }

  updateLayout = index => {
    LayoutAnimation.configureNext(
      LayoutAnimation.create(
        100,
        LayoutAnimation.Types.easeInEaseOut,
        LayoutAnimation.Properties.scaleXY
      )
    );
    const array = [...this.state.listDataSource];
    //For Single Expand at a time
    array.map((value, placeindex) =>
      placeindex === index
        ? (array[placeindex]["isExpanded"] = !array[placeindex]["isExpanded"])
        : (array[placeindex]["isExpanded"] = false)
    );

    //For Multiple Expand at a time
    //array[index]['isExpanded'] = !array[index]['isExpanded'];
    this.setState(() => {
      return {
        listDataSource: array
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.listDataSource.map((item, key) => (
            <ExpandableItemComponent
              key={key}
              onClickFunction={this.updateLayout.bind(this, key)}
              item={item}
            />
          ))}
          <ContactOfficial
            officialInfo={this.props.officialInfo}
          ></ContactOfficial>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  topHeading: {
    paddingLeft: 10,
    fontSize: 20
  },
  header: {
    backgroundColor: "#fff",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    ...elevationShadowStyle(3)
  },
  headerText: {
    fontSize: 16,
    fontWeight: "500"
  },
  separator: {
    height: 1,
    backgroundColor: "#eee",
    width: "100%",
    marginLeft: 16,
    marginRight: 16
  },
  text: {
    fontSize: 16,
    color: "#606070",
    padding: 10
  },
  content: {
    // paddingBosubcategory: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "blue"
  }
});

//Dummy content to show
//You can also use dynamic data by calling webservice
const CONTENT = [
  {
    isExpanded: false,
    category_name:
      "Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1",
    subcategory: [
      { id: 1, val: "Sub Cat 1" },
      { id: 3, val: "Sub Cat 3" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 2",
    subcategory: [
      { id: 4, val: "Sub Cat 4" },
      { id: 5, val: "Sub Cat 5" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 3",
    subcategory: [
      { id: 7, val: "Sub Cat 7" },
      { id: 9, val: "Sub Cat 9" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 4",
    subcategory: [
      { id: 10, val: "Sub Cat 10" },
      { id: 12, val: "Sub Cat 2" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 5",
    subcategory: [
      { id: 13, val: "Sub Cat 13" },
      { id: 15, val: "Sub Cat 5" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 6",
    subcategory: [
      { id: 17, val: "Sub Cat 17" },
      { id: 18, val: "Sub Cat 8" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 7",
    subcategory: [{ id: 20, val: "Sub Cat 20" }]
  },
  {
    isExpanded: false,
    category_name: "Item 8",
    subcategory: [{ id: 22, val: "Sub Cat 22" }]
  },
  {
    isExpanded: false,
    category_name: "Item 9",
    subcategory: [
      { id: 26, val: "Sub Cat 26" },
      { id: 27, val: "Sub Cat 7" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 10",
    subcategory: [
      { id: 28, val: "Sub Cat 28" },
      { id: 30, val: "Sub Cat 0" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 11",
    subcategory: [{ id: 31, val: "Sub Cat 31" }]
  },
  {
    isExpanded: false,
    category_name: "Item 12",
    subcategory: [{ id: 34, val: "Sub Cat 34" }]
  },
  {
    isExpanded: false,
    category_name: "Item 13",
    subcategory: [
      { id: 38, val: "Sub Cat 38" },
      { id: 39, val: "Sub Cat 9" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 14",
    subcategory: [
      { id: 40, val: "Sub Cat 40" },
      { id: 42, val: "Sub Cat 2" }
    ]
  },
  {
    isExpanded: false,
    category_name: "Item 15",
    subcategory: [
      { id: 43, val: "Sub Cat 43" },
      { id: 44, val: "Sub Cat 44" }
    ]
  }
];
