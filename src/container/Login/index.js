import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Base from '../Base'
export default class Login extends Base {
  renderScreen () {
    return (
      <View>
        <Text>Login in screen</Text>
      </View>
    )
  }
  
}