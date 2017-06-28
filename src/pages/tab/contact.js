import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  SectionList,
  FlatList,
  Button,
  Image
} from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [{ key: 'a' }, { key: 'b' }]

    }
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>聊天页面</Text>
        <Text>{this.state.data[0].key}</Text>
        <FlatList
          data={[{ key: 'a' }, { key: 'b' }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />
        <Text>聊天页面</Text>
      </View>
    );

  }
}
