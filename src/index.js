import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator ,TabNavigator} from 'react-navigation';
import Home  from './pages/tabs';
import Other from './pages/other'
const AwesomeProject = StackNavigator({
  Home: { screen: Home },
  Other: { 
    screen: Other,
    navigationOptions:{
      //header:null
       title: '其他',
       visible:false
    }
   },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
// });

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

