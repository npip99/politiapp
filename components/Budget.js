import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { PieChart } from "react-native-chart-kit";
import List from "./List";

export default function Budget(props) {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5
  };

  const budgetData = [
    {
      name: "Education",
      budget: 21500000,
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Transportation",
      budget: 2800000,
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Emergency Services",
      budget: 527612,
      color: "#0f0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Utilities",
      budget: 8538000,
      color: "#ff0",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Infrastructure",
      budget: 11920000,
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Other",
      budget: 1190000,
      color: "rgb(128, 128, 128)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    }
  ];
  let totalBudget = 0;
  for(amount of budgetData.map(budgetDatum => budgetDatum.budget)) {
    totalBudget += amount;
  }
  const pieChartData = budgetData.map(budgetDatum => {
    return {
      name: budgetDatum.name,
      budget: budgetDatum.budget,
      color: budgetDatum.color,
      key: budgetDatum.name,
    }
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
        <List data={listData}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  pieChartContainer: {
  },
  listContainer: {
    flex: 1,
    width: "100%",
  }
});
