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
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, TabNavigator } from 'react-navigation';
export default class Mine extends React.Component {
  static navigationOptions = {
    title: '个人中心',

  };
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.container}>
          <Icon
            name="ios-person"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={35}   //图片大小
            color='#00c670'
            style={styles.icon}
          />
          <Text style={styles.text}>个人信息</Text>
          <Icon
            name="ios-arrow-forward"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#3333'
            
          />
        </View>
        <View style={styles.container}>
          <Icon
            name="ios-pricetags"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={25}   //图片大小
            color='#ff7e45'
             style={styles.icon}
          />
          <Text style={styles.text}>我的收藏</Text>
          <Icon
            name="ios-arrow-forward"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#3333'
          />
        </View>
        <View style={styles.container}>
          <Icon
            name="ios-clipboard"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#ffce54'
             style={styles.icon}
          />
          <Text style={styles.text}>我的订单</Text>
          <Icon
            name="ios-arrow-forward"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#3333'
          />
        </View>
        <View style={styles.container}>
          <Icon
            name="ios-settings"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#3ac2db'
             style={styles.icon}
          />
          <Text style={styles.text}>安全设置</Text>
          <Icon
            name="ios-arrow-forward"   //图片名连接,可以到这个网址搜索:http://ionicons.com/, 使用时:去掉前面的 "icon-" !!!!
            size={30}   //图片大小
            color='#3333'
          />
        </View>
      </View>
    );

  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height:50,
   // justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'white',
    paddingLeft:10,
    paddingRight:10,
    borderBottomColor:'#ccc',
    borderBottomWidth:1

  },
  text: {
    flex: 1,
     paddingLeft:10,
     color:'#333',
     fontSize:16
   //backgroundColor:''
  },
  icon:{
    width:25
  }

})