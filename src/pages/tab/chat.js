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
export default class Chat extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>聊天页面</Text>
       <Image source={require('../../../image/chat.png')} />
         <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Other', { name: 'Jane' })
        }
      />
      </View>
    );
    
  }
}