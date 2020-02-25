
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Base from '../Base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../common/baseStyles'

Icon.loadFont();


class Account extends Component {
  render () {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.loginText}>Account</Text>
        
        
      
      </SafeAreaView>
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginHorizontal: 16,

  },
  

 
});

export default Account