import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import List from "./List";

export default class Budget extends React.Component {
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
    fetch("http://localhost:3000/state/fl/budget")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ state: { ...this.state.state, budget: resJSON } });
      });
    fetch("http://localhost:3000/county/099/budget")
      .then(res => res.json())
      .then(resJSON => {
        this.setState({ local: { ...this.state.local, budget: resJSON } });
      });
  }
  render() {
    const chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5
    };
    var budgetData;
    if (this.props.screenProps.pageName == "Local") {
      budgetData = this.state.local.budget;
    } else {
      budgetData = this.state.state.budget;
    }

    let totalBudget = 0;
    for (amount of budgetData.map(budgetDatum => budgetDatum.budget)) {
      totalBudget += amount;
    }
    const pieChartData = budgetData.map(budgetDatum => {
      return {
        name: budgetDatum.name,
        budget: budgetDatum.budget,
        color: budgetDatum.color,
        key: budgetDatum.name
      };
    });
    const listData = budgetData.map(budgetDatum => {
      return {
        key: budgetDatum.name,
        title: budgetDatum.name,
        description: "$" + budgetDatum.budget,
        color: budgetDatum.color
      };
    });

    const pieChartWidth = Dimensions.get("window").width;
    return (
      <View style={styles.container}>
        <View style={styles.pieChartContainer}>
          <PieChart
            data={pieChartData}
            width={200}
            height={200}
            accessor="budget"
            backgroundColor={"transparent"}
            chartConfig={chartConfig}
            paddingLeft={50}
            hasLegend={false}
            absolute
          />
        </View>
        <View style={styles.listContainer}>
          <List data={listData} unclickable />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  pieChartContainer: {},
  listContainer: {
    flex: 1,
    width: "100%"
  }
});
