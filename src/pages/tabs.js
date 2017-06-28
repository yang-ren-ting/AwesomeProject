import React, { Component } from 'react';
import { StyleSheet, Image } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { TABS, API } from '../../config/config'
import Chat from './tab/chat';
import Contact from './tab/contact';
import Find from './tab/find';
import Mine from './tab/mine';
const tabs = TABS;
const colorStyle = API.color;
const Home = TabNavigator({
  Chat: {
    screen: Chat,
    path:'/chat',
    navigationOptions: () => TabOptions(tabs.chat.title, TABS.chat.imgUrl, colorStyle.dark, colorStyle.active),
  },
  Contact: {
    screen: Contact,
    navigationOptions: () => TabOptions(tabs.contact.title, TABS.contact.imgUrl, colorStyle.dark, colorStyle.active),
  },
  Find: {
    screen: Find,
    navigationOptions: ()=> TabOptions(tabs.find.title,tabs.find.imgUrl,colorStyle.dark,colorStyle.active),
  },
   Mine: {
    screen: Mine,
    navigationOptions: () => TabOptions(tabs.mine.title, tabs.mine.imgUrl, colorStyle.dark, colorStyle.active, '我的'),
  },
}, {
    animationEnabled: false, // 切换页面时是否有动画效果
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 是否可以左右滑动切换tab
    backBehavior: 'none', // 按 back 键是否跳转到第一个Tab(首页)， none 为不跳转
    tabBarOptions: {
      activeTintColor: colorStyle.active, // 文字和图片选中颜色
      inactiveTintColor: colorStyle.dark, // 文字和图片未选中颜色
      showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
      indicatorStyle: {
        height: 0  // 如TabBar下面显示有一条线，可以设高度为0后隐藏
      },
      style: {
        backgroundColor: '#fff', // TabBar 背景色
        // height: 44
      },
      labelStyle: {
        fontSize: 12, // 文字大小
      },
    },
  });
const TabOptions = (tabBarTitle, normalImage, olderColor, activeColor, headTitle) => {
  const tabBarLabel = tabBarTitle;
  const tabBarIcon = (({ tintColor, focused }) => {
    return (
      <Image
        source={normalImage}
        style={[styles.tabBarIcon, { tintColor: !focused ? olderColor : activeColor }]}
      />
    )
  });
  const headerTitle = !headTitle ? '微Q' : headTitle;
  const headerTitleStyle = { fontSize: 16, color: 'white', alignSelf: 'center' };
  // header的style
  const headerStyle = { backgroundColor: '#999', height: 50 };
  const tabBarVisible = true;
  const header = null;
  return { tabBarLabel, tabBarIcon, headerTitle, headerTitleStyle, headerStyle, tabBarVisible,header };
};
export default Home;
const styles = StyleSheet.create({
  tabBarIcon: {
    width: 15,
    height: 15
  },
});


