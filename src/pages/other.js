import React,{ Component } from 'react';
import { Platform,Image,MapView,StatusBar,StyleSheet,Text,TouchableHighlight,View,Dimensions } from 'react-native';
//import Util from './utils';
import Icon from 'react-native-vector-icons/Ionicons';
var  deviceWidth = Dimensions.get('window').width;
var deviceHeight = Dimensions.get('window').height;
export class Map extends  React.Component{
  static defaultProps = {
      mapType: 'standard',
      showsUserLocation: false,
      followUserLocation: false,
  }; 

  static propTypes = {
      mapType: React.PropTypes.oneOf(['standard', 'satellite','hybrid']),
      // mapStyle: View.PropTypes.style,
      showsUserLocation: React.PropTypes.bool.isRequired,
      followUserLocation: React.PropTypes.bool.isRequired,
  };

  constructor() {
    super();
    this.state = {
      isFirstLoad: true,
      mapRegion: undefined,
      annotations: [],
    };
  }

  _getAnnotations(region) {
    return [{
      longitude: region.longitude,
      latitude: region.latitude,
      title: 'You Are Here',
    }];
  }

  _onRegionChangeComplete(region) {
    if (this.state.isFirstLoad) {
      this.setState({
        annotations: this._getAnnotations(region),
        isFirstLoad: false,
      });
    }
  }

  render() {
    return(
      <View>
        <MapView
          style={this.props.mapStyle} 
          mapType = {this.props.mapType}
          showsUserLocation={this.props.showsUserLocation}
          followUserLocation={this.props.followUserLocation}
          onRegionChangeComplete={(region) => this._onRegionChangeComplete(region)}
          region={this.state.mapRegion}
          annotations={this.state.annotations}/>
      </View>
    )
  }
}

export default class Other extends React.Component{
  constructor() {
    super();
    this.state = {
      showGeo:false
    };
  }
  
  componentDidMount() {
    if(Platform.OS === "ios"){
      StatusBar.setBarStyle(0);
    }
  }

  _getLocation() {
    this.setState({
      showGeo: true
    })
  }

	render() {
		return(
			<View style={styles.container}>
        <Map mapTyle="standard" mapStyle={styles.map} showsUserLocation={this.state.showGeo} followUserLocation={this.state.showGeo}></Map>
        <TouchableHighlight underlayColor="#00bd03" style={styles.btn} onPress={() => this._getLocation()}>
          <Text style={styles.btnText}><Icon size={18} name="md-navigate"> </Icon> Find my location</Text>
        </TouchableHighlight>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    paddingTop: 60
  },
  map:{
    width: deviceWidth,
    height:deviceHeight-120
  },
  btn:{
    backgroundColor:"#00a803",
    width: deviceWidth-80,
    height: 40,
    borderWidth:2,
    borderColor: "#009302",
    borderRadius: 4,
    justifyContent:"center",
    marginTop:10
  },
  btnText:{
    textAlign:"center",
    fontSize:18,
    color:"#fff"
  },
});