import React,{Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Dimensions,
  Alert,
} from 'react-native';
import { connect,Provider } from 'react-redux';
import { addTodo,decTodo,updateText } from '../actions/action'
 
const {width, height} = Dimensions.get('window');
 
class AddTodo extends React.Component {
    constructor(props) {
      super(props);
    }
    _onpress(val){
      console.log(val);
    }
    render() {
      const { dispatch,num ,text} = this.props
      return (
        <View style={styles.container}>
          
             <TouchableHighlight onPress={ () => dispatch(addTodo(num))}>
              <Text style={styles.itemText}>
                点击我就+1
              </Text>
             </TouchableHighlight>
          
          <Text style={{paddingTop:10,color:'red'}}>
            当前的Num值是:{num} ， 当前的Text值是：{text}
          </Text>
        </View>
      )
    }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    marginTop:20,
  },
  itemView:{
    backgroundColor:'grey',
    height:44,
    width:width,
    justifyContent:'center',
    marginTop:10,
  },
  itemText:{
    fontSize:15,
    color:'#ffffff',
    textAlign:'left',
    marginLeft:20,
  },
});
 
//selector：这是你自己编写的一个函数。这个函数声明了你的组件需要整个 store 中的哪一部分数据作为自己的 props。
function selector(state) {
  return {
    num: state.num ,
    text:state.text
  }
}
 
// 包装 component ，注入 dispatch 和 state 到其默认的 connect(selector)(App) 中；
export default connect(selector)(AddTodo);