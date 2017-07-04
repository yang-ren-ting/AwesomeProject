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
export  default class Mine extends React.Component {
  static navigationOptions = {
    title: '个人中心',
   
  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>聊天页面   </Text>
         {/*<FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text >{item.key}</Text>}
        />*/}
      </View>
    );
    
  }
}