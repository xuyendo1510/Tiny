import React, {Component} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import Base from './Base';

export default class Login extends Base {
  renderScreen () {
    return (
      <View style={styles.container}>
        {this.renderScreen()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
 
});