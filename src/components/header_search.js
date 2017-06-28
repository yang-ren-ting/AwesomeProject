import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>search</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({  
    container: {  
        flexDirection: 'row',  
        paddingLeft: 10,  
        paddingRight: 10,  
        paddingTop: Platform.OS === 'ios' ? 20 : 0,   // 处理iOS状态栏  
        height: Platform.OS === 'ios' ? 68 : 48,   // 处理iOS状态栏  
        backgroundColor: '#d74047',  
        alignItems: 'center'  
    }});  