import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Base from '../Base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Variable from '../../common/baseStyles'

Icon.loadFont();


export default class Login extends Base {
  renderScreen () {
    return (
      <View style={styles.container}>
        <Text style={styles.loginText}>Login</Text>
        
        <TouchableOpacity style={styles.loginFacebookButton}>
          <Icon name="facebook" size={20} color="#fff" /> 
          <Text style = {styles.loginFacebookText}>Login By Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginGoogleButton}>
          <Icon name="google" size={20} color="#000" /> 
          <Text style = {styles.loginGoogleText}>Login By Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginGoogleButton}>
          <Icon name="envelope" size={20} color="#000" /> 
          <Text style = {styles.loginGoogleText}>Login By Email</Text>
        </TouchableOpacity>

        <Text style = {styles.skipLogin} onPress = {this.onPressSkip}>Skip Login</Text>
      
      </View>
    )
  }
  onPressSkip = () => {
    Actions.Home()
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 16,

  },
  loginText: {
    marginTop: Variable.deviceHeight * 0.1,
    fontSize: 32,
    fontWeight: 'bold'
  },
  loginFacebookButton: {
    backgroundColor: 'blue',
    marginTop: Variable.deviceHeight * 0.1,
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 40
  },
  loginFacebookText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8
  },
  loginGoogleButton: {
    marginTop: 32,
    paddingVertical: 8,
    borderRadius: 8,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: '#000'
  },
  loginGoogleText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 8
  },
  skipLogin: {
    textAlign: 'center',
    marginTop: 32,
    color: 'blue'

  }

 
});
