import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Button
} from 'react-native';
import { StackNavigator ,TabNavigator} from 'react-navigation';
export default class Other extends React.Component {
  static navigationOptions = {
    title: '其他',
  };
  render() {
    return (
      <View>
        <Text>单独其他页面</Text>
      </View>
    );
  }
}