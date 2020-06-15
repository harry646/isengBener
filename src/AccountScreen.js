import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import axios from 'axios';

const AccountScreen = ({ route,navigation }) =>{

  const getData =()=>{
    axios
    //GET Request
    .get('https://api.kawalcorona.com/indonesia')
    .then(function(response){
      alert(JSON.stringify(response.data));
    })
    .catch(function(error){
      alert(error.message);
    })
    .finally(function(){
      alert('Alhamdulillah');
    });
  };

  const getDataUsingAsyncAwaitGetCall = async() =>{
    try{
      const response = await axios.get(
        'https://api.kawalcorona.com/indonesia');
      alert(JSON.stringify(response.data));
    }
    catch(error){
      alert(error.message);
    }
  };
  const state = this.state;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
      <Text>SSS</Text>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  container:{
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: '#fff'
  },
  head: { 
    height: 40,
    backgroundColor: '#f1f8ff',
  },
  text: { 
    margin: 6,
    textAlign: 'center',
  }
});
export default AccountScreen;