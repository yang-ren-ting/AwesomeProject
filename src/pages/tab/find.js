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
export default class Find extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>朋友圈</Text>
         <Button
        title="Go to Jane's profile"
        onPress={() =>
          navigate('Other', { name: 'Jane' })
        }
      />
      <Button
        title="计数器redux"
        onPress={() =>
          navigate('AddTodo')
        }
      />
        <Button
        title="手势密码"
        onPress={() =>
          navigate('Pastouch')
        }
      />
       <FlatList
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
        />
      </View>
    );
    
  }
}