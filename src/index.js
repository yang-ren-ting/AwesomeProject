/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

//textINput
class Greeting extends Component {
  constructor(props) {
    super(props);
     this.state = { text: '' }
  }

  render() {
    let display = this.state.showText ? this.props.text : '';
    return (
      <View >
        {/* 文本输入框 */}
        <TextInput 
            style={styles.textInputStyle}
            onChangeText={(text)=>{this.setState({text})}}
            placeholder="请输入账号1"
            placeholderTextColor="red"
            autoCapitalize="words"
            autoFocus={true}
            clearButtonMode = 'while-editing'//出现删除
            clearTextOnFocus = {true}
            editable={true}
            returnKeyType="done" 
        ></TextInput>
        <TextInput 
            style={styles.textInputStyle}
            onChange={() => {alert('文本框内容改变')}}
        ></TextInput>
        <Text>
          {this.state.text}
        </Text>
      </View>
    )
  }
}
class Test2 extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
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
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
    )
  }

}
class ChatScreen extends React.Component {
  static navigationOptions = {
    title: '聊天页面',
  };
  render() {
    return (
      <View>
        <Text>单独页面</Text>
      </View>
    );
  }
}
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>tab1</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}
class RecentChatsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>tab1</Text>
        <Button
          onPress={() => navigate('Chat')}
          title="Chat with Lucy"
        />
      </View>
    );
    
  }
}

class AllContactsScreen extends React.Component {
  render() {
   const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>tab2</Text>
        <Button
         onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
        />
      </View>
    );
  }
}
const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
MainScreenNavigator.navigationOptions = {
  title: 'My Chats',
};
const AwesomeProject = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen },
});
// export default class AwesomeProject extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { text: '' }
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//       <Text>速度</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'space-between',
  //   alignItems: 'stretch',
  //   backgroundColor: '#F5FCFF',
  //   flexDirection: 'row',

  // },
  container: {
    flex: 1
  },
   item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'flex-start',
    margin: 2,
    marginTop: 0,
    color: 'red',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInputStyle: {
    // 设置尺寸
    width: '100%',
    height: 40,
    marginTop: 100,
    // 设置背景颜色
    backgroundColor: 'green'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

