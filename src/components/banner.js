'use strict';  
  
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
} from 'react-native';  
  
import ViewPager from 'react-native-viewpager';  
  
var deviceWidth = Dimensions.get('window').width;  
  
import {BANNER_IMGS}  from "../../config/image" ;
  
export default class Banner extends React.Component {  
  
    constructor(props) {  
        super(props);  
        // 用于构建DataSource对象  
        var dataSource = new ViewPager.DataSource({  
            pageHasChanged: (p1, p2) => p1 !== p2,  
        });  
        // 实际的DataSources存放在state中  
        this.state = {  
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)  
        }  
    }  
  
    _renderPage(data, pageID) {  
        return (  
            <Image  
                source={data}  
                style={styles.page}/>  
        );  
    }  
  
    /** 
    dataSource: 提供页面数据, 
    renderPage: 用于渲染页面视图, 
    autoPlay: 为true 将自动播放, 
    isLoop: 为true支持循环播放, 
    locked: 为true禁止触摸滚动, 
    onChangePage: 页面变化的回调, 
    renderPageIndicator: 渲染自定义的 ViewPager indicator. 
    */  
    render() {  
        return (  
            <View style={styles.container}>  
                  <ViewPager  
                    style={{height:130}}  
                    dataSource={this.state.dataSource}  
                    renderPage={this._renderPage}  
                    isLoop={true}  
                    autoPlay={true}/>  
            </View>  
        );  
    }  
}  
  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        flexDirection: 'row',  
        alignItems: 'flex-start',  
       // paddingTop:5,  
      //  paddingLeft:5,  
        backgroundColor:'#999999',  
      //  paddingRight:5,  
        paddingBottom:5,  
    },  
    page: {  
        width: '100%',//设备宽(只是一种实现，此处多余)  
        flex: 1,  
        height: 160,  
        resizeMode: 'stretch',
    },  
});  