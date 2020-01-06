import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { PieChart } from 'react-native-chart-kit';

export default function Budget(props) {
  const pieChartData = [
    {
      name: 'Education',
      value: 315000000,
      color: '#f00'
    },
    {
      name: 'Infrastructure',
      value: 35000000,
      color: '#0f0'
    },
    {
      name: 'Transportation',
      value: 90000000,
      color: '#00f'
    },
  ];
  return (
    <View>
      <PieChart data={pieChartData}/>
      <Text>THIS IS THE GOVERNMENT BUDGET</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

