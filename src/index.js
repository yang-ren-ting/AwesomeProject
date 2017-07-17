import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { StackNavigator ,TabNavigator} from 'react-navigation';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux'; 
import reducers from './reducers/index';
import Home  from './pages/tabs';
import Other from './pages/other';
import AddTodo from './pages/test'
const Navigator = StackNavigator({
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
export default class AwesomeProject extends Component {  
  render() { 
        let initState = { num: 0,text:"dfdsfds"};   
        let store = createStore(reducers,initState);
        return (  
           <Provider store={store}>
             <Navigator/>  
          </Provider>
         
        );  
  }  
}  
AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);

