import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper2';
import { MENU } from '../../config/config';
var deviceWidth = Dimensions.get('window').width;
export default class Menu extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Swiper style={styles.container} showsButtons={true} >
                <View style={styles.imgview}>
                    {
                        MENU.map((value,key) =>
                            <View style={styles.imgstyle} key={key}>
                                <Image source={value.imgurl}  style={styles.ionImg}/>
                                <Text style={{textAlign:'center'}}>{value.title}</Text>
                            </View>
                            
                        )
                    }

                </View>
                <View >
                    <Image source={require('../../image/banner1.jpg')} style={{height:200}}/>
                </View>
           </Swiper>
            //  <Swiper style={styles.container} showsButtons={true}   activeDotStyle={{backgroundColor:'red', width: 20, height: 20}}  paginationStyle={{ bottom: 20 }} dotStyle={{backgroundColor:'white', width: 20, height: 20}}>
            //     <View >
            //         <Image source={require('../../image/banner1.jpg')} />
            //     </View>
            //     <View >
            //         <Image source={require('../../image/banner2.jpg')}  style={{height:400}} />
            //     </View>
            // </Swiper>
        )
    };

}
const styles = StyleSheet.create({
    container: {
        marginTop: 90,
       // paddingBottom:30
    },
    imgview: {
        flexDirection: 'row',
       // backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        width:'100%',
        height:200
    },
    imgstyle: {
        width: 1 / 5 * deviceWidth,
       // color: 'red',
        height: 100,
        backgroundColor: '#ccc',
        padding:8,
    },
    ionImg:{
        width:'90%',
        height:'60%',
        borderRadius:2
    }
    
})
