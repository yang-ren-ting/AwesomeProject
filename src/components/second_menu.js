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
    dotest(obj){
        alert(obj.title)
    }
    render() {
        return (
            <View style={styles.container} >
                <Swiper height={200}  dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
                        activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3,  marginBottom: 3}} />}
                        paginationStyle={{ bottom: 0, left: null, right: '48%'}}  autoplay={false} loop={false}>
                     
                        <View style={styles.imgview}>
                            {
                                MENU[0].map((value,key) =>
                                <TouchableWithoutFeedback onPress={()=>this.dotest(value)} key={key}>  
                                    <View style={styles.imgstyle} >
                                        <Image source={value.imgurl}  style={styles.ionImg}/>
                                        <Text style={{textAlign:'center'}}>{value.title}</Text>
                                    </View>
                                 </TouchableWithoutFeedback>  
                                    
                                )
                            }

                        </View>
                    
                    <View style={styles.imgview}>
                        {
                            MENU[1].map((value,key) =>
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
           </View>
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
       marginTop: 160,
       height:200,
       paddingBottom:30,
       backgroundColor:'blue',
       flexDirection: 'row',
    },
    imgview: {
       flexDirection: 'row',
       backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: 'wrap',
        width:'100%',
        height:200,
    },
    imgstyle: {
        width: 1 / 5 * deviceWidth,
       // color: 'red',
        height: 100,
        backgroundColor: '#ccc',
        padding:8,
        paddingBottom:0
    },
    ionImg:{
        width:'90%',
        height:'60%',
        borderRadius:2
    }
    
})
