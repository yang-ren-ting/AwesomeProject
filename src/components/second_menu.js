import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import { MENU } from '../../config/config'
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Swiper style={styles.container} showsButtons={true}   activeDotStyle={{backgroundColor:'red', width: 6, height: 6}}  paginationStyle={{ bottom: 10 }} dotStyle={{backgroundColor:'white', width: 6, height: 6}}>
                <View >
                    <Image source={require('../../image/banner1.jpg')} />
                </View>
                <View >
                    <Image source={require('../../image/banner1.jpg')} />
                </View>
            </Swiper>
        )
    };

}
const styles = StyleSheet.create({ 
    container:{
        marginTop:80
    }
 })
