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
      color: "#ffffff",
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
  const listData = budgetData.map(budgetDatum => {
    return {
      title: budgetDatum.name,
      description: budgetDatum.budget,
      color: budgetDatum.color
    };
  });
  return (
    <View>
      <PieChart
        data={budgetData}
        width={150}
        height={150}
        chartConfig={chartConfig}
        accessor="budget"
        backgroundColor="transparent"
        hasLegend={false}
        absolute
      />
      <Text>THIS IS THE GOVERNMENT BUDGET</Text>
      <List data={listData} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
