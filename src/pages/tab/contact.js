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

export default class Contact extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>联系人页面</Text>
       
      </View>
    );
    
  }
}