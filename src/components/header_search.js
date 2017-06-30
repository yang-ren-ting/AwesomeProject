import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
export default class Search extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <Text style={styles.logo}>JD</Text>
          <Image source={require("../../image/search_logo.png")} style={styles.searchIcon} />
          <TextInput placeholder='搜索京东商品/店铺' style={styles.inputText} placeholdertTextColor="red" />
        </View>
        <Text style={styles.loginBtn}>登录</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:"100%",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 10 : 0,   // 处理iOS状态栏  
    height: Platform.OS === 'ios' ? 58 : 48,   // 处理iOS状态栏  
   // backgroundColor: '#d74047',
    alignItems: 'center',
    position:'absolute',
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  logo: {
    fontSize: 16,
    color: 'red',
    marginLeft:10
  },
  searchBox: {
    height: 30,
    flexDirection: 'row',
    flex: 1,  // 类似于android中的layout_weight,设置为1即自动拉伸填充  
    borderRadius: 15,  // 设置圆角边  
    backgroundColor: 'white',
    alignItems: 'center',
    //marginLeft: 8,
    marginRight: 12
  },
  searchIcon: {
    width: 16,
    height: 16,
    marginLeft: 5
  },
  loginBtn: {
    color: "white"
  },
  inputText: {
    flex: 1,
    backgroundColor: 'transparent',
    fontSize: 14
  }


});  