import * as React from 'react';
import {  TouchableOpacity, StyleSheet,
          View, Text, SafeAreaView,
          Alert, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <View style={styles.rowMenu1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Account')}
            >
              <View style={styles.iconStyle}>
                <Image source={require('./asset/img/menu01.png')} />
                <Text
                  style={{marginLeft:20}}
                >
                  My Profile
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Att')}
            >
              <View style={styles.iconStyle}>
                <Image source={require('./asset/img/menu02.png')} />
                <Text
                  style={{marginLeft:20}}
                >
                  Attendance
                </Text>
              </View>
            </TouchableOpacity>          
          </View>
          <View style={styles.rowMenu1}>
            <TouchableOpacity
              onPress={() => Alert.alert('Under Contructions')}
            >
              <View style={styles.iconStyle}>
                <Image source={require('./asset/img/menu03.png')} />
                <Text
                  style={{marginLeft:20}}
                >
                  Pencet aku
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Alert.alert('Under Contructions')}
            >
              <View style={styles.iconStyle}>
                <Image source={require('./asset/img/menu02.png')} />
                <Text
                  style={{marginLeft:20}}
                >
                  Pencet aku 2
                </Text>
              </View>
            </TouchableOpacity>          
          </View>          
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Iseng Nyoba APP Andorid
        </Text>
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
  iconStyle:{
    alignItems:'center',
    width: 150,
    height:150,
    flexDirection: 'row',
  },
  rowMenu1:{
    flexDirection: 'row',
  }
});
export default HomeScreen;