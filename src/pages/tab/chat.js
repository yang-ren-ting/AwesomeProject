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
  Image,
  Platform
} from 'react-native';
import { StackNavigator,TabNavigator, } from 'react-navigation';
import Search from '../../components/header_search';
import Banner from '../../components/banner';
import Menu from '../../components/second_menu'
export default class Chat extends React.Component {
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <Search/>
          <Banner/>
          {/*<Menu style= {styles.cont}/>*/}
         {/*<Text style={styles.cont}>测试</Text>*/}
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
     flexDirection: 'column',
  },
  cont: {
   marginTop: Platform.OS === 'ios' ? 68 : 48, 
   flex:1
  }
})