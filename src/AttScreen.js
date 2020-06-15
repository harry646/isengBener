import React, { Component } from 'react';
import { View, Text, SafeAreaView, Alert,
         StyleSheet, TouchableOpacity,
         PermissionsAndroid, Platform, Image } from 'react-native';
import { Button } from 'react-native-elements';
import Geolocation from '@react-native-community/geolocation';


class AttScreen extends Component{
  constructor(props){
    super(props);
    this.state={
      date:'',
      currentLongitude:'unknown',//Initial Longitude
      currentLatitude: 'unknown',//Initial Latitude      
    };
  }
  /*state = {
    currentLongitude:'unknown',//Initial Longitude
    currentLatitude: 'unknown',//Initial Latitude
  }*/
  componentDidMount(){
    var that = this;

    if(Platform.OS === 'ios'){
      this.callLocation(that);
    }
    else{
        async function requestLocationPermission() {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                'title': 'Location Access Required',
                'message': 'This App needs to Access your location'
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              //To Check, If Permission is granted
              that.callLocation(that);
            } else {
              alert("Permission Denied");
            }
          } catch (err) {
            alert("err",err);
            console.warn(err)
          }
        }
        requestLocationPermission();
      }

    var date = new Date().getDate();//current date
    var month = new Date().getMonth() + 1;//current month
    var year = new Date().getFullYear();//current year
    var hours = new Date().getHours();//current hour
    var min = new Date().getMinutes();//current minutes
    var sec = new Date().getSeconds();//current seconds

    that.setState({
      date:
       date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec,
    });
  }

  callLocation(that){
    Geolocation.getCurrentPosition(
        (position) =>{
          const currentLongitude = JSON.stringify(position.coords.longitude);
          const currentLatitude = JSON.stringify(position.coords.latitude);
          that.setState({ currentLongitude:currentLongitude });
          that.setState({ currentLatitude:currentLatitude });
        },
        (error) => alert (error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );

    that.watchID = Geolocation.watchPosition((position) =>{
      console.log(position);
      const currentLongitude = JSON.stringify(position.coords.longitude);
      const currentLatitude = JSON.stringify(position.coords.latitude);
      that.setState({ currentLongitude:currentLongitude });
      that.setState({ currentLatitude:currentLatitude });
    });
  }

  componentWillUnmount = () => {
    Geolocation.clearWatch(this.watchID);
  }

  render(){
    var Long = this.state.currentLongitude;
    var Lang = this.state.currentLatitude;
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
       <View>
          <Text style = {styles.boldText}>
             You are Here
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Longitude: {Long}
          </Text>
          <Text style={{justifyContent:'center',alignItems: 'center',marginTop:16}}>
            Latitude: {Lang}
          </Text>
       </View>

        <Text
        style={{
            fontSize: 20,
          }}
        >Current Date Time</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 16,
            marginBottom:15,
          }}>
          {this.state.date}
        </Text>
      <View style={styles.buttonRow}>
        <View style={{
          marginRight:40,
        }}>
        <Button
          title="Check In"
          type="outline"
          onPress={() => Alert.alert('Success')}
        />
        </View>
        <View>
        <Button
          title="Check Out"
          type="outline"
          onPress={() => Alert.alert('Succes')}
        />
        </View>
      </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCheck: {
  alignItems: "center",
  backgroundColor: "#DDDDDD",
  padding: 10
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
    padding:16,
    backgroundColor:'white'
  },
  boldText: {
    fontSize: 20,
    color: 'red',
  }
});
export default AttScreen;