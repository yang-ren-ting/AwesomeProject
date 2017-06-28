import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
  Button,
  Image
} from 'react-native';
import { StackNavigator ,TabNavigator} from 'react-navigation';
import Search from '../../components/header_search'
export default class Chat extends React.Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
        <Search></Search>
      
      </View>
    );
    
  }
}