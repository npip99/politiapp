import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Officials from './Officials';
import Budget from './Budget';

const TabNavigator = createBottomTabNavigator({
  Officials: Officials,
  Budget: Budget,
});

export default createAppContainer(TabNavigator);

